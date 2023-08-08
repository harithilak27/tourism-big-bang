import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material';
import { toast } from 'react-toastify';
import './Package.css'
import 'react-toastify/dist/ReactToastify.css';
import registerpack from '../../images/Packageregister.jpg'

const Packageadd = () => {
    const getagntid = sessionStorage.getItem('id');
    const [packageDTO, setUserPackageDTO] = useState({
        id: getagntid,
        offerType: '',
        offerDesc: '',
        in_Out_India: '',
        pricePerPerson: '',
        destination: '',
        vehicleType: '',
        location: '',
        days: '',
        nights: '',
        totaldays: '',
        itineraryDetails: '',
        specialtyId: '',
        hotelId: ''
    });
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        // if (!packageDTO.id) {
        //     newErrors.id = 'Agent ID is required';
        // }

        if (!packageDTO.offerType) {
            newErrors.offerType = 'Offer Type is required';
        }
        if (!packageDTO.offerDesc) {
            newErrors.offerDesc = 'offerDescription Type is required';
        }
        if (!packageDTO.in_Out_India) {
            newErrors.in_Out_India = 'Domestic / International required';
        }
        if (!packageDTO.pricePerPerson) {
            newErrors.pricePerPerson = 'price/Personis required in ₹';
        }
        if (!packageDTO.destination) {
            newErrors.destination = 'Destination is required';
        }
        if (!packageDTO.vehicleType) {
            newErrors.vehicleType = 'vehicle Type is required';
        }
        if (!packageDTO.location) {
            newErrors.location = 'location is required';
        }
        if (!packageDTO.days) {
            newErrors.days = 'Days is required';
        }
        if (!packageDTO.nights) {
            newErrors.nights = 'nights is required';
        }
        if (!packageDTO.totaldays) {
            newErrors.totaldays = 'totaldays is required';
        }
        if (!packageDTO.itineraryDetails) {
            newErrors.itineraryDetails = 'itineraryDetails is required';
        }
        if (!packageDTO.specialtyId) {
            newErrors.specialtyId = 'specialtyId is required';
        }
        if (!packageDTO.hotelId) {
            newErrors.hotelId = 'hotelId is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    // to post the package
    const register = () => {
        if (validateForm()) {
            console.log(packageDTO);
            fetch('https://localhost:7117/api/PackageOffering', {
                method: 'POST',
                headers: {
                    'accept': 'text/plain',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(packageDTO),
            }).then(async (data) => {
                if (data.status === 200) {
                    // for toast message successfully
                    var user = await data.json();
                    setSuccess(true);
                    toast.success('Package published successfully!');
                    window.location.reload();
                    // usenavigate('/');
                } else {
                    toast.error('Warning !');
                }
            });
        }
    };
    return (
        <div className=' container pckclass'>
            <div>
                <img src={registerpack} alt="" className='pkimg' />
                <Card className='cardregispack' sx={{width:'500px',borderRadius: '20px', boxShadow: '0px 0px 6px 10px rgba(0, 0, 0, 0.25)'}}>
                    <CardContent sx={{textAlign:'center'}}>
                    "Our customers are at the core of everything we do. We prioritize customer satisfaction as the driving force behind our business. By understanding and meeting their needs, we build lasting relationships and earn their loyalty. Exceptional service, attentive listening, and putting customers first are the pillars of our commitment to their interests and happiness."
                    </CardContent>
                </Card>
                <div style={{display:'flex',justifyContent:'end'}}>
                <div class="smiley-emoji"></div>
                {/* <div class="smiley-emoji"></div>
                <div class="smiley-emoji"></div>
                <div class="smiley-emoji"></div>
                <div class="smiley-emoji"></div> */}

                </div>
            </div>
            <div className="user-register-container">
                <div className="user-register-title">Package Register</div>
                {/* <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px',
                            fontSize: '18px'
                        }}
                        label="Agent ID"
                        variant="outlined"
                        value={packageDTO.id}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, id: event.target.value })}
                        error={!!errors.id}
                        helperText={errors.id}
                    />
                </div> */}
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        label="Offer Type"
                        variant="outlined"
                        value={packageDTO.offerType}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, offerType: event.target.value })}
                        error={!!errors.offerType}
                        helperText={errors.offerType}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        label="Offer Description"
                        variant="outlined"
                        value={packageDTO.offerDesc}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, offerDesc: event.target.value })}
                        error={!!errors.offerDesc}
                        helperText={errors.offerDesc}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        label="India/Abroad"
                        variant="outlined"
                        value={packageDTO.in_Out_India}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, in_Out_India: event.target.value })}
                        error={!!errors.in_Out_India}
                        helperText={errors.in_Out_India}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        type="number"
                        label="Price Person/per (₹)"
                        variant="outlined"
                        value={packageDTO.pricePerPerson}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, pricePerPerson: event.target.value })}
                        error={!!errors.pricePerPerson}
                        helperText={errors.pricePerPerson}
                    />
                </div>

                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        label="Destination place"
                        variant="outlined"
                        value={packageDTO.destination}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, destination: event.target.value })}
                        error={!!errors.destination}
                        helperText={errors.destination}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        label="Travel Type"
                        variant="outlined"
                        value={packageDTO.vehicleType}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, vehicleType: event.target.value })}
                        error={!!errors.vehicleType}
                        helperText={errors.vehicleType}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        label="Specific Location"
                        variant="outlined"
                        value={packageDTO.location}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, location: event.target.value })}
                        error={!!errors.location}
                        helperText={errors.location}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        type="number"
                        label="No of Days"
                        variant="outlined"
                        value={packageDTO.days}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, days: event.target.value })}
                        error={!!errors.days}
                        helperText={errors.days}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        type="number"
                        label="No of Nights"
                        variant="outlined"
                        value={packageDTO.nights}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, nights: event.target.value })}
                        error={!!errors.nights}
                        helperText={errors.nights}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        type="number"
                        label="Total Days"
                        variant="outlined"
                        value={packageDTO.totaldays}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, totaldays: event.target.value })}
                        error={!!errors.totaldays}
                        helperText={errors.totaldays}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px',
                        }}
                        label="Travel Plans"
                        multiline
                        minRows={4}
                        variant="outlined"
                        value={packageDTO.itineraryDetails}
                        onChange={(event) =>
                            setUserPackageDTO({ ...packageDTO, itineraryDetails: event.target.value })
                        }
                        error={!!errors.itineraryDetails}
                        helperText={errors.itineraryDetails}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        type="number"
                        label="Place ID(fk)"
                        variant="outlined"
                        value={packageDTO.specialtyId}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, specialtyId: event.target.value })}
                        error={!!errors.specialtyId}
                        helperText={errors.specialtyId}
                    />
                </div>
                <div className="input-container">
                    <TextField
                        sx={{
                            width: '350px'
                        }}
                        type="number"
                        label="Hotel Id(fk)"
                        variant="outlined"
                        value={packageDTO.hotelId}
                        onChange={(event) => setUserPackageDTO({ ...packageDTO, hotelId: event.target.value })}
                        error={!!errors.hotelId}
                        helperText={errors.hotelId}
                    />
                </div>
                <div className="button-container">
                    <Button variant="contained" color="primary" onClick={register}>
                        Register
                    </Button>
                </div>
                {success && <div className="success">Registered successfully!</div>}
            </div>
        </div>

    )
}

export default Packageadd