import { takeLatest, put } from 'redux-saga/effects'
import { UPLOAD_USER_REQUEST, USER_UPLOADED, UPLOAD_USER_ERROR, urlAPI_UPLOAD_USER } from '../constants'
import axios from 'axios'

function* uploadNewUser ( newUser ){
    return yield ( axios.post( urlAPI_UPLOAD_USER, newUser ) )
}

function* newUserWorker (action){
    try{
        const payload = yield uploadNewUser(action.payload)
        if (payload){
            yield put({ type: USER_UPLOADED, payload })
        }else{
            yield put({ type: UPLOAD_USER_ERROR })
        }
    }catch(e){
        return yield e
    }
}

export default function* (){
    yield takeLatest( UPLOAD_USER_REQUEST, newUserWorker )
}