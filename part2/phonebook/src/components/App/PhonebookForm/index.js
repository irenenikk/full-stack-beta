import React from 'react'

import PhonebookInput from './PhonebookInput'
import PhonebookSubmitButton from './PhonebookSubmitButton'

export default ({ onNewNameChange, onSubmit, newNameValue }) => {
  return (
    <form>
      <PhonebookInput name="nimi" onChange={onNewNameChange} value={newNameValue}/>
      <PhonebookSubmitButton text="lisää" onSubmit={onSubmit} />
    </form>
  )
}
