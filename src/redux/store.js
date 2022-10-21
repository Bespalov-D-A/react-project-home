import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers/main-reducer'
import formReducer from './../reducers/form-reducer'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { combineReducers } from 'redux';


const persistConfig = {
  key: 'root',
  storageSession,
  storage,
  stateReconciler: autoMergeLevel2
}


const banchReducers = combineReducers({
  mainReducer, 
  formReducer
})

const persistedReducer = persistReducer(persistConfig, banchReducers)

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    main: persistedReducer,
  },
    middleware: [thunk]
})

export const persistor = persistStore(store)
