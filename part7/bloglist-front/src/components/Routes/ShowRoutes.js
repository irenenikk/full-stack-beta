// reused from part6/routed-anecdotes

import React from 'react'
import { Route } from 'react-router-dom'

export default ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <div>
        {
          children.map(c => {
            return <Route key={c.props.path} exact path={c.props.path} render={({ match, history }) => React.cloneElement(c, { element: c.props.findElement(match.params.id), history })}/>
          })
        }
      </div>
    )
  }
  return (
    <Route exact path={children.props.path} render={({ match, history }) => React.cloneElement(children, { element: children.props.findElement(match.params.id), history })
    }/>
  )
}

