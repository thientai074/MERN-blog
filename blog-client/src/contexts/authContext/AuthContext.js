import { createContext ,useEffect, useReducer} from 'react';
import AuthReducer from './AuthReducer';
import {LOCAL_STORAGE_TOKEN_NAME} from './AuthActions';
import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';


export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [authState, dispatch] = useReducer(AuthReducer, {
        user: null,
        isAuthenticated: false        
    })

	const loadUser = async () => {
		if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
			setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])            
		}

		try {
			const response = await axios.get('http://localhost:8000/api/auth')
			if (response.data.success) {
				dispatch({
					type: 'SET_AUTH',
					payload: { isAuthenticated: true, user: response.data.user }
				})                
			}
		} catch (error) {
			localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
			setAuthToken(null)
			dispatch({
				type: 'SET_AUTH',
				payload: { isAuthenticated: false, user: null }
			})
		}
	}

	useEffect(() => loadUser(), [])

    // Login
    const loginUser = async userForm => {
        try {
            const res = await axios.post('http://localhost:8000/api/auth/login', userForm)
            if(res.data.success) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, res.data.accessToken)
            }
            await loadUser()            
            return res.data
            
        } catch(error) {
            if (error.res.data) return error.res.data
			else return { success: false, message: error.message }
        }
    }

    // Register
    const registerUser = async userForm => {
        try {
            const res = await axios.post('http://localhost:8000/api/auth/register', userForm)
            if(res.data.success) {
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, res.data.accessToken)                
            }
            await loadUser()
            return res.data
        } catch(error) {
            if (error.res.data) return error.res.data
			else return { success: false, message: error.message }
        }
    }

    // Logout
    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        dispatch({type: 'SET_AUTH', payload: {isAuthenticated: false, user: null}})
    }

    
    const AuthContextData = {
        authState,
        loginUser,
        registerUser,
        logoutUser       
    }

    return (
        <AuthContext.Provider value={AuthContextData} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider