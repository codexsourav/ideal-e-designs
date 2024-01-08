import { createSlice } from '@reduxjs/toolkit'
import { IContactPopUp } from '../../Interfaces/storeInterface';

const initialState: IContactPopUp = { show: false }

export const contactpopup = createSlice({
    name: 'contactpopup',
    initialState,
    reducers: {
        setContactPopUp: (state, { payload }: { payload: boolean }) => {
            state.show = payload;
        }
    }
});

export const { setContactPopUp } = contactpopup.actions
export default contactpopup.reducer;