import React from 'react'
import { FaCog,FaMedal,FaHeadphones,FaFire,FaStar,FaWallet} from 'react-icons/fa';
import './Service.css'

const Service =() => {
  return (
    <div>
      <div className='container'>
      <p className='packhead'>Services</p>


      <div style={{display:'flex',justifyContent:'space-evenly',margin:'30px'}}>
        <div >
          <div className="card" style={{ width: '20rem' }}>
            <div className="fac1">
              <div className="facl1 bg-light px-3 py-5">
                <FaCog className="settings-icon" />
              </div>
              <div className="faclt1">
                <div className="card-body py-4">
                  <h5 className="card-title">Personalized matching</h5>
                  <p className="card-text" style={{ fontSize: '14px', color: 'gray' }}>Say goodbye to generic travel planning. Our service is designed to cater to your individual tastes, ensuring that every moment of your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div >
          <div className="card" style={{ width: '20rem' }}>
            <div className="fac1">
              <div className="facl1 bg-light px-3 py-5">
                <FaMedal className="settings-icon" />
              </div>
              <div className="faclt1">
                <div className="card-body py-4">
                  <h5 className="card-title">Personalized matching</h5>
                  <p className="card-text" style={{ fontSize: '14px', color: 'gray' }}>Say goodbye to generic travel planning. Our service is designed to cater to your individual tastes, ensuring that every moment of your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div><div >
          <div className="card" style={{ width: '20rem' }}>
            <div className="fac1">
              <div className="facl1 bg-light px-3 py-5">
                <FaHeadphones className="settings-icon" />
              </div>
              <div className="faclt1">
                <div className="card-body py-4">
                  <h5 className="card-title">Personalized matching</h5>
                  <p className="card-text" style={{ fontSize: '14px', color: 'gray' }}>Say goodbye to generic travel planning. Our service is designed to cater to your individual tastes, ensuring that every moment of your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat similar blocks for other services */}
        
      </div>
      <div style={{display:'flex',justifyContent:'space-evenly',margin:'30px'}}>
        <div >
          <div className="card" style={{ width: '20rem' }}>
            <div className="fac1">
              <div className="facl1 bg-light px-3 py-5">
                <FaFire className="settings-icon" />
              </div>
              <div className="faclt1">
                <div className="card-body py-4">
                  <h5 className="card-title">Personalized matching</h5>
                  <p className="card-text" style={{ fontSize: '14px', color: 'gray' }}>Say goodbye to generic travel planning. Our service is designed to cater to your individual tastes, ensuring that every moment of your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div >
          <div className="card" style={{ width: '20rem' }}>
            <div className="fac1">
              <div className="facl1 bg-light px-3 py-5">
                <FaStar className="settings-icon" />
              </div>
              <div className="faclt1">
                <div className="card-body py-4">
                  <h5 className="card-title">Personalized matching</h5>
                  <p className="card-text" style={{ fontSize: '14px', color: 'gray' }}>Say goodbye to generic travel planning. Our service is designed to cater to your individual tastes, ensuring that every moment of your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div><div >
          <div className="card" style={{ width: '20rem' }}>
            <div className="fac1">
              <div className="facl1 bg-light px-3 py-5">
                <FaWallet className="settings-icon" />
              </div>
              <div className="faclt1">
                <div className="card-body py-4">
                  <h5 className="card-title">Personalized matching</h5>
                  <p className="card-text" style={{ fontSize: '14px', color: 'gray' }}>Say goodbye to generic travel planning. Our service is designed to cater to your individual tastes, ensuring that every moment of your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat similar blocks for other services */}
        
      </div>

      
    </div>
    </div>
  )
}

export default Service