import React from 'react'
import './Home.css'
import image1 from '../../images/banner.png'
import flight from '../../images/flight.png'
import Navbar from '../Navbar/Navbar'
import Accomodation from './Accomodation'
import OffersPackage from './OffersPackage'
import Footer from '../Footer/Footer'
import Service from './Service'
import Allphotos from './Allphotos'
import Showcase from './Showcase'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='sec1'>
        <div className='combine'>
          <div>
            <p className='mainhead'>Explore <img src={flight} alt="" className='flight' /> <br></br> The World!</p>

            <br />
            <p className='submainhead'>"Welcome to our travel website, your gateway to unforgettable adventures <br></br>remarkable destinations worldwide."</p>
            <br />
            <button className='readmore'>Explore Guides</button>
          </div>
          <div className='Circle1'>
            <img src={image1} alt="" className='image1' />
          </div>
        </div>
      </div>
      {/* offerpackage */}
      <OffersPackage/>

      {/* accommodations */}
      <Accomodation/>
      <br/>

      {/* services */}
      <Service/>
      <br/>

      {/* testimonals */}
      <Showcase/>
      
      {/* gallery */}
      <Allphotos/>

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default Home