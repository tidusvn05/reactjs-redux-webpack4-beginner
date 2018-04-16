import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createLogger} from 'redux-logger';
import reducers from '../reducers'

var isDebuggingInChrome = !!window.navigator.userAgent;
var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
)

export {store}