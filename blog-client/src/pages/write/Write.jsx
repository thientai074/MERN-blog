import './write.css';
import TopBar from '../../components/topbar/TopBar';
import Header from '../../components/header/Header';
import { useState, useContext} from 'react';
import {PostContext} from '../../contexts/postContext/PostContext';
import {useHistory} from 'react-router-dom';

function Write() {
    const history = useHistory()

    const {addPost} = useContext(PostContext)

    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        imgUrl: ''
    })

    const { title, description, imgUrl} = newPost

    const onChangeNewPostForm = (e) => {
        setNewPost({...newPost, [e.target.name]: e.target.value})   
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const addPostData = await addPost(newPost)
        console.log(addPostData)
        if(addPostData.success) {
            history.push('/home')
        }
    }
    return (
        <div>
            <TopBar />
            <Header />
                <div className='write'>
                    <form className='writeForm' onSubmit={onSubmit}>
                        <div className="writeFormGroup">
                            <label className='writeLabel' >Write your story</label>
                            <input 
                                type="text" 
                                className='writeInput mt-4' 
                                placeholder='Add travel image address link'
                                name='imgUrl'
                                value={imgUrl}
                                onChange={onChangeNewPostForm} 
                            />
                            <input 
                                type="text"                                 
                                placeholder='Title' 
                                className='writeInput mt-4'
                                name='title'
                                value={title}
                                onChange={onChangeNewPostForm}
                            />                                                  
                            <textarea 
                                placeholder='Tell your story ...' 
                                type='text' 
                                rows="10"
                                className='writeInput mt-4 writeText'  
                                name='description'
                                value={description}
                                onChange={onChangeNewPostForm}  >                    
                            </textarea>
                            <button className='writeSubmit mt-4' type='submit'>Add</button>
                            </div>
                    </form>
                </div>
        </div>
    )
}

export default Write
