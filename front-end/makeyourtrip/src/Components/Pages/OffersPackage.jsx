import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Offerpackage.css'
import Carousel from 'react-bootstrap/Carousel';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import accom1 from '../../images/accomodations.png'


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const OffersPackage = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container packs'>
            <div className='cks'>
            <p className='packhead'>Popular offers!</p>
            <p className='subheadingpackage'>"Book a refreshing trip <span className='clrdente'>and</span> GET SET GO!"</p>
            </div>
            <div className='allpacks'>
                {/* <Box sx={{ width: '40vw',height:'60vh', background: 'green' }}> */}
                <Box sx={{ width: '45vw',height:'60vh'}}>

                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="Holiday" {...a11yProps(0)} />
                            <Tab label="Devotional" {...a11yProps(1)} />
                            <Tab label="Adventure" {...a11yProps(2)} />
                            <Tab label="WildLife" {...a11yProps(3)} />
                            <Tab label="Culture" {...a11yProps(4)} />
                            <Tab label="Family" {...a11yProps(5)} />


                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                    <Carousel>
                            <Carousel.Item style={{marginLeft:'60px'}}>
                                <Card className='cardsa' sx={{ maxWidth: 345, boxShadow: '2px 10px 20px 0px', marginTop: '40px' }}>
                                    <CardActionArea style={{color:'black'}}>
                                        <CardMedia
                                            className='bg-light'
                                            component="img"
                                            image={accom1}
                                            sx={{ width: '50px', height: '50px', margin: '0 auto', marginTop: '30px' }}
                                            alt="maps"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                                Accommodation
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                                                "Find top accommodations worldwide. Book hotels, apartments, and more for your perfect stay. Hassle-free booking. Best rates guaranteed."
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Carousel.Item>

                        </Carousel>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Item Two
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        Item Three
                    </CustomTabPanel>
                </Box>
            </div>
        </div>
    );
}

export default OffersPackage