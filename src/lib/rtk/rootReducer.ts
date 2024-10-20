import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import categoryReducer from '@/lib/rtk/slices/category.slice'

const persistConfig = {
    key: 'HiRisk',
    storage: sessionStorage,
};

const rootReducer = combineReducers({
    category: categoryReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
