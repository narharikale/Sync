import axios from "axios" ;
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
	allUsers:[],
    singleUser:null,
    userPosts:[],
    userStatus:'idle',
	error: null,
};

const getAllUsers = createAsyncThunk(
    "user/getAllUsers" , 
    async() => {
        const { data }  = await axios.get("/api/users")
        return data ;
    }
);  
const getSingleUser = createAsyncThunk(
    "user/getSingleUser" , 
    async( username )  => {
        const { data }  = await axios.get(`/api/users/${username}`)
        return data ;
    }
);  
const getUserPosts = createAsyncThunk(
    "user/getUserPosts" , 
    async( username ) => {
        const { data }  = await axios.get(`/api/posts/user/${username}`)
        return data ;
    }
);  

const updateUser = createAsyncThunk(
    "user/updateUser" , 
    async( { token , updatedUserData } ) => {
        const { data }  = await axios.post('/api/users/edit',
        {  updatedUserData  } ,
        { headers: { authorization : token } })
        return data ;
    }
); 


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        
    },
    extraReducers: {
        [getAllUsers.fulfilled] : (state , { payload }) => {
            state.allUsers = payload.users;
        },
        [getAllUsers.rejected] : (state ,{ error } ) => {
            state.userStatus = 'rejected';
            state.error = error.message
        },
        [getSingleUser.pending] : (state) => {
            state.userStatus = 'loading';
        },
        [getSingleUser.fulfilled] : (state , { payload }) => {
            state.userStatus ="success"
            state.singleUser = payload.user;
        },
        [getSingleUser.rejected] : (state ,{ error } ) => {
            state.userStatus = 'rejected';
            state.error = error.message
        },
        [getUserPosts.fulfilled] : (state , { payload }) => {
            state.userStatus ="success"
            state.userPosts = payload.posts;
        },
        [getUserPosts.rejected] : (state ,{ error } ) => {
            state.userStatus = 'rejected';
            state.error = error.message
        },
        [updateUser.fulfilled] : (state , { payload }) => {
            state.userStatus ="success"
            state.singleUser = payload.user;
        },
        [updateUser.rejected] : (state ,{ error } ) => {
            state.userStatus = 'rejected';
            state.error = error.message
        }

        
    }
})

export const userReducer = userSlice.reducer;
export { getAllUsers , getSingleUser  , updateUser , getUserPosts } ; 