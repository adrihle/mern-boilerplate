import { fork } from 'redux-saga/effects'
import newUser from './upload-user-saga'

export default function* (){
    yield fork (newUser)
}