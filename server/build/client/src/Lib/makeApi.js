var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios, { AxiosError } from "axios";
import { apiUrl } from "../Contents/apiInfo";
export default ({ path = "/", method = "GET", data = {}, baseUrl = apiUrl }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    var options = {
        method: method,
        url: baseUrl + path,
        headers: {
            Accept: '*/*',
            Authorization: 'barer ' + (localStorage.getItem("auth") || "").toString(),
            'Content-Type': 'application/json'
        },
        data: data,
    };
    try {
        const response = yield axios.request(options);
        return response;
    }
    catch (error) {
        if (error instanceof AxiosError) {
            if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) == 401) {
                if (typeof window !== "undefined") {
                    window.location.replace("/admin/login");
                    throw error;
                }
            }
        }
        else {
            throw error;
        }
        throw error;
    }
});
export const uploadFileRequest = (file, { baseUrl = apiUrl }) => __awaiter(void 0, void 0, void 0, function* () {
    const formData = new FormData();
    formData.append('file', file);
    const options = {
        method: 'POST',
        url: baseUrl + '/upload',
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer ' + (localStorage.getItem("auth") || "").toString(),
        },
        data: formData,
    };
    try {
        const response = yield axios.request(options);
        return response.data;
    }
    catch (error) {
        throw error;
    }
});
