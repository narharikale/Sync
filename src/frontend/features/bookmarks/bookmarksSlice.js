import axios from "axios" ;
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
	bookmarks:[],
    status:"idle",
    error:"",
};


const addToBookmark = createAsyncThunk(
	"bookmarks/addToBookmark ",
	async ({ token, postId }) => {
		const { data } = await axios.post(
			`/api/users/bookmark/${postId}`,
			{},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const deleteFromBookmark = createAsyncThunk(
	"bookmarks/deleteFromBookmark ",
	async ({ token, postId }) => {
		const { data } = await axios.post(
			`/api/users/remove-bookmark/${postId}`,
			{},
			{
				headers: { authorization: token },
			}
		);
		return data;
	}
);

const getBookmarks = createAsyncThunk(
    "bookmarks/getBookmarks ",
    async (token) => {
	const { data } = await axios.get("/api/users/bookmark", {
		headers: { authorization: token },
	});
	return data;
});


const bookmarksSlice = createSlice({
    name:'bookmarks',
    initialState,
    extraReducers: {

        [addToBookmark.fulfilled] : ( state , { payload } ) =>{
            state.status = "success";
            state.bookmarks = payload.bookmarks;
        },
        [addToBookmark.rejected] : ( state , { error } ) =>{
            state.status = "rejected";
            state.error = error.message ;
        },
        [deleteFromBookmark.fulfilled] : ( state , { payload } ) =>{
            state.status = "success";
            state.bookmarks = payload.bookmarks; 
        },
        [deleteFromBookmark.rejected] : ( state , { error } ) =>{
            state.status = "rejected";
            state.error = error.message ;
        },
        [getBookmarks.pending] : (state) => {
            state.status = 'loading';
        },
        [getBookmarks.fulfilled] : ( state , { payload } ) =>{
            state.bookmarks = payload.bookmarks;
			state.status = "success"; 
        },
        [getBookmarks.rejected] : ( state , { error } ) =>{
            state.status = "rejected";
            state.error = error.message ;
        },
    }
})

export const bookmarksReducer = bookmarksSlice.reducer;
export { getBookmarks , addToBookmark , deleteFromBookmark };