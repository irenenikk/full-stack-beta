import React from 'react'

import Average from './average-stat'
import PositiveStat from './positives-stat'

export default ({ feedback }) => {
  const totalFeedbacks = feedback.reduce((a, c) => a + c.counter, 0)
  if (totalFeedbacks === 0) {
    return <div>Yhtään palautetta ei ole annettu</div>
  }
  const mappedFeedback = feedback.map(f => {
    switch (f.attribute) {
      case 'hyvä':
        return { value: 1, counter: f.counter}
      case 'huono':
        return {value: -1, counter: f.counter}
      default:
        return {value: 0, counter: f.counter}
    }
    })
  return (
    <div>
      <p>Palautteita yhteensä {totalFeedbacks}</p>
      <table>
        <tbody>
        {
          feedback.map(f => {
            return <tr key={f.attribute} ><td>{f.attribute}:</td><td>{f.counter}</td></tr>
          })
        }
        <Average feedback={mappedFeedback}/>
        <PositiveStat feedback={mappedFeedback} />
        </tbody>
      </table>
    </div>
  )
}
