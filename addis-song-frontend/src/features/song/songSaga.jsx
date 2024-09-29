import { takeLatest } from 'redux-saga/effects'
import { workGetAllSongsFetch } from './sagas/workGetAllSongsFetch'
import { workGetSongFileFetch } from './sagas/workGetSongFileFetch'

function* songSaga() {
    yield takeLatest('song/getAllSongsFetch', workGetAllSongsFetch)
    yield takeLatest('song/getSongFileFetch', workGetSongFileFetch)
}

export default songSaga
