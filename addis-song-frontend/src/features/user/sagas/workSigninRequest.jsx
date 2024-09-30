import { call, put } from 'redux-saga/effects'
import { uri } from '../../../config'
import { signinSuccess, signinFailure } from '../userSlice'

export function* workSigninRequest(action) {
    try {
        const response = yield call(fetch, uri + '/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.payload),
        })
        if (!response.ok) {
            throw new Error('Signin failed')
        }
        const data = yield response.json()
        yield put(signinSuccess(data))
    } catch (error) {
        yield put(signinFailure(error.message))
    }
}
