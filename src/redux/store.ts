import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import transactionsReducer from './reducers/transactionsReducer'
import uiReducer from './reducers/uiReducer'

const initialState = {}
const middleware = [thunk]
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose
  }
}
const reducer = combineReducers({
  ui: uiReducer,
  transactions: transactionsReducer,
})
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) as any
  )
)
export default store
