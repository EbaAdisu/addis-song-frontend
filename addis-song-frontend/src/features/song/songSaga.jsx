import { takeLatest } from 'redux-saga/effects'
import { workGetAllSongsFetchRequest } from './sagas/workGetAllSongsFetchRequest'
import { workGetAllMySongsFetchRequest } from './sagas/workGetAllMySongsFetchRequest'
import { workGetSongFileFetchRequest } from './sagas/workGetSongFileFetchRequest'
import { workDeleteSongFetchRequest } from './sagas/workDeleteSongFetchRequest'
import { workAddSongFetchRequest } from './sagas/workAddSongFetchRequest'
import { workUpdateSongFetchRequest } from './sagas/workUpdateSongFetchRequest' // import the worker saga

function* songSaga() {
    yield takeLatest('song/getAllSongsFetch', workGetAllSongsFetchRequest)
    yield takeLatest('song/getAllMySongsFetch', workGetAllMySongsFetchRequest)
    yield takeLatest('song/getSongFileFetch', workGetSongFileFetchRequest)
    yield takeLatest('song/deleteSongFetch', workDeleteSongFetchRequest)
    yield takeLatest('song/addSongFetch', workAddSongFetchRequest)
    yield takeLatest('song/updateSongFetch', workUpdateSongFetchRequest) // add the effect
}

export default songSaga
