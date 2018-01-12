import React from 'react'

export default ({ onLogin, handleLoginFieldChange, username, password }) => {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onLogin}>
        <div>
          Username
          <input
            type="text"
            name="usernameField"
            value={username}
            onChange={handleLoginFieldChange}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            name="passwordField"
            value={password}
            onChange={handleLoginFieldChange}
          />
        </div>
      <button
        type="submit"
      >
        Log in
      </button>
      </form>
    </div>
  )
}
