import React from 'react'

export default ({ content }) => {
  const totalExercises = content.reduce((a, c) => a + c.exercises, 0);
  return <p>Yhteensä {totalExercises} tehtävää</p>
}
