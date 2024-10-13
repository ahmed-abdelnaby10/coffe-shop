import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'HiRisk',
    storage,
};

const rootReducer = combineReducers({

});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
