import { createSlice } from '@reduxjs/toolkit'
import { ILoading } from '../../Interfaces/storeInterface';

const initialState: ILoading = {
    value: 100
}

export const loading = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoader: (state, { payload }: { payload: number }) => {
            state.value += payload;
        }
    }
});

export const { setLoader } = loading.actions

export default loading.reducer;