import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import notificationReducer from './state/reducers/notificationReducer'
import blogsReducer from './state/reducers/blogsReducer'
import sessionReducer from './state/reducers/sessionReducer'
import App from './components/App'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  session: sessionReducer
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
