import {React, useState} from 'react';
// import Select from 'react-select';
import {Link,useNavigate} from 'react-router-dom';
import './Register.css';
import axios from 'axios';
 
const role = [

]

function Register() {

    const [status,setStatus] = useState(undefined)
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({disabledButton:true,});

    const [doctorCredentials,setdoctorCredentials] = useState({})
      

    // <Login data={credentials.id}></Login>
    // patient
    const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      if(credentials.userid !== undefined && credentials.firstname !== undefined && credentials.lastname !== undefined && credentials.gender !== '' && credentials.role !== undefined && credentials.email !== undefined && credentials.passwordClear !== undefined){
        credentials.disabledButton = false;
        
      }
    };
    
    // doctor
    var handleDoctorRole = (e) => { 
      setdoctorCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }  
    if(doctorCredentials.userid !== undefined && doctorCredentials.firstname !== undefined && doctorCredentials.lastname !== undefined && doctorCredentials.gender !== '' && doctorCredentials.role !== undefined && doctorCredentials.email !== undefined && doctorCredentials.passwordClear !== undefined ){
        credentials.disabledButton = false;
    }
    console.log(doctorCredentials);
    
    if(credentials.role === "doctor") { 
      var handleDoctorRegister= async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("https://localhost:7192/api/Doctor", doctorCredentials);
          console.log(res);
          navigate('/Login')
          setStatus("wait for approval")
        } catch (err) {
          console.log(err);
          setStatus("invalid inputs")
        }
      }
    }else { 
    var handleClick = async (e) => {
        e.preventDefault();
        try {
        const res = await axios.post("https://localhost:7192/api/User/Register", credentials);
          console.log(res);
          navigate('/Login')
          setStatus("Register successfully")
        } catch (err) {
          console.log(err);
          setStatus("invalid inputs")
        }
      };
    }
    
    // const res = axios.post("https://localhost:7192/api/User/Register", credentials);
    return (
      
    <div className='contents'>
      <form>
        <div className='forms'>
            <label>UserName :</label>
            <input required type='text' id='userid' className='userid' name='userid'  placeholder='username' onChange={(e) => {handleChange(e); handleDoctorRole(e) }} />
            <label>First name :</label>
            <input required type='text' id='fistname' className='firstname'  name='firstname' placeholder='firstname'  onChange={(e) => {handleChange(e) ; handleDoctorRole(e)}}/>
            <label>Last name :</label>
            <input required type='text' id='lastname' className='lastname' name='lastname'  placeholder='lastname'  onChange={(e) => {handleChange(e) ; handleDoctorRole(e)}}/>
            
            <div className='radio'>
            <label>gender :</label>
            <input required type='radio'  className='gender' name='gender' value='male'   onChange={(e) => {handleChange(e); handleDoctorRole(e)}}/> male
            <input required type='radio'  className='gender' name='gender' value='female'  onChange={(e) => {handleChange(e); handleDoctorRole(e)}}/> female
            </div>
            <label>Email :</label>
            <input type='email' name='email'id='email' className='email' placeholder='@gmail.com' pattern='/^[^\s@]+@[^\s@]+\.[^\s@]+$/'   onChange={(e) => {handleChange(e); handleDoctorRole(e)}}/>
            <span></span>
            <label>Password :</label>
            <input type='password' name='passwordClear' id='password' className='password'  placeholder='password' onChange={(e) => {handleChange(e); handleDoctorRole(e)}} />
            {
            doctorCredentials.role === 'doctor' ? 
            <div className='doctors'>
            <label>Medical Role :</label>
            <input type='text' name='specification' id='specification' className='specification' placeholder='specification' onChange={(e) => {handleDoctorRole(e)}} />
            <label>Experience :</label>
            <input type='text' name='experience' id='experience' className='experience'  placeholder='experience' onChange={(e) => {handleDoctorRole(e)}} />
            </div> : null
            }
            <Link to='/'>
              <button disabled={credentials.disabledButton} onClick={credentials.role === 'doctor' ? handleDoctorRegister : handleClick }>Sign in</button>
            </Link>
        </div>
        <h5>{status}</h5>
      </form>
    </div>
    
  )
}

export default Register
