import { call, put, select } from 'redux-saga/effects'
import { uri } from '../../../config'
import { getSongFileSuccess, getSongFileFailure } from '../songSlice'

// Selector function to get the token from state

export function* workGetSongFileFetchRequest(action) {
    const token = localStorage.getItem('token')
    try {
        const response = yield call(
            fetch,
            uri + '/song/' + action.payload + '/file',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        if (!response.ok) {
            throw new Error('Failed to fetch song file')
        }
        const data = yield response.blob()
        const url = URL.createObjectURL(data)
        yield put(getSongFileSuccess(url))
    } catch (error) {
        yield put(getSongFileFailure(error.message))
    }
}
