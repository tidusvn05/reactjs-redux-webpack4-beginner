import {combineReducers} from 'redux'

const defaultState = (state = '', action) => {
  switch(action.type){
    default:
      return state
  }
}

const indexReducer = combineReducers({
  defaultState
})

export default indexReducer