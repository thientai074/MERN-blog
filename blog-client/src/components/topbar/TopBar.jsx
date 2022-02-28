import { Link } from "react-router-dom";
import "./topbar.css";
import {useContext} from 'react';
import {AuthContext} from '../../contexts/authContext/AuthContext';

function Topbar () {
    const {logoutUser} = useContext(AuthContext)

    const logout = () => {
      logoutUser()
    }


  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/home">
              HOME
            </Link>
          </li>        
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li onClick={logout} className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">         
            <img
              className="topImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmkklB1iGiHFoylusF7WPW95Qo3wbClL30KQ&usqp=CAU"
              alt=""
            />
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar