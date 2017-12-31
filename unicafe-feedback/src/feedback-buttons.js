import React from 'react'

import FeedbackButton from './feedback-button'

export default ({ feedback, onClick }) => {
  return (
    <div>
    {
      feedback.map(f => {
        return (
          <FeedbackButton
            key={f.attribute}
            text={f.attribute}
            onClick={onClick}
          />
        )
      })
    }
    </div>
  )
}
