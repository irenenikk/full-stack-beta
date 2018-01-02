import React from 'react'

import PhonebookInput from './PhonebookInput'
import PhonebookSubmitButton from './PhonebookSubmitButton'

export default ({ onNewNameChange, onNewNumberChange, onSubmit, newNameValue, newNumberValue }) => {
  return (
    <form>
      <PhonebookInput name="nimi" onChange={onNewNameChange} value={newNameValue}/>
      <PhonebookInput name="puhelinnumero" onChange={onNewNumberChange} value={newNumberValue}/>
      <PhonebookSubmitButton text="lisää" onSubmit={onSubmit} />
    </form>
  )
}
