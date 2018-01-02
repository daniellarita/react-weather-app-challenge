// Module
import {combineReducers} from 'redux'
import cityReducer from './cityReducer'

// File

const rootReducer = combineReducers({
  city: cityReducer
})

export default rootReducer
