import { call, put, select } from 'redux-saga/effects'
import { uri } from '../../../config'
import { getAllSongsSuccess, getAllSongsFailure } from '../songSlice'

// Selector function to get the token from state

export function* workGetAllSongsFetchRequest() {
    const token = localStorage.getItem('token')
    try {
        const response = yield call(fetch, uri + '/song', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        if (!response.ok) {
            throw new Error('Failed to fetch songs')
        }
        const data = yield response.json()
        yield put(getAllSongsSuccess(data.songs))
    } catch (error) {
        yield put(getAllSongsFailure(error.message))
    }
}
