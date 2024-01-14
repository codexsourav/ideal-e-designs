import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    value: 100
};
export const loading = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoader: (state, { payload }) => {
            state.value += payload;
        }
    }
});
export const { setLoader } = loading.actions;
export default loading.reducer;
