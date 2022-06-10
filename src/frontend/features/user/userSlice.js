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

const followUser = createAsyncThunk(
	"user/follow",
	async ({ token, followUserId }) => {
        console.log(token ,followUserId ,  "folooe")
		const { data } = await axios.post(
			`/api/users/follow/${followUserId}`,
			{},
			{ headers: { authorization: token } }
		);
		return data;
	}
);

const unfollowUser = createAsyncThunk(
	"user/unfollow",
	async ({ token, followUserId }) => {
        console.log(token ,followUserId ,  "un")
		const { data } = await axios.post(
			`/api/users/unfollow/${followUserId}`,
			{},
			{ headers: { authorization: token } }
		);
		return data;
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
            state.allUsers = payload.users;
        },
        [updateUser.rejected] : (state ,{ error } ) => {
            state.userStatus = 'rejected';
            state.error = error.message
        },
        [followUser.fulfilled] : (state, { payload }) => {
			state.allUsers = payload.users;
		},
		[followUser.rejected]: (state, { error }) => {
			state.error = error.message;
		},
		[unfollowUser.fulfilled]:(state, { payload }) => {
			state.allUsers = payload.users;
		},
		[unfollowUser.rejected]:(state, { error }) => {
			state.error = error.message;
		},

        
    }
})

export const userReducer = userSlice.reducer;
export { getAllUsers , updateUser, followUser , unfollowUser , getUserPosts } ; 