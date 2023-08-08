import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManagePackage.css';
import GetDetailPacks from './GetDetailPacks';

const filterAll_One = 'https://localhost:7117/api/PackageOffering';
const ManagePackage =() => {
    const [packages, setPackages] = useState([]);
    const [search, setSearch] = useState('');
    const [destination, setDestination] = useState('');
    const [transport, setTransport] = useState('');
    const [selectedPackage, setSelectedPackage] = useState(null);
  
    useEffect(() => {
      fetchPackages();
    }, []);
  
    useEffect(() => {
      const delayFilterPackages = setTimeout(() => {
        filterPackages();
      }, 300);
  
      return () => {
        clearTimeout(delayFilterPackages);
      };
    }, [search, destination, transport]);
  
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`${filterAll_One}`);
        setPackages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const handleSearchChange = (event) => {
      setSearch(event.target.value);
    };
  
    const handleDestinationChange = (event) => {
      setDestination(event.target.value);
    };
  
    const handleTransportChange = (event) => {
      setTransport(event.target.value);
    };
  
    const filterPackages = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7117/api/PackageOffering/GetAllIntrest?offertype=${search}&destination=${destination}&vehicletype=${transport}`
        );
        setPackages(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    const openModal = (packageData) => {
        sessionStorage.setItem('PackageId',packageData.packageID);
      setSelectedPackage(packageData);
    };
  
    const closeModal = () => {
      setSelectedPackage(null);
    };
  
    return (
      <div className='Package-whole-page'>
       
        <div className='search-container' style={{ marginTop: '20px' }}>
          <input
            type='text'
            placeholder='Search by package type'
            value={search}
            onChange={handleSearchChange}
          />
          <input
            type='text'
            placeholder='Search by destination'
            value={destination}
            onChange={handleDestinationChange}
          />
          <input
            type='text'
            placeholder='Transport Type'
            value={transport}
            onChange={handleTransportChange}
          />
        </div>
        <h2>Available Packages</h2>
        <div className='Package-list'>
          {packages.map((pkg, index) => (
            <div className='Package-card' key={index}>
              <h2>{pkg.offerType}</h2>
              <p>Destination: {pkg.destination}</p>
              <h5>Price Per Person : {pkg.pricePerPerson}</h5>
              <button onClick={() => openModal(pkg)}>View Details</button>
            </div>
          ))}
        </div>
  
        <GetDetailPacks
          isOpen={!!selectedPackage}
          closeModal={closeModal}
          packageData={selectedPackage || {}}
        />
    </div>
    );
}

export default ManagePackage