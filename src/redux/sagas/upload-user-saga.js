import { takeLatest, put } from 'redux-saga/effects'
import { UPLOAD_USER_REQUEST, EMAIL_ALREADY_REGISTERED, USER_IMAGE_UPLOADED, UPLOAD_USER_IMAGE_ERROR, USER_UPLOADED, UPLOAD_USER_ERROR, urlAPI_UPLOAD_USER, urlAPI_UPLOAD_USER_IMAGE, urlAPI_CHECK_EMAIL } from '../constants'
import axios from 'axios'

function* checkEmail(email) {
    const payload = { email }
    return yield (axios.post(urlAPI_CHECK_EMAIL, payload))
}

function* uploadNewUserImage(formData) {
    return yield (axios.post(urlAPI_UPLOAD_USER_IMAGE, formData))
}

function* uploadNewUser(newUser) {
    return yield (axios.post(urlAPI_UPLOAD_USER, newUser))
}

function* newUserWorker(action) {
    try {
        const check = yield checkEmail(action.payload.email)
        if (check.data) {
            yield put({ type: EMAIL_ALREADY_REGISTERED })
        } else {
            const imagePayload = yield uploadNewUserImage(action.payload.image)
            if (imagePayload) {
                yield put({ type: USER_IMAGE_UPLOADED })
                action.payload.url = imagePayload.data
                const payload = yield uploadNewUser(action.payload)
                if (payload) {
                    yield put({ type: USER_UPLOADED, payload })
                } else {
                    yield put({ type: UPLOAD_USER_ERROR })
                }
            }
            else {
                yield put({ type: UPLOAD_USER_IMAGE_ERROR })
            }

        }

    } catch (e) {
        return yield e
    }
}

export default function* () {
    yield takeLatest(UPLOAD_USER_REQUEST, newUserWorker)
}