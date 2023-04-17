//
import { createSlice } from '@reduxjs/toolkit'
//
const initialState = {
    userInfo: {
        isLogin: false,
        userName: 'Abdirahman Abdirashid',
    }
}
//
export const globalSlice = createSlice({
    name: 'globalSlice',
    initialState,
    reducers: {
        changeUserInfo: (state, action) => {
            state.userInfo = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeUserInfo } = globalSlice.actions

export default globalSlice.reducer;