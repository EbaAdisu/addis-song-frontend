import { call, put, select } from 'redux-saga/effects'
import { uri } from '../../../config'
import { addSongSuccess, addSongFailure } from '../songSlice'

// Selector function to get the token from state

export function* workAddSongFetchRequest(action) {
    const token = localStorage.getItem('token')
    const formData = action.payload
    try {
        console.log(Object.fromEntries(formData.entries()))
        console.log('shit')
        const response = yield call(fetch, `${uri}/song`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        })
        console.log(response)
        if (!response.ok) {
            throw new Error(response.message)
        }
        const data = yield response.json()
        yield put(addSongSuccess(data.song))
    } catch (error) {
        console.log('error', error.message)
        yield put(addSongFailure(error.message))
    }
}
