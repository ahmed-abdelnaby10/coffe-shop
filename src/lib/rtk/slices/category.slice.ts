import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'Category',
    initialState: "",
    reducers: {
        setCategory(state, action: PayloadAction<string>) {
            return action.payload
        },
    },
});

export const { setCategory } = categorySlice.actions;
export const { reducer } = categorySlice;
export default categorySlice.reducer;