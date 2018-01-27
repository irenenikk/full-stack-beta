import React from 'react'
import { connect } from 'react-redux'
import RouteMenu from './Routes/RouteMenu'
import ShowRoutes from './Routes/ShowRoutes'
import { withRouter } from 'react-router-dom'

import Blogs from './Blogs/Blogs'
import BlogForm from './Forms/BlogForm'
import UserInfo from './UserInfo'
import Togglable from './Togglable'
import Users from './Users/Users'
import FancyUser from './Users/FancyUser'
import FancyBlog from './Blogs/FancyBlog'
import Notification from './Notification'

class Content extends React.Component {

  userById = (id) => {
    return this.props.users.find(u => u._id === id)
  }

  blogById = (id) => {
    return this.props.blogs.find(b => b._id === id)
  }

  render() {
    return (
      <div>
        <UserInfo />
        { this.props.notification.message && <Notification /> }
        <Togglable buttonLabel="New Blog">
          <BlogForm />
        </Togglable>
        <RouteMenu>
          <Users name='Users' path='/users' users={this.props.users}/>
          <Blogs name='Blogs' path='/blogs' blogs={this.props.blogs}/>
        </RouteMenu>
        <ShowRoutes>
          <FancyUser path='/users/:id' findElement={(id) => this.userById(id)}/>
          <FancyBlog path='/blogs/:id' findElement={(id) => this.blogById(id)} currentUser={this.props.currentUser}/>
        </ShowRoutes>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification,
    users: state.users,
    blogs: state.blogs,
    currentUser: state.session
  }
}

export default withRouter(connect(mapStateToProps, null)(Content))
