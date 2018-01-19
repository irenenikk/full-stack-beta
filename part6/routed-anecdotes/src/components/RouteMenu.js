import React from 'react'
import { Route, NavLink } from 'react-router-dom'

const activeStyles = {
  fontStyle: 'italic'
}

const menuStyles = {
  backgroundColor: '#e1e5ed',
  padding: '0.5rem'
}

export default ({ children }) => {
  if (Array.isArray(children)) {
    return (
      <div>
        <div style={menuStyles}>
          {
            children.map(c => {
            return <span key={`${c.props.name}-link`}><NavLink activeStyle={activeStyles} to={c.props.path}>{c.props.name}</NavLink> &nbsp;</span>
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
        <NavLink to={children.props.path}>{children.props.name}</NavLink>
        <Route key={`${children.props.name}-route`} exact path={children.props.path} render={({ history }) => React.cloneElement(children, { history})} />
    </div>
  )
}
