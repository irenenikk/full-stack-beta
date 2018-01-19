import React from 'react'
import { Route, Link } from 'react-router-dom'

export default ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <div>
        <div>
          {
            children.map(c => {
            return <span key={`${c.props.name}-link`} ><Link to={c.props.path}>{c.props.name}</Link> &nbsp;</span>
          })
          }
        </div>
        <div>
          {
            children.map(c => {
              return <Route key={`${c.props.name}-route`} exact path={c.props.path} render={({ history }) => React.cloneElement(c, { history})} />
          })
          }
        </div>
      </div>
    )
  }
  return (
    <div>
        <Link to={children.props.path}>{children.props.name}</Link>
        <Route key={`${children.props.name}-route`} exact path={children.props.path} render={({ history }) => React.cloneElement(children, { history})} />
    </div>
  )
}
