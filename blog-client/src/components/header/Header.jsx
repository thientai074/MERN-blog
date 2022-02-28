import './header.css'

function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">REACT & NODE</span>
                <span className="headerTitleLg">BLOG</span>
            </div>
            <img
                className="headerImg"
                src="https://topchiase24h.com/wp-content/uploads/2021/04/anh-nen-phong-canh-anime-dep-nhat-1.jpg"
                alt=""
            />            
        </div>
    )
}

export default Header
