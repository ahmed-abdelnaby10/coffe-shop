import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import categoryReducer from '@/lib/rtk/slices/category.slice'

const persistConfig = {
    key: 'HiRisk',
    storage,
};

const rootReducer = combineReducers({
    category: categoryReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
