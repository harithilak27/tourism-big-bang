import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AgentRegister.css'
import { useNavigate } from 'react-router-dom';


const Agentregister = () => {
    const [userDTO, setUserDTO] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        aadharnumber: '',
        agencyName: '',
        role:'TravelAgent',
        agencyDescription: ''
    });
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const navigat = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (!userDTO.agencyName) {
            newErrors.agencyName = 'AgencyName is required';
        }
        
         if (!userDTO.aadharnumber) {
            newErrors.aadharnumber = 'AadharNumber is required';
        } else if (!/^\d{12}$/.test(userDTO.aadharnumber)) {
            newErrors.aadharnumber = 'Only 12 numbers are allowed';
        }
       

        if (!userDTO.phone) {
            newErrors.phone = 'Phone Number is required';
        } else if (!/^\d{10}$/.test(userDTO.phone)) {
            newErrors.phone = 'Only 10 numbers are allowed';
        }
        
        if (!userDTO.agencyDescription) {
            newErrors.agencyDescription = 'AgencyDescription is required';
        }
        if (!userDTO.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(userDTO.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!userDTO.password) {
            newErrors.password = 'Password is required';
        } else if (userDTO.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~-]/.test(userDTO.password)) {
            newErrors.password = 'Password must contain at least one special character (!@#$%^&*()_+{}[]:;<>,.?~-)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const register = () => {
        if (validateForm()) {
            console.log(userDTO);
            fetch('https://localhost:7117/api/TravelAgentRegister/register', {
                method: 'POST',
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userDTO),
            }).then(async (data) => {
                if (data.status === 200) {
                    // for toast message successfully
                    var user = await data.json();
                    setSuccess(true);
                    toast.success('register done,Wait for Admin Approval!');
                    navigat('/login')
                } else {
                    toast.error('Warning !');
                }
            });
        }
    };

    return (
        <div className="user-register-container">
            <div className="user-register-title">Agent Registration</div>
            <div className="input-container">

                <TextField
                    sx={{
                        width: '350px',
                        fontSize: '18px'
                    }}
                    label="Agency Name"
                    variant="outlined"
                    value={userDTO.agencyName}
                    onChange={(event) => setUserDTO({ ...userDTO, agencyName: event.target.value })}
                    error={!!errors.agencyName}
                    helperText={errors.agencyName}
                />
            </div>

            <div className="input-container">
                <TextField
                    sx={{
                        width: '350px'
                    }}
                    label="Username"
                    variant="outlined"
                    value={userDTO.username}
                    onChange={(event) => setUserDTO({ ...userDTO, username: event.target.value })}
                    error={!!errors.username}
                    helperText={errors.username}
                />
            </div>
            <div className="input-container">
                <TextField
                    sx={{
                        width: '350px'
                    }}
                    label="Email"
                    variant="outlined"
                    value={userDTO.email}
                    onChange={(event) => setUserDTO({ ...userDTO, email: event.target.value })}
                    error={!!errors.email}
                    helperText={errors.email}
                />
            </div>
            <div className="input-container">
                <TextField
                    sx={{
                        width: '350px'
                    }}
                    label="Phone Number"
                    variant="outlined"
                    value={userDTO.phone}
                    onChange={(event) => {
                        const numericValue = event.target.value.replace(/\D/g, '');
                        setUserDTO({ ...userDTO, phone: numericValue });
                    }}
                    error={!!errors.phone}
                    helperText={errors.phone}
                />
            </div>
            <div className="input-container">
                <TextField
                    sx={{
                        width: '350px'
                    }}
                    type="password"
                    label="Password"
                    variant="outlined"
                    value={userDTO.password}
                    onChange={(event) => setUserDTO({ ...userDTO, password: event.target.value })}
                    error={!!errors.password}
                    helperText={errors.password}
                />
            </div>
            <div className="input-container">
                <TextField
                    sx={{
                        width: '350px'
                    }}
                    label="Aadhar Number"
                    variant="outlined"
                    value={userDTO.aadharnumber}
                    onChange={(event) => {
                        const numericValue = event.target.value.replace(/\D/g, '');
                        setUserDTO({ ...userDTO, aadharnumber: numericValue });
                    }}
                    error={!!errors.aadharnumber}
                    helperText={errors.aadharnumber}
                />
            </div>

            <div className="input-container">
                <TextField
                    sx={{
                        width: '350px'
                    }}
                    label="Agency Description"
                    variant="outlined"
                    value={userDTO.agencyDescription}
                    onChange={(event) => setUserDTO({ ...userDTO, agencyDescription: event.target.value })}
                    error={!!errors.agencyDescription}
                    helperText={errors.agencyDescription}
                />
            </div>
            <div className="button-container">
                <Button variant="contained" color="primary" onClick={register}>
                    Register
                </Button>
            </div>
            {success && <div className="success">Registered successfully!</div>}
        </div>
    );
}

export default Agentregister