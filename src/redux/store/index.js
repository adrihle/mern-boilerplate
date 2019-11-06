import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
//importing reducers
import rootReducer from '../reducers'
//importing sagas
import rootSaga from '../sagas'

//enable redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const initializeSagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(initializeSagaMiddleware))
)

initializeSagaMiddleware.run(rootSaga)

export default store