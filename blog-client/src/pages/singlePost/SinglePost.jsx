import './singlePost.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { PostContext } from '../../contexts/postContext/PostContext';
import UpdatePostModal from '../../components/updatePostModal/UpdatePostModal';
import { useHistory} from 'react-router-dom';
import {AuthContext} from '../../contexts/authContext/AuthContext';

const SinglePost = () => {

    const history = useHistory()   

    const location = useLocation() 
    const path = location.pathname.split('/')[2]   

    const { deletePost, setShowModal, findPost,
    postState: {post}} = useContext(PostContext)

    const {authState: {user: {username}}} = useContext(AuthContext)  

    const [write ,setWrite] = useState([])  

    useEffect(()=> {
        const getThisPost = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/posts/${path}`)
                setWrite(res.data.post)
            } catch (error) {
                console.log(error)
            }
        }
        getThisPost();
    }, [path])

    const handleDelete = async path => {
        const deletePostData = await deletePost(path)
        history.push('/home')
        console.log(deletePostData)
    }

    const handleUpdatePost = postId => {
        findPost(postId)
        setShowModal(true)     
    }

    return (
        <div>
            <div className='singlePost'>
                <div className="singlePostWrapper">
                    <img  
                        className='singlePostImg'  
                        src={write.imgUrl} 
                        alt="" 
                    />
                    <h1 className="singlePostTitle">
                            {write.title} 
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit" onClick={handleUpdatePost.bind(this, path)}></i>
                            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete.bind(this, path)}></i>
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span className='singlePostAuthor'>
                            Author: <b>{username}</b>   
                        </span>
                        <span className='singlePostDate'>
                            {new Date(write.createdAt).toDateString()}
                        </span>
                    </div>
                    <p className='singlePostDesc'>
                            {write.description}
                    </p>
                </div>            
            </div>
           {post !== null && <UpdatePostModal />}           
        </div>
    )
}

export default SinglePost
