import { createSlice } from '@reduxjs/toolkit';
const initialState = { show: false };
export const contactpopup = createSlice({
    name: 'contactpopup',
    initialState,
    reducers: {
        setContactPopUp: (state, { payload }) => {
            state.show = payload;
        }
    }
});
export const { setContactPopUp } = contactpopup.actions;
export default contactpopup.reducer;
