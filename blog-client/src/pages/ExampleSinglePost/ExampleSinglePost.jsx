import './exampleSinglePost.css';


const ExampleSinglePost = () => {   

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img  
                    className='singlePostImg'  
                    src='http://img.v3.news.zdn.vn/w660/Uploaded/jaroin/2015_11_28/1_1.jpg'
                    alt="" 
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet  
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>
                        Author: <b>Hanzo Hasashi</b>   
                    </span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                        atque, exercitationem quibusdam, reiciendis odio laboriosam?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                        atque, exercitationem quibusdam, reiciendis odio laboriosam?
                        Lorem ipsum dolor sit amet, consectetur adip
                </p>
            </div>
            
        </div>
    )
}

export default ExampleSinglePost
