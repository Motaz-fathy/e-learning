import {combineReducers} from 'redux'
import {LoginReducer , RegisterReducer} from './AuthReducer'

export const Reducers = combineReducers({
    LoginReducer,
    RegisterReducer
})
