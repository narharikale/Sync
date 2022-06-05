import axios from "axios" ;
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	status: null,
	token: localStorage.getItem("TOKEN") ?? null,
	user: JSON.parse(localStorage.getItem("USER")) || null,
	error: null,
};

const userLogin = createAsyncThunk(
    "auth/userLogin" , 
    async({ username , password }) => {
        const { data }  = await axios.post("api/auth/login" , {
            username,
            password
        })
        return data ;
    }
); 

const userSignup = createAsyncThunk(
    "auth/userSignup" , 
    async({ userData }) => {
        const { data }  = await axios.post("api/auth/signup" , {
            ...userData
        })
        return data;
    }
); 


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout: (state) => {
            state.token = null;
            state.user = null ;
            localStorage.removeItem("TOKEN");
            localStorage.removeItem("USER");
        }
    },
    extraReducers: {
        
        [userLogin.pending] : (state) => {
            state.status = "loading";
        },

        [userLogin.fulfilled] : (state , { payload }) => {
            state.status = "success";
            state.token = payload.encodedToken;
            state.user = payload.foundUser;
            localStorage.setItem("TOKEN", payload.encodedToken);
            localStorage.setItem("USER", JSON.stringify(state.user))
        },

        [userLogin.rejected] : (state , { payload }) =>{
            state.status="rejected";
            state.error = payload
        },

        [userSignup.pending] : (state) => {
            state.status="loading";
        },

        [userSignup.fulfilled] : (state , { payload }) => {
            state.status = "success";
            state.token = payload.encodedToken;
            state.user = payload.createdUser;
            localStorage.setItem("TOKEN", payload.encodedToken);
            localStorage.setItem("USER", JSON.stringify(state.user))
        },

        [userSignup.rejected] : (state , { payload }) =>{
            state.status="rejected" ;
            state.error = payload
        },
    }
})

export const authReducer = authSlice.reducer;
export const { logout }  = authSlice.actions
export { userLogin , userSignup } ;