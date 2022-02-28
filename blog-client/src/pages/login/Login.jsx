import './login.css'
import {Link, useHistory } from 'react-router-dom';
import { useState, useContext} from 'react'
import { AuthContext} from '../../contexts/authContext/AuthContext'

function Login() {
    const { loginUser } = useContext(AuthContext)

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const history = useHistory()

    const { username, password} = loginForm

    const onChangeLoginForm = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }

    const login = async (e) => {
        e.preventDefault();
        try {
            const loginData = await loginUser(loginForm)
            if(loginData.success) {
                history.push('/home')
            }            
        } catch(error) {
            console.log(error)
        }
    }


    return (
        <div className='login'>
            <span className='loginTitle'>Login</span>
            <form className="loginForm" onSubmit={login}>
                <label >Username</label>
                <input 
                    type="text" 
                    placeholder='Enter your username'
                    className='loginInput'
                    name='username'
                    value={username}
                    onChange={onChangeLoginForm} />
                <label >Password</label>
                <input 
                    type="password" 
                    placeholder='Enter your password'
                    className='loginInput'
                    name='password'
                    value={password}
                    onChange={onChangeLoginForm} />
                <button type='submit' className='loginButton mt-4'>Login</button>
            </form>
           <p className='mt-4'>Don't have an account ?
           <Link to='/register' >
               <button className='registerButton'>Register</button>
           </Link>
           </p>    
        </div>
    )
}

export default Login
