var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getStorage } from '../../Lib/Storage';
import { apiUrl } from '../../Contents/apiInfo';
export const MakeApiRequest = createAsyncThunk("MakeApiRequest", (data) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.request({
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
}));
const initialState = {
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
        builder.addCase(MakeApiRequest.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isError = false;
            state.error = null;
        });
        builder.addCase(MakeApiRequest.rejected, (state, action) => {
            var _a, _b, _c, _d, _e;
            state.data = null;
            state.isLoading = false;
            state.isError = true;
            // @ts-ignore: Ignore TypeScript error for this line
            state.error = ((_b = (_a = action.error) === null || _a === void 0 ? void 0 : _a.response) === null || _b === void 0 ? void 0 : _b.data.error) || ((_d = (_c = action.error) === null || _c === void 0 ? void 0 : _c.response) === null || _d === void 0 ? void 0 : _d.data.message) || ((_e = action.error) === null || _e === void 0 ? void 0 : _e.message) || action.error.toString();
            console.error({
                "name": action.error.name,
                "message": action.error.message,
                "code": action.error.code,
                "logFrom": "Api Helper Error Log"
            });
        });
    },
});
export default counterSlice.reducer;
