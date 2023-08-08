import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';import './Package.css'
import Packageadd from "./Packageadd";

const PackageDetails =() => {
    // const [displayemail, displayemailupdate] = useState('');
    // const [showuserId, setShowUserId] = useState();
    // const usenavigate = useNavigate();
    // useEffect(() => {

    //     let email = sessionStorage.getItem('email');
    //     let userid = sessionStorage.getItem('id');
    //     if (email === '' || email === null) {
    //         usenavigate('/login');
    //     } else {
    //         displayemailupdate(email);
    //         setShowUserId(userid)

    //     }


    // }, [])

    return (
        <div>
            {/* <div>
                <div className="header">
                    <span style={{ marginLeft: '70%' }}>Welcome <b>{displayemail}</b> and id is:{showuserId}</span>

                    <Link style={{ float: 'right' }} to={'/login'}>Logout</Link>
                </div>
            </div> */}
            <div>
                <Packageadd/>
            </div>

        </div>
    )
}

export default PackageDetails