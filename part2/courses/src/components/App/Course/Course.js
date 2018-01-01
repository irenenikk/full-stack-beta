import React from 'react'

import Title from './CourseTitle';
import Stats from './Stats';
import Content from './Content/Content';

export default ({ course }) => {
  return (
    <div>
      <Title title={course.name} />
      <Content content={course.content} />
      <Stats content={course.content}/>
    </div>
  )
}
