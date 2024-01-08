export default interface ApiHelperType {
    path?: string,
    method?: string,
    body?: any,
}

export interface ApiHelperInitialStateType {
    isLoading: boolean,
    isError: boolean,
    data: any,
    error: any,
}