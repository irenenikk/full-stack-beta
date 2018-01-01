import React from 'react'

import PhonebookInput from './PhonebookInput'
import PhonebookSubmitButton from './PhonebookSubmitButton'
import FormError from './FormError'

export default ({ onNewNameChange, onSubmit, newNameValue, errorMessage }) => {
  return (
    <form>
      <PhonebookInput name="nimi" onChange={onNewNameChange} value={newNameValue}/>
      <FormError message={errorMessage} />
      <PhonebookSubmitButton text="lisää" onSubmit={onSubmit} />
    </form>
  )
}
