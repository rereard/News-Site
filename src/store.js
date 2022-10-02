import {configureStore} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import newsReducer from './features/newsSlice'
import savedReducer from './features/savedSlice'
export const store = configureStore({
    reducer: {
        news: newsReducer,
        saved: savedReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})