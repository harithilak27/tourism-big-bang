import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import accom1 from '../../images/accomodations.png'
import cstms from '../../images/custmr.png'
import planes from '../../images/plane.png'
import './Accomodation.css'


const Accomodation = () => {
    return (
        <div className=' container-fluid thirdsection bg-light'>
            <div className='accomodationcompo'>
                <Card className='cardsa' sx={{ maxWidth: 345, boxShadow: '2px 10px 20px 0px', marginTop: '40px' }}>
                    <CardActionArea>
                        <CardMedia
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
                <Card className='cardsa' sx={{ maxWidth: 345, boxShadow: '2px 10px 20px 0px', marginTop: '40px' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={planes}
                            sx={{ width: '50px', height: '50px', margin: '0 auto', marginTop: '30px' }}
                            alt="maps"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                Plane
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                                "Discover flights worldwide. Book tickets for your dream destination. Easy booking. Best deals assured."
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card className='cardsa' sx={{ maxWidth: 345, boxShadow: '2px 10px 20px 0px', marginTop: '40px' }}>
                    <CardActionArea>
                        <CardMedia
                            className='bg-light'
                            component="img"
                            image={cstms}
                            sx={{ width: '50px', height: '50px', margin: '0 auto', marginTop: '30px' }}
                            alt="maps"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                Customer
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                                "24/7 customer service. Quick assistance for all queries and issues. Customer satisfaction is our top priority."
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </div>
        </div>



    );
}

export default Accomodation