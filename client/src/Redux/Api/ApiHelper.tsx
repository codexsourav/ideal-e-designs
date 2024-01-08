import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { getStorage } from '../../Lib/Storage';
import ApiHelperType, { ApiHelperInitialStateType } from '../../Interfaces/apiHelper/ApiData';
import { apiUrl } from '../../Contents/apiInfo';

export const MakeApiRequest = createAsyncThunk("MakeApiRequest", async (data: ApiHelperType) => {
    const response = await axios.request({
        method: data.method || "GET",
        url: apiUrl + data.path || "/",
        headers: {
            Accept: '*/*',
            Authorization: 'barer ' + (getStorage("auth") || "").toString(),
            'Content-Type': 'application/json'
        },
        data: data.body || "",
    });
    return response.data;
});

const initialState: ApiHelperInitialStateType = {
    isLoading: false,
    isError: false,
    data: null,
    error: null,
};

export const counterSlice = createSlice({
    name: 'apiHelper',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(MakeApiRequest.pending, (state) => {
            state.data = null;
            state.isLoading = true;
            state.isError = false;
            state.error = null;
        });
        builder.addCase(MakeApiRequest.fulfilled, (state, action: PayloadAction<AxiosResponse>) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.error = null;
        });
        builder.addCase(MakeApiRequest.rejected, (state, action) => {
            state.data = null;
            state.isLoading = false;
            state.isError = true;
            // @ts-ignore: Ignore TypeScript error for this line
            state.error = action.error?.response?.data.error || action.error?.response?.data.message || action.error?.message || action.error.toString();
            console.error({
                "name": action.error.name,
                "message": action.error.message,
                "code": action.error.code,
                "logFrom": "Api Helper Error Log"
            });

        });
    },
});


export default counterSlice.reducer