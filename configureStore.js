import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import app from './reducers'

import createSagaMiddleware from 'redux-saga'
import dataSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    app,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(dataSaga)
  return store
}
