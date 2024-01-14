export const setStorage = (key, data) => {
    return localStorage.setItem(key, data);
};
export const getStorage = (key) => {
    return localStorage.getItem(key);
};
export const clearStorage = () => {
    return localStorage.clear();
};
