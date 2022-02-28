import {POSTS_LOADED_SUCCESS, POSTS_LOADED_FAIL, FIND_POST, ADD_POST, DELETE_POST, UPDATE_POST} from './PostActions'

const PostReducer = (state, action) => {
    const { type, payload} = action
    switch(type) {
        // get posts
        case POSTS_LOADED_SUCCESS:
            return {
                ...state,
                posts: payload
            }
        case POSTS_LOADED_FAIL: 
            return {
                ...state,
                posts: []
            }
        //  Add post
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, payload]
            }
        // Delete post
        case DELETE_POST: 
            return {
                ...state,
                posts : state.posts.filter(post => post._id !== payload)
                
            }
        //  Find post 
        case FIND_POST:
            return {
                ...state,
                post: payload
            }
        // Update Post
        case UPDATE_POST: 
            const newPosts = state.posts.map(post => post._id === payload._id ? payload : post )
            return {
                ...state,
                posts: newPosts
            }

        default: 
            return state
    }
}

export default PostReducer