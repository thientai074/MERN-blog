import TopBar from '../../components/topbar/TopBar';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import {useContext, useEffect} from 'react';
import {PostContext} from '../../contexts/postContext/PostContext';


const Home = () => {
    const {postState: {posts},
    getPosts, dispatch} = useContext(PostContext)

    useEffect(()=> getPosts(), [])
    console.log(posts)


    return (
        <div>
            <TopBar />
            <Header />
            <Posts posts={posts} />
        </div>
    )
}

export default Home
