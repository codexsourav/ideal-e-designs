import axios, { AxiosError, AxiosResponse } from "axios";
import { apiUrl } from "../Contents/apiInfo";


export default async ({ path = "/", method = "GET", data = {}, baseUrl = apiUrl }: { path?: string, method?: string, data?: any, baseUrl?: string }) => {
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
        const response: AxiosResponse = await axios.request(options);
        return response;
    } catch (error) {
        if (error instanceof AxiosError) {
            if (error.response?.status == 401) {
                if (typeof window !== "undefined") {
                    window.location.replace("/admin/login");
                    throw error;
                }
            }
        } else {
            throw error;
        }
        throw error;
    }
}

export const uploadFileRequest = async (file: string, { baseUrl = apiUrl }: { baseUrl?: string }) => {
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
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        throw error;
    }
};
