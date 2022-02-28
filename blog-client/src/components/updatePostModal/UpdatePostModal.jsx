import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState, useEffect } from 'react';
import {PostContext} from '../../contexts/postContext/PostContext';
import { useHistory} from 'react-router-dom';

function UpdatePostModal() {

	const history = useHistory()

    const { showModal,
			updatePost,
            setShowModal,
            postState: {post}} = useContext(PostContext)

    const [updatedPost, setUpdatedPost] = useState(post)

	useEffect(()=> setUpdatedPost(post), [post])

    const {title, description, imgUrl} = updatedPost

    const onChangeUpdatedPost = (e) => {
        setUpdatedPost({...updatedPost, [e.target.name]: e.target.value})
    }

    const closeDialog = () => {
		setShowModal(false)
	}

    const onSubmit = async (e) => {
		e.preventDefault()
		const updatePostData = await updatePost(updatedPost)
		console.log(updatePostData)  
		setShowModal(false)    
		history.push('/home')

    }

    return (
        <Modal show={showModal} onHide={closeDialog} >
			<Modal.Header style={{backgroundColor: 'aquamarine'}} closeButton>
				<Modal.Title>Update your post ?</Modal.Title>
			</Modal.Header>
			<Form onSubmit={onSubmit}>
				<Modal.Body>
                    <Form.Group>
                        <Form.Label>Change your address image link</Form.Label>
						<Form.Control
							type='text'
							placeholder='Only address image link on internet works'
							name='imgUrl'
							value={imgUrl}
							onChange={onChangeUpdatedPost}
						/>
					</Form.Group>	
					<Form.Group>
                        <Form.Label className='mt-3'>Change your title</Form.Label>
						<Form.Control
							type='text'
							placeholder='Title'
							name='title'
							required
							aria-describedby='title-help'
							value={title}
							onChange={onChangeUpdatedPost}
						/>					
					</Form.Group>
					<Form.Group>
                        <Form.Label className='mt-3'>Change your description</Form.Label>
						<Form.Control
							as='textarea'
							rows={3}
							placeholder='Description'
							name='description'
							value={description}
							onChange={onChangeUpdatedPost}
						/>
					</Form.Group>								
				</Modal.Body>
				<Modal.Footer>
					<Button style={{backgroundColor: 'pink', color: 'black'}} onClick={closeDialog} >
						Cancel
					</Button>
					<Button style={{backgroundColor: 'aquamarine', color: 'black'}} type='submit'>
						Update
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
    )
}

export default UpdatePostModal
