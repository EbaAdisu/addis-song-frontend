import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'

import songReducer from './features/song/songSlice'
import userReducer from './features/user/userSlice'
import songSaga from './features/song/songSaga'
import userSaga from './features/user/userSaga'

const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
    yield all([songSaga(), userSaga()])
}

export const store = configureStore({
    reducer: {
        song: songReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['song/addSongFetch'], // Ignore specific actions
                ignoredActionPaths: ['payload.file'], // Ignore paths with non-serializable data
                ignoredPaths: ['song.formData'], // Ignore paths in state
            },
            thunk: false,
        }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
