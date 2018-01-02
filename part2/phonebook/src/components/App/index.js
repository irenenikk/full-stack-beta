import React from 'react'
import personService from '../../services/persons'

import AppTitle from './AppTitle'
import PhonebookForm from './PhonebookForm'
import PhonebookList from  './PhonebookList'
import PhonebookInput from './PhonebookForm/PhonebookInput'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      error: '',
      filter: '',
    }
  }

  componentWillMount() {
    personService
      .getAllPersons()
      .then(persons => {
          this.setState({ persons })
      })
      .catch(e => {
        this.createErrorMessage('Henkilöiden hakeminen ei onnistunut')
      })
  }

  onNewNameChange = (e) => {
    this.setState({ newName: e.target.value })
  }

  onNewNumberChange = (e) => {
    this.setState({ newNumber: e.target.value })
  }

  onFilterChange = (e) => {
    const filter = e.target.value
    this.setState({ filter })
  }

  filterPersons = () => {
    const filter = this.state.filter.trim()
    if (filter !== '') {
       const personsToShow = this.state.persons.filter(p => {
        let filtered = false
        Object.values(p).forEach(field => {
          if (typeof field === "string") {
            const content = field.trim().toLowerCase();
            if (content.includes(filter)) {
              filtered = true
            }
          }
        })
        return filtered
      })
      return personsToShow
    }
    return this.state.persons
  }

  onAddNewPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: this.state.newName.trim(),
      number: this.state.newNumber.trim()
    }
    if (!this.isNewPersonValid(newPerson)) {
      return
    }
    personService
      .createPerson(newPerson)
      .then(newP => {
        const persons = this.state.persons.concat(newP)
        this.setState({ persons, newName: '', newNumber: '' })
      })
      .catch((e) => {
        this.createErrorMessage(`Ei voitu luoda henkilöä ${newPerson.name}`)
      })
  }

  deletePerson = (id) => {
    personService
      .deletePerson(id)
      .then(() => {
        const persons = this.state.persons.filter(p => p.id !== id)
        this.setState({ persons })
      })
  }

  updatePerson = (updatedPerson) => {
    personService
      .updatePerson(updatedPerson)
      .then(() => {
        const persons = this.state.persons.filter(p => p.id !== updatedPerson.id)
        this.setState({ persons: persons.concat(updatedPerson) })
      })
  }

  isNewPersonValid = (person) => {
    if (person.name === '') {
      this.createErrorMessage('Ole hyvä ja kirjoita lisättävälle henkilölle nimi')
      return false
    }
    if (person.number === '') {
      this.createErrorMessage('Ole hyvä ja kirjoita lisättävälle henkilölle puhelinnumero')
      return false
    }
    const personNames = this.state.persons.map(p => p.name.toLowerCase());
    if (personNames.includes(person.name.toLowerCase())) {
      const oldPerson = this.state.persons.find(p => p.name.toLowerCase() === person.name.toLowerCase())
      const updatedPerson = { ...person, id: oldPerson.id}
      this.updatePerson(updatedPerson)
      return false
    }
    return true
  }

  createErrorMessage = (error) => {
    this.setState({
      error,
    })
    setTimeout(() => {
      this.setState({ error: '' })
    }, 1500);
  }

  render() {
    const personsToShow = this.filterPersons()
    return (
      <div>
        <AppTitle title="Puhelinluettelo" />
        <PhonebookInput
          name="hae puhelinluettelosta"
          onChange={this.onFilterChange}
          value={this.state.filter}
        />
        <PhonebookForm
          onNewNameChange={this.onNewNameChange}
          onNewNumberChange={this.onNewNumberChange}
          onSubmit={this.onAddNewPerson}
          newNameValue={this.state.newName}
          newNumberValue={this.state.newNumber}
          errorMessage={this.state.error}
        />
        <AppTitle title="Numerot" />
        <PhonebookList
          persons={personsToShow}
          onDeletePerson={this.deletePerson}
        />
      </div>
    )
  }
}
