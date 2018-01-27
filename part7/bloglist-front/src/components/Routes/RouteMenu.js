// reused from part6/routed-anecdotes

import React from 'react'
import { Route, NavLink } from 'react-router-dom'

export default ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <div>
        <div className="nav-bar">
          {
            children.map(c => {
              return <span className="nav-link link" key={`${c.props.name}-link`}><NavLink to={c.props.path}>{c.props.name}</NavLink></span>
            })
          }
        </div>
        <div>
          {
            children.map(c => {
              return <Route key={`${c.props.name}-route`} exact path={c.props.path} render={({ history }) => React.cloneElement(c, { history })} />
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div>
      <NavLink to={children.props.path}>{children.props.name}</NavLink>
      <Route key={`${children.props.name}-route`} exact path={children.props.path} render={({ history }) => React.cloneElement(children, { history})} />
    </div>
  )
}
