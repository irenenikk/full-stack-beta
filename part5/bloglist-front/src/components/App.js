import React from 'react'
import LoginForm from './Forms/LoginForm'
import blogService from '../services/blogs'
import loginService from '../services/login'
import Content from './Content'
import Notification from './Notification'

const localStorageKey = 'user'

class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        usernameField: '',
        passwordField: '',
        newBlog: {
          title: '',
          url: '',
          author: ''
        },
        blogs: [],
      }
    }

    async componentWillMount() {
      try {
        const resp = await blogService.getAll()
        this.setState({ blogs: resp })
      } catch (e) {
        this.handleError(e)
      }
      const storedUser = window.localStorage.getItem(localStorageKey)
      if (storedUser) {
        const user = JSON.parse(storedUser)
        this.setState({ user })
      }
    }

    handleError = (e) => {
      if (e.response) {
        return this.createNotification({ message: e.response.data, error: true })
      }
      if (e instanceof String) {
        return this.createNotification({ message: e, error: true })
      }
      this.createNotification({ message: 'Something went wrong', error: true })
    }

    handleLoginFieldChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    handleNewBlogFieldChange = (e) => {
      this.setState({
        ...this.state,
        newBlog: {
          ...this.state.newBlog,
          [e.target.name]: e.target.value
        }
       })
    }

    handleNewBlogSubmit = async (e) => {
      e.preventDefault()
      const blog = {
        title: this.state.newBlog.title,
        url: this.state.newBlog.url,
        author: this.state.newBlog.author
      }
      try {
        await blogService.postNewBlog(blog, this
          .state.user.token);
        const blogs = await blogService.getAll()
        this.setState({
          blogs,
          newBlog: {
            title: '',
            url: '',
            author: ''
          }
        })
        this.createNotification({ message: `Created new blog ${blog.title} by ${blog.author}` })
      } catch (e) {
        this.handleError(e)
      }
    }

    login = async (e) => {
      e.preventDefault()
      try {
        const response = await loginService.login({
          username: this.state.usernameField,
          password: this.state.passwordField
        })
        if (!response.token) {
          this.createNotification({ message: 'Invalid username or password', error: true })
          return
        }
          this.setState( { user: response, usernameField: '', passwordField: '' })
          window.localStorage.setItem(localStorageKey, JSON.stringify(response))
        } catch (e) {
        this.handleError(e)
      }
    }

    logout = () => {
      window.localStorage.removeItem(localStorageKey)
      this.setState({ user: undefined })
    }

    createNotification = (notification) => {
      this.setState({ notification })
      setTimeout(() => {
        this.setState({ notification: undefined })
      }, 5000);
    }

    handleBlogLike = async (blog) => {
      try {
        await blogService.updateBlog(blog, this.state.user.token)
        const blogs = await blogService.getAll()
        this.setState({ blogs })
        this.createNotification({ message: `Updated blog ${blog.title} by ${blog.author}` })
      } catch (e) {
        this.handleError(e)
      }
    }

    handleDeleteBlog = async (blog) => {
      if (window.confirm(`Delete ${blog.title}?`)) {
        try {
          await blogService.deleteBlog(blog, this.state.user.token)
          const blogs = await blogService.getAll()
          this.setState({ blogs })
          this.createNotification({ message: `Deleted blog ${blog.title} by ${blog.author}` })
        } catch (e) {
          this.handleError(e)
        }
      }
    }

    render() {
      return (
        <div>
          { this.state.notification && <Notification notification={this.state.notification} /> }
          { this.state.user === undefined &&
            <div className="login-form">
              <LoginForm
                onLogin={this.login}
                handleLoginFieldChange={this.handleLoginFieldChange}
                username={this.state.usernameField}
                password={this.state.passwordField}
              />
            </div>
          }
          {
            this.state.user !== undefined &&
            <div className="content">
              <Content
                className="content"
                user={this.state.user}
                blogs={this.state.blogs}
                onLogout={this.logout}
                handleNewBlogFieldChange={this.handleNewBlogFieldChange}
                newBlog={this.state.newBlog}
                handleNewBlogSubmit={this.handleNewBlogSubmit}
                onLike={this.handleBlogLike}
                handleDeleteBlog={this.handleDeleteBlog}
              />
            </div>
          }
        </div>
      );
    }
  }

  export default App;
