import { combineReducers } from 'redux'
import signUp from './sign-up-reducer'
import signIn from './sign-in-reducer'
import loadUsers from './load_users-reducer'

export default combineReducers({
    signUp,
    signIn,
    loadUsers
})