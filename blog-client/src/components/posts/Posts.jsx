import Post from '../post/Post'
import './posts.css';
import Example from '../example/example';
import {Link} from 'react-router-dom';
import { Card, Button} from 'react-bootstrap';
import {AuthContext} from '../../contexts/authContext/AuthContext';
import { useContext} from 'react';


const Posts = ({posts}) => {
    const {authState: {user: {username}}} = useContext(AuthContext) 

    let body = null

    if (posts.length === 0) {
        body = (
            <div>
              <Card border='dark' className='text-center mx-5 my-5'>
					<Card.Header style={{backgroundColor: 'aquamarine', color: 'black'}} as='h1'>Hi {username}</Card.Header>
					<Card.Body>
						<Card.Title>Welcome to Travel Blog</Card.Title>
						<Card.Text>
							Click the button below to write your own journeys
						</Card.Text>
						<Link to='/write'>
                            <Button
                                style={{backgroundColor: 'aquamarine', color: 'black'}}							
                            >
                                Write
                            </Button>
                        </Link>
					</Card.Body>
				</Card>
            </div>
        )
    } else {
        body = (
            <>
                {posts.map(post=> <Post key={post._id} post={post} />)}
            </>
        )     
    }
 
   
    return (
        <div className="posts">
            <Example />             
            {body}          
        </div>        
    )
}

export default Posts
