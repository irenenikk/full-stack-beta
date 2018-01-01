import React from 'react'

import PhonebookInput from './PhonebookInput'
import PhonebookSubmitButton from './PhonebookSubmitButton'
import FormError from './FormError'

export default ({ onNewNameChange, onNewPhoneNumberChange, onSubmit, newNameValue, newPhoneNumberValue, errorMessage }) => {
  return (
    <form>
      <PhonebookInput name="nimi" onChange={onNewNameChange} value={newNameValue}/>
      <PhonebookInput name="puhelinnumero" onChange={onNewPhoneNumberChange} value={newPhoneNumberValue}/>
      <FormError message={errorMessage} />
      <PhonebookSubmitButton text="lisää" onSubmit={onSubmit} />
    </form>
  )
}
