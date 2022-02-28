import './register.css';
import {Link, useHistory } from 'react-router-dom';
import { useState, useContext} from 'react';
import { AuthContext} from '../../contexts/authContext/AuthContext';


function Register() {

    const history = useHistory()

    const { registerUser} = useContext(AuthContext)

    const [registerForm, setRegisterForm] = useState({
        username : '', 
        password : ''
    })

    const { username, password} = registerForm

    const onChangeRegisterForm = (e) => {
        setRegisterForm({...registerForm, [e.target.name]: e.target.value })
    }

    const register = async (e) => {
        e.preventDefault()
        try {
           const registerData = await registerUser(registerForm)
           console.log(registerData)
           if(registerData.success) {
               history.push('/login')
           }            
        } catch(error){
            console.log(error)
        }
    }



    return (
        <div className="register">
            <span className="registerTitle">Register</span>
                <form className="registerForm" onSubmit={register}>
                    <label>Username</label>
                    <input 
                        className="registerInput"   
                        type="text" 
                        placeholder="Enter your username"
                        name='username'
                        value={username}
                        onChange={onChangeRegisterForm} />
                    <label>Password</label>
                    <input 
                    className="registerInput" 
                    type="password" 
                    placeholder="Enter your password" 
                    name='password'
                    value={password}
                    onChange={onChangeRegisterForm}/>                     
                    <button type='submit' className="registerRegisterButton mt-4">Register</button>
                </form>
                <p className='mt-4'>Already have an account ?
                    <Link to='/login'>
                        <button className='registerLoginButton'>Login</button>
                    </Link>
                </p>          
      </div>
    )
}

export default Register
