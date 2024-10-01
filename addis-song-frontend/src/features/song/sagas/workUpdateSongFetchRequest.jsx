import { call, put } from 'redux-saga/effects'
import { uri } from '../../../config'
import { updateSongSuccess, updateSongFailure } from '../songSlice'

export function* workUpdateSongFetchRequest(action) {
    const token = localStorage.getItem('token')
    const { id, title, artist, description } = action.payload
    console.log(action.payload)
    try {
        const response = yield call(fetch, `${uri}/song/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title, artist, description }),
        })
        console.log('scad', response)

        if (!response.ok) {
            throw new Error('Failed to update song')
        }

        const data = yield response.json()
        console.log(data)
        yield put(updateSongSuccess(data.song))
    } catch (error) {
        yield put(updateSongFailure(error.message))
    }
}
