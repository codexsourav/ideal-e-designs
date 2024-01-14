import { configureStore } from '@reduxjs/toolkit';
import loading from './Loading/loading';
import contactpopup from './ContactPopUp/contactpopup';
import apiResponse from './Api/ApiHelper';
export default configureStore({
    reducer: {
        loading,
        apiResponse,
        contactpopup,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
