import React from 'react'

export default ({ user, onLogout }) => {
  return (
    <div className="user-info">
      <div>
        Logged in as {user.username}
        <button
          className="log-out-button"
          type="button"
          onClick={onLogout}
        >
          Log out
        </button>
      </div>
    </div>
  )
}
