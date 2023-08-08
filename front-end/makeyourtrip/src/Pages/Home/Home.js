import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import bg from '../../images/pic1.avif';
import footer from '../../images/logo1.avif'
import './Home.css'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Navbar />
    <div className='header'>
    <div className='container'>
      <div className='header'>
        <img src={bg} alt='' className='img' />
      </div>
      <div className='content'>
      Expert recommended Top 3 Travel Agents in Chennai, Tamil Nadu. 
      All of our travel agents actually face a rigorous 50-Point Inspection, 
      which includes customer reviews, history, complaints, ratings, satisfaction, 
      trust, cost and their general excellence. You deserve only the best!
      </div>
    </div>
    <div className='container-2'>
        <div>
            <h3>Coorg Tour HD :</h3>
            <p>
            ₹ 12,600/ Per Person
            Introducing Coorg Tour package with exclusive hotel deal for 3 days and 2 nights holidays .
            </p>
        </div>
        <div>
            <h3>Andaman Tour:</h3>
            <p>₹ 62,100/ Per Person
                Introducing Andaman Tour Packages from Chennai . 
                We organized detail itinerary  5 Nights and 6 Days holidays..</p>
        </div>
        <div>
            <h3>Kerala Tour :</h3>
            <p>
            ₹ 41,400/ Per Person
            Introducing Kerala Tour package from Chennai . 
            We organized  detailed  itinerary 5 days and 4 nights holidays 
            </p>
        </div>
    </div>
    <div className='ad'>
        <div>
            Explore our packages and services
        </div>
        <Link to={'/Login'}>
            <button>
                Register Now 
            </button>
        </Link>
    </div>
    </div>
    <div className='footer'>
        <div>
            <img src={footer} alt=''  />
        </div>
        <div className='contact'>
            <h3>CONTACT US</h3>
            <p>→ harithilak0999@gmail.com</p>
            <p>→ 6379489139</p>
            <p>→ www.Aurahospital.com</p>
        </div>
    </div>

    </>
  )
}

export default Home
