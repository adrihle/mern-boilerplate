import { fork } from 'redux-saga/effects'
import newUser from './sign-up-saga'
import login from './sign-in-saga'

export default function* (){
    yield fork (newUser)
    yield fork (login)
}