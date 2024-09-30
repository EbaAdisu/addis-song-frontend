import { takeLatest } from 'redux-saga/effects'

import { workSignupRequest } from './sagas/workSignupRequest' // import the signup worker
import { workSigninRequest } from './sagas/workSigninRequest' // import the signin worker

function* userSaga() {
    yield takeLatest('user/signupRequest', workSignupRequest) // listen for signupRequest action
    yield takeLatest('user/signinRequest', workSigninRequest) // listen for signinRequest action
}

export default userSaga
