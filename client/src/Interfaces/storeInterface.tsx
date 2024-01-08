import store from "../Redux/store";
import { ApiHelperInitialStateType } from "./apiHelper/ApiData";
export type AppDispatch = (typeof store.dispatch);

export interface ILoading {
    value: number;
}

export interface IContactPopUp {
    show: boolean;
}

export default interface StoreType {
    loading: ILoading;
    contactpopup: IContactPopUp;
    apiResponse: ApiHelperInitialStateType,
}