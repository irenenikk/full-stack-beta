import React from 'react'

import AppTitle from './AppTitle'
import PhonebookForm from './PhonebookForm'
import PhonebookList from  './PhonebookList'
import PhonebookInput from './PhonebookForm/PhonebookInput'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          phoneNumber: '123456'
        },
        {
          name: 'Martti Tienari',
          phoneNumber: '040-123456'
        },
        {
          name: 'Arto Järvinen',
          phoneNumber: '040-123456'
        },
        {
          name: 'Lea Kutvonen',
          phoneNumber: '040-123456'
        }
      ],
      newName: '',
      newPhoneNumber: '',
      error: '',
      filter: '',
    }
  }

  onNewNameChange = (e) => {
    this.setState({ newName: e.target.value })
  }

  onNewPhoneNumberChange = (e) => {
    this.setState({ newPhoneNumber: e.target.value })
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
      phoneNumber: this.state.newPhoneNumber.trim()
    }
    if (!this.isNewPersonValid(newPerson)) {
      return
    }
    const persons = this.state.persons.concat(newPerson)
    this.setState({ persons, newName: '', newPhoneNumber: '' })
  }

  isNewPersonValid = (person) => {
    if (person.name === '') {
      this.createErrorMessage('Ole hyvä ja kirjoita lisättävälle henkilölle nimi')
      return false
    }
    if (person.phoneNumber === '') {
      this.createErrorMessage('Ole hyvä ja kirjoita lisättävälle henkilölle puhelinnumero')
      return false
    }
    const personNames = this.state.persons.map(p => p.name.toLowerCase());
    if (personNames.includes(person.name.toLowerCase())) {
      this.createErrorMessage(`${person.name} on jo puhelinluettelossa`)
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
          onNewPhoneNumberChange={this.onNewPhoneNumberChange}
          onSubmit={this.onAddNewPerson}
          newNameValue={this.state.newName}
          newPhoneNumberValue={this.state.newPhoneNumber}
          errorMessage={this.state.error}
        />
        <AppTitle title="Numerot" />
        <PhonebookList
          persons={personsToShow}
        />
      </div>
    )
  }
}
