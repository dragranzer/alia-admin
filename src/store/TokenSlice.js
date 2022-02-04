import { createSlice } from '@reduxjs/toolkit'

const token = ""

export const TokenSlice = createSlice ({
    name: "token",
    initialState:{
        token:token,
    },
    reducers:{
        setToken: (state, action) => {
            console.log(action.payload)
            state.token = action.payload
            console.log(state.token)
        },
    }
})

export const {setToken} = TokenSlice.actions;
export default TokenSlice.reducer;