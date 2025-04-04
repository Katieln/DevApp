import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
  };

export const authSlice = createSlice({
    name: "auth", 
    initialState: {
        value: {
            user: null,
            token: null,
        }
    },
    reducers: {
        setUser: (state, {payload})=> {
            state.value.user = payload.email
            state.value.token = payload.idToken
        }, 
        clearUser: (state)=> {
            state.value.user = null
            state.value.token = null
        }
    }
})

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;