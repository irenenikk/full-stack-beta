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
      newName: ''
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
    const persons = this.state.persons.concat(newPerson)
    this.setState({ persons, newName: '' })
  }

  render() {
    return (
      <div>
        <AppTitle title="Puhelinluettelo" />
        <PhonebookForm
          onNewNameChange={this.onNewNameChange}
          onSubmit={this.onAddNewPerson}
          newNameValue={this.state.newName}
        />
        <AppTitle title="Numerot" />
        <PhonebookList
          persons={this.state.persons}
        />
      </div>
    )
  }
}
