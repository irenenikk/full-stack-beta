import React from 'react'

export default ({ element }) => {
  return (
    <div>
      <h3>{element.content}</h3>
      <div>has {element.votes} votes</div>
      <div>for more info see <a href={element.info}>{element.info}</a></div>
    </div>
  )
}
