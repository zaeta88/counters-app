import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import { createLogger } from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(createLogger())
)(createStore)

export default function configureStore(initialState = { counters: [] }) {
  return finalCreateStore(reducer, initialState)
}

