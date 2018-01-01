import React from 'react'

import PhonebookInput from './PhonebookInput'
import PhonebookSubmitButton from './PhonebookSubmitButton'
import FormError from './FormError'

export default ({ onNewNameChange, onNewNumberChange, onSubmit, newNameValue, newNumberValue, errorMessage }) => {
  return (
    <form>
      <PhonebookInput name="nimi" onChange={onNewNameChange} value={newNameValue}/>
      <PhonebookInput name="puhelinnumero" onChange={onNewNumberChange} value={newNumberValue}/>
      <FormError message={errorMessage} />
      <PhonebookSubmitButton text="lisää" onSubmit={onSubmit} />
    </form>
  )
}
