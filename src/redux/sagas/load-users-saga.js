import { takeLatest, put } from 'redux-saga/effects'
import { LOAD_USERS_REQUEST, LOAD_USERS_ERROR, LOAD_USERS_SUCCESSS, urlAPI_DOWNLOAD_USERS} from '../constants'
import axios from 'axios'

function* downloadUsers (){
    return yield (axios.get(urlAPI_DOWNLOAD_USERS))
}

function* downloadUsersWorker () {
    try{
        const payload = yield downloadUsers()
        if (payload){
            yield put({ type: LOAD_USERS_SUCCESSS, payload})
        }else{
            yield put({ type: LOAD_USERS_ERROR })
        }
    }catch (e){
        return yield e
    }
}

export default function* (){
    yield takeLatest(LOAD_USERS_REQUEST, downloadUsersWorker)
}