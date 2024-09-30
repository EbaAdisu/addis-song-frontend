import { call, put, select } from 'redux-saga/effects'
import { uri } from '../../../config'
import { getAllSongsSuccess, getAllSongsFailure } from '../songSlice'

// Selector function to get the token from state
const selectToken = (state) => state.user.token

function* workGetAllSongsFetch() {
    // Use the `select` effect to get the token
    const token = yield select(selectToken)

    // console.log(token)
    try {
        // fetch with header
        const response = yield call(fetch, uri + '/song', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = yield response.json()

        if (response.status == 200) {
            yield put(getAllSongsSuccess(data.songs))
        } else {
            yield put(getAllSongsFailure(data.message))
        }
    } catch (error) {
        console.error(error)
    }
}

export { workGetAllSongsFetch }
