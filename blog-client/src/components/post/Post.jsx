import './post.css'
import {Link} from 'react-router-dom'
const Post = ({post: {title, description, imgUrl, _id, createdAt}}) => {

    return (
        <div className="post">
            <Link to={`/post/${_id}`} >
                <img
                    className="postImg"
                    src={imgUrl}
                    alt=""
                />
            </Link>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">                      
                            Music                        
                    </span>
                    <span className="postCat">                       
                            Life                       
                    </span>
                </div>
                    <Link to={`/post/${_id}`} className='link' >
                        <span className="postTitle">                      
                            {title}                  
                        </span> 
                    </Link>                  
                    <span className="postDate">
                        {new Date(createdAt).toDateString()}
                    </span>
            </div>
                <p className="postDesc">
                       {description}
                </p>
        </div>
    )
}

export default Post
