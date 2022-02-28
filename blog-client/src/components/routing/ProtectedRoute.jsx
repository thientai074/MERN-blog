import { Route, Redirect } from 'react-router-dom';
import {useContext} from 'react';
import {AuthContext} from '../../contexts/authContext/AuthContext';

const ProtectedRoute = ({component: Component, ...rest}) => {   
    const {authState: { isAuthenticated}} = useContext(AuthContext) 
    
    return (
        <Route {...rest} render={props=> isAuthenticated ? (
            <>
                 <Component {...rest} {...props} />
            </>           
        ) : ( <Redirect to = '/register' />)}/>
    )
}


export default ProtectedRoute

