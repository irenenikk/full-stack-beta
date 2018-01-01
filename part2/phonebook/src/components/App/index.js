import React from 'react'

import AppTitle from './AppTitle'
import PhonebookForm from './PhonebookForm'
import PhonebookList from  './PhonebookList'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          phoneNumber: '123456'
        }
      ],
      newName: '',
      newPhoneNumber: '',
      error: ''
    }
  }

  onNewNameChange = (e) => {
    this.setState({ newName: e.target.value })
  }

  onNewPhoneNumberChange = (e) => {
    this.setState({ newPhoneNumber: e.target.value })
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
    return (
      <div>
        <AppTitle title="Puhelinluettelo" />
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
          persons={this.state.persons}
        />
      </div>
    )
  }
}
