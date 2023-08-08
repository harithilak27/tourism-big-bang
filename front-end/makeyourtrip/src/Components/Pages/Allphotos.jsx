import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './Allphotos.css'
import { Card, CardContent } from '@mui/material';


const Allphotos = () => {

    const [galleryList, setgalleryList] = useState([]);

    useEffect(() => {
        refreshgalleryList();
    }, []);

    const crudgalleryapi = (url = 'https://localhost:7117/api/AdminGallery/') => {
        return {
            fetchAll: () => axios.get(url),
        };
    };

    function refreshgalleryList() {
        crudgalleryapi()
            .fetchAll()
            .then(res => {
                setgalleryList(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='container gallry'>
            <p className='packhead'>Gallery</p>
            <div className='alligs'>
                <div>
                    <p className='gallryhead'>"Unveil the beauty of our enchanting destinations through captivating moments captured in our gallery. Your journey begins here."</p>
                </div>
                <div >
                    <Carousel fade className='caroslheight'>
                        {galleryList.map((data, i) => (
                            <Carousel.Item >
                                <img src={data.imageSrc} className="card-img-top" alt="default images" style={{borderRadius:'30px'}} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>

    );
}

export default Allphotos