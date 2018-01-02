import React from 'react'
import personService from '../../services/persons'

import AppTitle from './AppTitle'
import PhonebookForm from './PhonebookForm'
import PhonebookList from  './PhonebookList'
import PhonebookInput from './PhonebookForm/PhonebookInput'
import Notification from './Notification'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      notification: {},
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
        this.createNotification('Henkilöiden hakeminen ei onnistunut', true)
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
        this.createNotification(`Henkilö ${newPerson.name} luotu onnistuneesti`)
      })
      .catch((e) => {
        this.createNotification(`Ei voitu luoda henkilöä ${newPerson.name}`, true)
      })
  }

  deletePerson = (person) => {
    personService
      .deletePerson(person.id)
      .then(() => {
        const persons = this.state.persons.filter(p => p.id !== person.id)
        this.setState({ persons })
        this.createNotification(`Henkilö ${person.name} poistettu onnistuneesti`)
      })
      .catch((e) => {
        this.createNotification(`Henkilön ${person.name} poistaminen ei onnistunut`, true)
      })
  }

  updatePerson = (updatedPerson) => {
    personService
      .updatePerson(updatedPerson)
      .then(() => {
        const persons = this.state.persons.filter(p => p.id !== updatedPerson.id)
        this.setState({ persons: persons.concat(updatedPerson) })
        this.createNotification(`Henkilö ${updatedPerson.name} päivitetty onnistuneesti`)
      })
      .catch((e) => {
        this.createNotification(`Henkilön ${updatedPerson.name} päivitys ei onnistunut`, true)
      })
  }

  isNewPersonValid = (person) => {
    if (person.name === '') {
      this.createNotification('Ole hyvä ja kirjoita lisättävälle henkilölle nimi', true)
      return false
    }
    if (person.number === '') {
      this.createNotification('Ole hyvä ja kirjoita lisättävälle henkilölle puhelinnumero', true)
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

  createNotification = (message, isError) => {
    this.setState({
      notification: { message, error: isError},
    })
    setTimeout(() => {
      this.setState({ notification: {} })
    }, 1500);
  }

  render() {
    const personsToShow = this.filterPersons()
    return (
      <div>
        <Notification notification={this.state.notification} />
        <AppTitle title="Puhelinluettelo" />
        <PhonebookInput
          name="hae puhelinluettelosta"
          onChange={this.onFilterChange}
          value={this.state.filter}
        />
        <AppTitle title="Lisää" />
        <PhonebookForm
          onNewNameChange={this.onNewNameChange}
          onNewNumberChange={this.onNewNumberChange}
          onSubmit={this.onAddNewPerson}
          newNameValue={this.state.newName}
          newNumberValue={this.state.newNumber}
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
