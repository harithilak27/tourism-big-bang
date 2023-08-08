import React from 'react'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import image1 from '../../images/logo1.png'
import { FaUser, FaHospital, FaUsers, FaGift, FaLifeRing, FaMap, FaPhone, FaVoicemail, FaLocationArrow, FaMobile, FaMailBulk } from 'react-icons/fa'; // Importing Font Awesome icons

import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid  px-5 bg-light footers py-5">
            <div className="row">
                <div className="col-5">
                    <div>
                        <div className='weblogo'>
                            <div><img src={image1} alt="" className='logo' /></div>
                            <div className="brandname">MakeTrip</div>
                        </div>
                        <p className='qote'>"Explore the world, create unforgettable memories. Your journey begins here. Let's travel together!"</p>
                    </div>
                </div>
                <div className="col">
                    <strong style={{ textDecoration: 'underline' }}>About</strong><br /><br />
                    <FaUser style={{color:'#F24E1E'}} /> <span className='text-black'>About Us</span><br/>
                    <FaHospital style={{color:'#F24E1E'}} /> <span className='text-black'>Team Members</span><br/>
                    <FaUsers  style={{color:'#F24E1E'}}/> <span className='text-black'>Offers</span><br/>
                    <FaGift style={{color:'#F24E1E'}}/> <span className='text-black'>Hospital</span><br/>
                    <FaLifeRing style={{color:'#F24E1E'}}/> <span className='text-black'>Help Group</span><br/>
                </div>
                <div className="col">
                    <strong style={{ textDecoration: 'underline' }}>Service</strong><br /><br />
                    <span className='text-black'>Appointment Booking</span><br/>
                    <span className='text-black'>Online Booking</span><br/>
                    <span className='text-black'>Policy Agree</span><br/>
                    <span className='text-black'>Breakage</span><br/>
                    <span className='text-black'>Charity Policy</span><br/>

                </div>
                <div className="col ">
                    <strong style={{ textDecoration: 'underline' }}>Address</strong><br /><br />
                    <FaLocationArrow  style={{color:'#F24E1E'}}/> <span className='text-black'>Sivagangai-630441</span><br/>
                    <FaMobile style={{color:'#F24E1E'}}/> <span className='text-black'>9876123490</span><br/>
                    <FaMailBulk style={{color:'#F24E1E'}}/> <span className='text-black'>admin12@gmail.com</span><br/>
                </div>
            </div>
            <br/>
            <hr />
            <p style={{textAlign:'center'}}>Copyright @Maketrip by balan</p>
        </div>
    )
}

export default Footer