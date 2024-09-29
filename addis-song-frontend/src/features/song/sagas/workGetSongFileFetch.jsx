import { call, put, select } from 'redux-saga/effects'
import { uri } from '../../../config'

import { getSongFileSuccess, getSongFileFailure } from '../songSlice'

// Selector function to get the token from state
const selectToken = (state) => state.user.token

function* workGetSongFileFetch(action) {
    const token = yield select(selectToken)
    const songId = action.payload // assuming the song ID is passed as the action payload

    try {
        const response = yield call(fetch, `${uri}/song/${songId}/file`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        if (response.ok) {
            const blob = yield response.blob() // get the data as a Blob if it's a binary file
            const url = URL.createObjectURL(blob) // create a URL for the Blob
            yield put(getSongFileSuccess(url)) // dispatch the success action with the URL
        } else {
            throw new Error(data.error)
        }
    } catch (error) {
        yield put(getSongFileFailure(error.message))
    }
}

export { workGetSongFileFetch }
