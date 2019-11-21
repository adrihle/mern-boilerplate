import { takeLatest, put } from 'redux-saga/effects'
import { SIGN_IN_REQUEST, urlAPI_SIGN_IN } from '../constants'
import axios from 'axios'

function* login ( user ){
    return yield ( axios.post( urlAPI_SIGN_IN, user ) )
}

function* loginWorker (action){
    try{
        const status = yield login(action.payload)
        if (status){
            yield put ({ type: status.data.type, payload: status.data })
        }
    }catch(e){
        return yield e
    }
}

export default function* (){
    yield takeLatest( SIGN_IN_REQUEST, loginWorker )
}