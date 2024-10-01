import { takeLatest } from 'redux-saga/effects'
import { workGetAllSongsFetchRequest } from './sagas/workGetAllSongsFetchRequest'
import { workGetSongFileFetchRequest } from './sagas/workGetSongFileFetchRequest'
import { workDeleteSongFetchRequest } from './sagas/workDeleteSongFetchRequest'
import { workAddSongFetchRequest } from './sagas/workAddSongFetchRequest'

function* songSaga() {
    yield takeLatest('song/getAllSongsFetch', workGetAllSongsFetchRequest)
    yield takeLatest('song/getSongFileFetch', workGetSongFileFetchRequest)
    yield takeLatest('song/deleteSongFetch', workDeleteSongFetchRequest)
    yield takeLatest('song/addSongFetch', workAddSongFetchRequest)
}

export default songSaga
