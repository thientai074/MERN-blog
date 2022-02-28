import { createContext, useReducer, useState} from 'react';
import axios from 'axios';
import PostReducer from './PostReducer';
import {POSTS_LOADED_SUCCESS, POSTS_LOADED_FAIL,FIND_POST, ADD_POST, DELETE_POST, UPDATE_POST} from './PostActions';

export const PostContext = createContext()

const PostContextProvider = ({children}) => {
    const [postState, dispatch] = useReducer(PostReducer, {
        posts: [],
        post: null
    }) 

    const [showModal, setShowModal] = useState(true)

    // Get posts
    const getPosts = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/posts')
            if(res.data.success){
                dispatch({type: POSTS_LOADED_SUCCESS, payload: res.data.posts})
            }
        } catch (error) {
           dispatch({type: POSTS_LOADED_FAIL})
        }
    }

    // Add post
    const addPost = async newPost => {
        try {
            const res = await axios.post('http://localhost:8000/api/posts', newPost)
            if(res.data.success) {
                dispatch({type: ADD_POST, payload: res.data.post})
                return res.data
            }
        } catch (error) {
            return error.res.data ? error.res.data : {success: false, message: 'Server error'}

        }
    }
    // delete Post
    const deletePost = async path => {
        try {
            const res = await axios.delete(`http://localhost:8000/api/posts/${path}`)
            if(res.data.success) {
                dispatch({type: DELETE_POST, payload: path})
                console.log(res.data)  
                return res.data                    
            }           
        } catch (error) {
            return error.res.data ? error.res.data : {success: false, message: 'Server error'}
        }
    }

    // find Post
    const findPost = postId => {
        const post = postState.posts.find(post=> post._id === postId)
        dispatch({type: FIND_POST, payload: post})
    }

    // update Post
    const updatePost = async updatedPost => {
        try {
            const res = await axios.put(`http://localhost:8000/api/posts/${updatedPost._id}`, updatedPost)
            if(res.data.success) {
                dispatch({type: UPDATE_POST, payload: res.data.post})
                return res.data
            }

        } catch (error) {
            return error.res.data ? error.res.data : {success: false, message: 'Server error'}
        }
    }

    const PostContextData = {
        postState,
        getPosts,
        addPost,
        dispatch,
        deletePost,
        showModal,
        setShowModal,
        updatePost,
        findPost
    }

    return (
        <PostContext.Provider value={PostContextData}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider