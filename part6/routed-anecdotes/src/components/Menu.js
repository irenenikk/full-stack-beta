import React from 'react'
import { Route, Link } from 'react-router-dom'

export default ({ children }) => {
  return (
    <div>
      <div>
        {
        children.map(component => {
          return <span><Link to={`/${component.props.name.toLowerCase()}`}>{component.props.name}</Link> &nbsp;</span>
        })
        }
      </div>
      <div>
        {
          children.map(component => {
          return <Route exact path={`/${component.props.name.toLowerCase()}`} render={() => component} />
        })
        }
      </div>
    </div>
  )
}
