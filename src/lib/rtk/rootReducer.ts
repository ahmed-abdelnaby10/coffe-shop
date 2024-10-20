import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import categoryReducer from '@/lib/rtk/slices/category.slice'

/* eslint-disable @typescript-eslint/no-unused-vars */
const createNoopStorage = () => {
    return {
        getItem(_key: string) {
            return Promise.resolve(null);
        },
        setItem(_key: string, _value: unknown): Promise<void> {
            return Promise.resolve();
        },
        removeItem(_key: string) {
            return Promise.resolve();
        },
    };
};

const storage = typeof window !== 'undefined' 
    ? createWebStorage('session') 
    : createNoopStorage();

const persistConfig = {
    key: 'HiRisk',
    storage,
};

const rootReducer = combineReducers({
    category: categoryReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
