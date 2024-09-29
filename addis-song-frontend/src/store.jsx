import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import songReducer from './features/song/songSlice'
import userReducer from './features/user/userSlice'
import songSaga from './features/song/songSaga' // Remove the `.jsx` extension, unless absolutely necessary.

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        song: songReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false, // Disable thunk middleware if not using it.
        }).concat(sagaMiddleware), // Add saga middleware after default middlewares.
})

sagaMiddleware.run(songSaga)
