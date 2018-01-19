import React from 'react'
import { Route } from 'react-router-dom'

export default ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <div>
        {
          children.map(c => {
            return <Route exact path={c.props.path} render={({match}) => React.cloneElement(c, { element: c.props.findElement(Number(match.params.id)) })}/>
          })
        }
      </div>
    )
  }
  return (
    <Route exact path={children.props.path} render={({ match }) => React.cloneElement(children, { element: children.props.findElement(Number(match.params.id)) })
    }/>
  )
}
