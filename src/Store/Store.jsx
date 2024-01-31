import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import assessmentsSlice from './AssessmentsReduxSlice'
import authSlice from './authSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authSlice.reducer)

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        assessmentsReducer: assessmentsSlice.reducer,
        authsReducer: authSlice.reducer
    },
})

const authSliceActions = authSlice.actions
const assessmentsSliceActions = assessmentsSlice.actions
export { authSliceActions, assessmentsSliceActions }
export const persistor = persistStore(store)