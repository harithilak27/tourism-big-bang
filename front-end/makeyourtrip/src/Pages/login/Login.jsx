import {React, useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import './Login.css'

function Login() {

  // const { userId,loading, error, dispatch } = useState(AuthContext);
  const [status,setStatus] = useState(undefined);
  const navigate = useNavigate();

  const [loginCredentials,setLoginCredentials] = useState({userid: undefined,password: undefined,disabledButton: true,error: ''})

  const handleChange = (e) => {
    setLoginCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value,error : '' }));
    
    if(loginCredentials.userid !== undefined &&  loginCredentials.password !== undefined && loginCredentials.password.length > 5){
      loginCredentials.disabledButton = false;
    }else {
      loginCredentials.disabledButton = true;
      
    }
  };

  var res;
  const handleLogin = async (e) => {
    e.preventDefault();
    // dispatch({ type: "LOGIN_START" });
    try {
      res = await axios.post("https://localhost:7192/api/User/Login", loginCredentials);
      console.log(res);
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
      localStorage.setItem("role",res.data.role);
      localStorage.setItem("token",res.data.token);
      localStorage.setItem("userid",res.data.userId);
      setStatus("success")
      alert("login success")
      if(res.role === 'Admin'){
        navigate('/Home/Admin')
      }
      else if(res.role === 'doctor'){
        navigate('/')
      }
      else { 
        navigate('/')
      }
    } catch (err) {
      // dispatch({ type: "LOGIN_FAILURE", payload: err.res.data });
      setStatus("login failed invalid input")
    }
  }
  console.log(loginCredentials);

  return (
    <div>
        <div className='form'>
        <form>
        <label>UserName :</label>
            <input required type='text' id='userid' className='userid' name='userid'  placeholder='username' onChange={(e) => {handleChange(e)}}  />
        <label>Password :</label>
            <input type='password' name='password' id='password' className='password'  placeholder='password' onChange={(e) => {handleChange(e)}} />
        </form>
        <div>
          <button className='signin' disabled={loginCredentials.disabledButton} onClick={handleLogin}>Sign in</button>
        </div>
        <span>{status}</span>
        <Link to='/Register'>
          <button className='signup'>Sign up</button>
        </Link>
        
        </div>
        
    </div>
  )
}

export default Login