import React from 'react'

import AppTitle from './AppTitle'
import Course from './Course/Course'

export default () => {
  const courses = []
  const course = {
    name: 'Half Stack -sovelluskehitys',
    content: [
      {
        id: 1,
        part: 'Reactin perusteet',
        exercises: 10
      },
      {
        id: 2,
        part: 'Tiedonvälitys propseilla',
        exercises: 7
      },
      {
        id: 3,
        part: 'Komponenttien tila',
        exercises: 14
      }
    ]
  }
  courses.push(course);
  return (
    <div>
      <AppTitle title="Courses" />
      {
        courses.map(c => <Course key={c.name} course={c} />)
      }
    </div>
  )
}
