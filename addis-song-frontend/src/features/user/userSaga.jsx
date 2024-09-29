import { call, put, takeLatest } from 'redux-saga/effects'
import { useSelector } from 'react-redux'
import { uri } from '../../config'
import { setUser } from './userSlice'

function* workSetUserFetch(action) {
    try {
        const response = yield call(fetch, uri + '/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(action.payload),
        })
        const data = yield response.json()
        yield put(setUser(data))
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

function* userSaga() {
    yield takeLatest('user/setUser', workSetUserFetch)
}
