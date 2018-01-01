import React from 'react'

import AppTitle from './AppTitle'
import PhonebookForm from './PhonebookForm'
import PhonebookList from  './PhonebookList'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: '',
      error: ''
    }
  }

  onNewNameChange = (e) => {
    this.setState({ newName: e.target.value })
  }

  onAddNewPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: this.state.newName
    }
    if (!this.isNewPersonValid(newPerson)) {
      this.createErrorMessage(`${newPerson.name} on jo puhelinluettelossa`)
      return
    }
    const persons = this.state.persons.concat(newPerson)
    this.setState({ persons, newName: '' })
  }

  isNewPersonValid = (person) => {
    const personNames = this.state.persons.map(p => p.name);
    if (personNames.includes(person.name)) {
      return false;
    }
    return true;
  }

  createErrorMessage = (error) => {
    this.setState({
      error,
      newName: ''
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
          onSubmit={this.onAddNewPerson}
          newNameValue={this.state.newName}
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
