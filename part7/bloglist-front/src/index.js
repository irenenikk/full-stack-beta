import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import notificationReducer from './state/reducers/notificationReducer'
import blogsReducer from './state/reducers/blogsReducer'
import sessionReducer from './state/reducers/sessionReducer'
import usersReducer from './state/reducers/usersReducer'
import App from './components/App'
import { loadSession } from './state/actions/sessionActions'
import { getAllBlogs } from './state/actions/blogActions'
import { getAllUsers } from './state/actions/userActions'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  session: sessionReducer,
  users: usersReducer,
})
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

store.dispatch(loadSession())
store.dispatch(getAllBlogs())
store.dispatch(getAllUsers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
