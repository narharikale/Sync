import axios from "axios" ;
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast'

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
        const { data }  = await axios.post("api/auth/login" , {
            ...userData
        })
        return data ;
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
            toast.success("Sucessfully logged out")
        }
    },
    extraReducers: (builder) => {
        
        builder.addCase(userLogin.pending , (state) => {
            state.status = "loading";
        });

        builder.addCase(userLogin.fulfilled , (state , { payload }) => {
            state.status = "success";
            state.token = payload.encodedToken;
            state.user = payload.foundUser;
            localStorage.setItem("TOKEN", payload.encodedToken);
            localStorage.setItem("USER", JSON.stringify(state.user))
            toast.success("sucessfully logged in")
        });

        builder.addCase(userLogin.rejected ,(state , { payload }) =>{
            state.status="rejected" ;
            state.error = payload
            toast.error("user not able to Login")
        });

        builder.addCase(userSignup.pending , (state) => {
            state.status="pending";
        });

        builder.addCase(userSignup.fulfilled , (state , { payload }) => {
            state.status = "success";
            state.token = payload.encodedToken;
            state.user = payload.foundUser;
            localStorage.setItem("TOKEN", payload.encodedToken);
            localStorage.setItem("USER", JSON.stringify(state.user))
            toast.success("account created successfully")
        });

        builder.addCase(userSignup.rejected ,(state , { payload }) =>{
            state.status="rejected" ;
            state.error = payload
            toast.error("some error occured")
        });
    }
})

export const authReducer = authSlice.reducer;
export const { logout }  = authSlice.actions
export { userLogin , userSignup } ;