import './example.css';
import {Link} from 'react-router-dom'
const Example = () => {

    return (
        <div className="post">
           <Link to ='/exampleSinglePost' >
            <img
                    className="postImg"
                    src='http://img.v3.news.zdn.vn/w660/Uploaded/jaroin/2015_11_28/1_1.jpg'
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
                    <Link to='/exampleSinglePost'  className='link'>
                        <span className="postTitle">                      
                                Click this picture to see more                      
                        </span>  
                    </Link>               
                    <span className="postDate">1 hour ago</span>
            </div>
                <p className="postDesc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                        atque, exercitationem quibusdam, reiciendis odio laboriosam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                        atque, exercitationem quibusdam, reiciendis odio laboriosam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                        atque, exercitationem quibusdam, reiciendis odio laboriosam?
                </p>
        </div>
    )
}

export default Example
