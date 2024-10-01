import { call, put, select } from 'redux-saga/effects'
import { uri } from '../../../config'
import { getAllMySongsSuccess, getAllMySongsFailure } from '../songSlice'

// Selector function to get the token from state

export function* workGetAllMySongsFetchRequest() {
    const token = localStorage.getItem('token')
    try {
        const response = yield call(fetch, uri + '/song' + '/mine', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        // console.log(response)
        if (!response.ok) {
            throw new Error('Failed to fetch songs')
        }
        const data = yield response.json()
        yield put(getAllMySongsSuccess(data.songs))
    } catch (error) {
        yield put(getAllMySongsFailure(error.message))
    }
}
