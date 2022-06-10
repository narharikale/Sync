import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/authSlice";
import { bookmarksReducer } from "../features/bookmarks/bookmarksSlice";
import { postsReducer } from "../features/posts/postsSlice";
import { userReducer } from "../features/user/userSlice";


const store = configureStore({
    reducer : {
        auth : authReducer ,
        user : userReducer ,
        posts : postsReducer ,
        bookmarks : bookmarksReducer 
    }
})

export default store ;