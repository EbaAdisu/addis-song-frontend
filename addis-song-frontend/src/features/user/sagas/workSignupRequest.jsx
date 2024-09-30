import { call, put } from 'redux-saga/effects'
import { uri } from '../../../config'
import { signupSuccess, signupFailure } from '../userSlice'

export function* workSignupRequest(action) {
    try {
        const response = yield call(fetch, uri + '/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.payload),
        })
        if (!response.ok) {
            throw new Error('Signup failed')
        }
        yield put(signupSuccess())
    } catch (error) {
        yield put(signupFailure(error.message))
    }
}
