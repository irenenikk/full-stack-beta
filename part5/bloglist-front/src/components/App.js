import React from 'react'
import LoginForm from './LoginForm'
import blogService from '../services/blogs'
import loginService from '../services/login'
import Content from './Content'

class App extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        usernameField: "",
        passwordField: "",
        blogs: []
      }
    }

    async componentWillMount() {
      const blogs = await blogService.getAll()
      this.setState({ blogs })
    }

    handleLoginFieldChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }

    login = async (e) => {
      e.preventDefault()
      const user = await loginService.login({
        username: this.state.usernameField,
        password: this.state.passwordField
      })
      this.setState( { user })
    }

    render() {
      return (
        <div>
          { this.state.user === undefined &&
            <LoginForm
            onLogin={this.login}
            handleLoginFieldChange={this.handleLoginFieldChange}
            username={this.state.usernameField}
            password={this.state.passwordField}
          />
          }
          {
            this.state.user !== undefined &&
            <Content
              user={this.state.user}
              blogs={this.state.blogs}
            />
          }
        </div>
      );
    }
  }

  export default App;
