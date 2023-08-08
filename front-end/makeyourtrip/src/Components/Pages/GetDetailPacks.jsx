import React from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './GetDetailPack.css'
Modal.setAppElement('#root'); 

const GetDetailPacks =({ isOpen, closeModal, packageData }) => {
    return (
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel='Package Modal'
          className='Modal'
          overlayClassName='Overlay'
        >
          <div className='Modal-content'>
            <h2>{packageData.packageType}</h2>
            <div className='Modal-details'>
            <p><strong>Package ID :</strong> {packageData.id}</p>
              <p><strong>Destination :</strong> {packageData.destination}</p>
              <p><strong>Total Days :</strong> {packageData.totaldays}</p>
              <p><strong>Vehicle Type :</strong> {packageData.vehicleType}</p>
              <p><strong>Itinerary Details :</strong> {packageData.itineraryDetails}</p>
              {/* Add more details as needed */}
            </div>
            <div className='Modal-buttons'>
              <button className='Close-button' onClick={closeModal}>Close</button>
              <button className='Book-button'> <Link style={{textDecoration:'none',color:'white'}} to={'/userbooking'}>Book Now</Link> </button>
            </div>
          </div>
        </Modal>
      );
}

export default GetDetailPacks