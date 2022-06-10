import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    allPosts: [],
    status: "idle",
    error: "",
    sortBy: 'newest'
};

const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async () => {
        const { data } = await axios.get("/api/posts")
        return data;
    }
);

const createPost = createAsyncThunk(
    "posts/createPost",
    async ({ token, postData }) => {
        const { data } = await axios.post(
            "/api/posts",
            { postData },
            { headers: { authorization: token } }
        );

        return data;
    }
);

const editPost = createAsyncThunk(
    "posts/editPost",
    async ({ token, postId, postData }) => {
        const { data } = await axios.post(
            `/api/posts/edit/${postId}`,
            { postData },
            { headers: { authorization: token } }
        );
        return data;
    }
);

const deletePost = createAsyncThunk(
    "posts/deletePost",
    async ({ token, postId }) => {
        const { data } = await axios.delete(`/api/posts/${postId}`, {
            headers: { authorization: token },
        });
        return data;
    }
);

const likePost = createAsyncThunk(
    "posts/likePost",
    async ({ token, postId }) => {
        const { data } = await axios.post(
            `/api/posts/like/${postId}`,
            {},
            {
                headers: { authorization: token },
            }
        );
        return data;
    }
);

const dislikePost = createAsyncThunk(
    "posts/dislikePost",
    async ({ token, postId }) => {
        const { data } = await axios.post(
            `/api/posts/dislike/${postId}`,
            {},
            {
                headers: { authorization: token },
            }
        );
        return data;
    }
);


const addComment = createAsyncThunk(
    "posts/addComment",
    async ({ token, postId, commentData }) => {
        const { data } = await axios.post(
            `/api/comments/add/${postId}`,
            {
                commentData,
            },
            {
                headers: { authorization: token },
            }
        );
        return data;
    }
);






const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        sortPosts: (state, action) => {
            state.sortBy = action.payload;
        },
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'loading';
        },
        [getAllPosts.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.allPosts = payload.posts;
        },
        [getAllPosts.rejected]: (state, { error }) => {
            state.status = "rejected";
            state.error = error.message;
        },
        [createPost.pending]: (state) => {
            state.status = 'loading';
        },
        [createPost.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.allPosts = payload.posts
        },
        [createPost.rejected]: (state, { error }) => {
            state.status = "rejected";
            state.error = error.message;
        },
        [editPost.pending]: (state) => {
            state.status = 'loading';
        },
        [editPost.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.allPosts = payload.posts;
        },
        [editPost.rejected]: (state, { error }) => {
            state.status = "rejected";
            state.error = error.message;
        },
        [deletePost.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.allPosts = payload.posts;
        },
        [deletePost.rejected]: (state, { error }) => {
            state.status = "rejected";
            state.error = error.message;
        },
        [likePost.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.allPosts = payload.posts
        },
        [likePost.rejected]: (state, { error }) => {
            state.status = "rejected";
            state.error = error.message;
        },
        [dislikePost.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.allPosts = payload.posts;
        },
        [dislikePost.rejected]: (state, { error }) => {
            state.status = "rejected";
            state.error = error.message;
        },
        [addComment.fulfilled]: (state, { payload }) => {
            state.status = "success";
            state.allPosts = payload.posts;
            
        },
        [addComment.rejected]: (state, { error }) => {
            state.status = "rejected";
            state.error = error.message;
        },
        
    }
})

export const postsReducer = postSlice.reducer;
export {
    getAllPosts,
    createPost,
    editPost,
    deletePost,
    likePost,
    dislikePost,
    addComment,
};

export const { sortPosts  } = postSlice.actions;