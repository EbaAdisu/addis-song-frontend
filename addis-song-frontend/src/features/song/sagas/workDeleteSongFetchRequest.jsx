import { call, put, select } from 'redux-saga/effects'
import { uri } from '../../../config'
import { deleteSongSuccess, deleteSongFailure } from '../songSlice'

// Selector function to get the token from state

export function* workDeleteSongFetchRequest(action) {
    const token = localStorage.getItem('token')
    try {
        const response = yield call(fetch, `${uri}/song/${action.payload}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        if (!response.ok) {
            throw new Error('Failed to delete song')
        }
        yield put(deleteSongSuccess(action.payload))
    } catch (error) {
        yield put(deleteSongFailure(error.message))
    }
}
