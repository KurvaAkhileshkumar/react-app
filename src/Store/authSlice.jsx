import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'authReducer',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true
        },
        logout: (state) => {
            state.isLoggedIn = false
        },
    },
})

export default authSlice