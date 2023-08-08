import React, { useEffect, useState } from 'react';
import './AdminIndex.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import CRUDgallery from '../AdminGallery/CRUDgallery';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}





const AdminIndex = () => {


    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };






    const [showLink, setShowLink] = useState(false);
    const [agent, setAgent] = useState([]);
    const [approvedagent, setapprovedagent] = useState([]);

    const toggleLinks = () => {
        setShowLink(!showLink);
    };

    useEffect(() => {
        getAllAgentDetails();
    }, []);
    useEffect(() => {
        getAllApporovedAgentDetails();
    }, []);

    const PostUser = (agentId, id) => {
        const approveUrl = `https://localhost:7117/api/AdminUser/register`;

        const postData = {
            name: agent[agentId].name,
            username: agent[agentId].username,
            email: agent[agentId].email,
            phone: agent[agentId].phone,
            aadharnumber: agent[agentId].aadharnumber,
            role: 'TravelAgent',
            password: agent[agentId].password
        };


        console.log('Sending POST request with data:', postData);

        axios.post(approveUrl, postData, {
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers you may need, such as authorization headers
            },
        })
            .then(response => {
                console.log('Response:', response);
                if (response.status === 200) {
                    toast.success('Agent added');
                    return response.data;

                } else {
                    // throw new Error('Failed to approve user');
                    toast.error('error');
                }
            })
            .then(data => {
                console.log('User approved:', data);
                const updatedAgents = agent.filter((_, index) => index !== agentId);
                DeleteAgent(id);
                setAgent(updatedAgents);
            })
            .catch(error => {
                console.error('Error approving Agent:', error);
            });
    };
    const DeleteAgent = (agentId) => {
        const deleteUrl = `https://localhost:7117/api/TravelAgentRegister?id=${agentId}`;

        fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers you may need, such as authorization headers
            },
        })
            .then(response => {
                if (response.ok) {
                    console.log('Agent deleted successfully');
                    window.location.reload();
                } else {
                    throw new Error('Failed to delete agent');
                }
            })
            .catch(error => {
                console.error('Error deleting agent:', error);
            });
    };

    const DeleteApprovedAgent = (agentId) => {
        const deleteUrl = `https://localhost:7117/api/AdminUser?id=${agentId}`;

        fetch(deleteUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers you may need, such as authorization headers
            },
        })
            .then(response => {
                if (response.ok) {
                    console.log('Agent deleted successfully');
                    window.location.reload();
                } else {
                    throw new Error('Failed to delete agent');
                }
            })
            .catch(error => {
                console.error('Error deleting agent:', error);
            });
    };

    const getAllAgentDetails = () => {
        fetch('https://localhost:7117/api/TravelAgentRegister', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers you may need, such as authorization headers
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch agent details');
                }
            })
            .then(data => {
                console.log('Agent details:', data);
                setAgent(data);
            })
            .catch(error => {
                console.error('Error fetching agent details:', error);
            });
    };

    const getAllApporovedAgentDetails = () => {
        fetch('https://localhost:7117/api/AdminUser/approvedAgent', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers you may need, such as authorization headers
            },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch approved agent details');
                }
            })
            .then(data => {
                console.log('Approved Agent details:', data);
                setapprovedagent(data);
            })
            .catch(error => {
                console.error('Error fetching approved agent details:', error);
            });
    };

    return (
        <div>
            {/* <nav className="navbar">
                <div className="navbar-logo">
                    <div className='combine'>
                        <div><img src={image1} alt="" className='logo' /></div>
                        <div className="brandname">MakeTrip</div>
                    </div>
                </div>
                <div className={`navbar-toggle ${showLink ? 'active' : ''}`} onClick={toggleLinks}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`navbar-links ${showLink ? 'active' : ''}`}>
                    <li>Home</li>
                    <li>Image Gallery</li>
                    <li>Logout</li>

                    // <Link to={'/'}><p style={{color:'black'}}>Logout</p></Link> 
                </ul>
            </nav> */}
            <div className='totaldiv'>
                <Box >
                    <div className='leftnav'>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                        >
                            <Tab label="Approval List" {...a11yProps(0)} sx={{ background: 'white', color: 'black', borderRadius: 3 }} />
                            <br />
                            <Tab label="Add Images" {...a11yProps(2)} sx={{ background: 'white', color: 'black', borderRadius: 3 }} />
                            <br />
                            <Tab label="Available Agencies" {...a11yProps(4)} sx={{ background: 'white', color: 'black', borderRadius: 3 }} />
                        </Tabs>
                        {/* <div>Approval List</div>
                    <div>Add Images</div>
                    <div>Available Agencies</div> */}
                    </div>
                    <h3 className="card-title" style={{ marginLeft: '320px' }}>Agent Approval List</h3>

                    <TabPanel value={value} index={0}>
                        <div className="approvallist" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {agent.map((agents, index) =>
                                <Card sx={{ maxWidth: 345 }}>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" >
                                            {agents.agencyName}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" color="text.secondary">
                                            {agents.agencyDescription}
                                        </Typography>
                                        <p>Name:{agents.username}</p>
                                        <p>Phone:{agents.phone}</p>
                                        <p>Email:{agents.email}</p>
                                        <p>Aadhar Number:{agents.aadharnumber}</p>
                                    </CardContent>
                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                        <button className="btn btn-success " onClick={() => PostUser(index, agents.id)}><i className="fas fa-check" style={{ color: 'white' }}></i></button>
                                        <button className="btn btn-danger " onClick={() => DeleteAgent(agents.id)}><i className="far fa-trash-alt" style={{ color: 'white' }}></i></button>
                                    </div>

                                </Card>
                            )}
                        </div>

                    </TabPanel>
                    <TabPanel value={value} index={2} style={{ marginLeft: '320px' }}>
                        <CRUDgallery />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <div className="approvallist" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {approvedagent.map((approvedagents, index) =>
                                <Card sx={{ maxWidth: 345 }}>

                                    <CardContent>
                                        <Typography gutterBottom variant="h5" >
                                            {approvedagents.agencyName}
                                        </Typography>
                                        <Typography gutterBottom variant="h6" color="text.secondary">
                                            {approvedagents.agencyDescription}
                                        </Typography>
                                        <p>Name:{approvedagents.username}</p>
                                        <p>Phone:{approvedagents.phone}</p>
                                        <p>Email:{approvedagents.email}</p>
                                        <p>Aadhar Number:{approvedagents.aadharnumber}</p>
                                    </CardContent>
                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                        <button className="btn btn-danger " onClick={() => DeleteApprovedAgent(approvedagents.id)}><i className="far fa-trash-alt" style={{ color: 'white' }}></i></button>
                                    </div>

                                </Card>
                            )}
                        </div>

                    </TabPanel>

                </Box>

            </div>


        </div>

    )
}

export default AdminIndex