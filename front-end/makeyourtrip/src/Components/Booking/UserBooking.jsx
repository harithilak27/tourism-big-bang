import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  TextField,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link, useNavigate } from 'react-router-dom';
import { toPdf } from '@react-pdf/renderer';
import { PDFViewer, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { ToastContainer, toast } from 'react-toastify';
import logobrand from '../../images/logo1.png'
import './Userbooking.css'

// text download pdf
const validationSchema = yup.object().shape({
    id: yup.number().required('User ID is required'),
    // name: yup.string().required('Name is required'),
    startDate: yup.date().required('Start Date is required'),
    adultCount: yup.number().required('Total adultcount is required'),
    childCount:yup.number().required('total child count is required'),
    packageID: yup.number().required('Package ID is required'),
  });
  
  const PdfDocument = ({ formData }) => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
           
            {/* <Text>Name: {formData.name}</Text> */}
            <Text>Start Date: {formData.startDate}</Text>
            <Text>Total AdultCount: {formData.adultCount}</Text>
            <Text>Total ChilCount:{formData.childCount}</Text>
            <Text>Package ID: {formData.packageID}</Text>
          </View>
        </Page>
      </Document>
    );
  };
  
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4',
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });


const UserBooking =() => {
    const [showLinks, setShowLinks] = useState(false);
    const pkg = sessionStorage.getItem('PackageId')
    const [formData, setFormData] = useState({
    //   id: sessionStorage.getItem('id'),
    //   name: '',
        id:6,
        startDate: '',
        adultCount: '',
        adultCount:'',
    //   packageID: '',
        packageID:pkg
    });
  
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const toggleLinks = () => {
      setShowLinks(!showLinks);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    const [invoicechange, setinvoicechange] = useState(1000)
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('https://localhost:7117/api/UserBook', formData);
        console.log(response.data);
        toast.success('Booked successfully!');
        setinvoicechange(invoicechange + 1);
    
        // Generate the PDF content
        const pdfData = (
          <PdfDocument formData={formData} />
        );
        const doc = new jsPDF();
    
        // Add an image/logo
        const logoImage = new Image();
        logoImage.src = logobrand; // Make sure you import or set the correct image source
        doc.addImage(logoImage, 'JPEG', 10, 10, 40, 40);
    
        // Title and headings
        doc.setFontSize(18);
        doc.text('Make Trip', 60, 25);
        doc.setFontSize(14);
        doc.text('Computer Bill', 60, 40);
    
        // Details
        doc.setFontSize(12);
        doc.text(`Start Date: ${formData.startDate}`, 20, 60);
        doc.text(`Total AdultCount: ${formData.adultCount}`, 20, 70);
        doc.text(`Total ChildCount: ${formData.childCount}`,20,70)
        doc.text(`Package ID: ${formData.packageID}`, 20, 80);
        doc.text(`Booking Number: ${invoicechange}`, 20, 90);
    
        // Stylish separator line
        doc.setLineWidth(0.5);
        doc.line(10, 100, 200, 100);
    
        // Success message
        doc.setFontSize(16);
        doc.text('Booked Successfully!', 20, 120);
    
        // Save the PDF
        doc.save('booking_invoice.pdf');
    
        // Clear the form data
        setFormData({
        //   name: '',
        adultCount:'',
          startDate: '',
          childCount: '',
          packageID: '',
        });
    
        alert("Now Pay Advance and take a screenshot of it");
        // navigate('/invoice');
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          const newErrors = {};
          error.inner.forEach((validationError) => {
            newErrors[validationError.path] = validationError.message;
          });
          setErrors(newErrors);
        } else {
          console.error('Error submitting form:', error);
          toast.error("Wrong Data");
        }
      }
    };
    
  
  
    const Logout = () => {
      sessionStorage.removeItem('role')
      sessionStorage.removeItem('accessToken')
      sessionStorage.removeItem('refreshToken')
      sessionStorage.removeItem('id')
    }
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleLinks}
              edge="start"
              sx={{
                ...(showLinks && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <img src={logobrand} style={{ height: '90px', width: '120px', borderRadius: '10px' }} alt="Logo" />
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          sx={{
            width: 30,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 150,
              boxSizing: 'border-box',
            },
          }}
          open={showLinks}
          onClose={toggleLinks}
        >
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <IconButton onClick={toggleLinks}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Box sx={{ overflow: 'auto' }}>
            <ul className={`navbar-links ${showLinks ? 'active' : ''}`}>
              <li className='booking-li'>
                <Link to={'/'}>  Home</Link>
              </li>
              <li className='booking-li'>
                <Link to={'/package'}>Packages </Link>
              </li>
              <li className='booking-li' onClick={Logout()}>
                <Link to={'/'}>Logout</Link>
              </li>
            </ul>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Container maxWidth="sm" sx={{ marginTop: '2rem' }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Book and Pay
            </Typography>
            <form onSubmit={handleSubmit}>
  
              {/* <TextField
                fullWidth
                margin="normal"
                label="Name"
                name="name"
              /> */}
              <TextField
                fullWidth
                margin="normal"
                label=""
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                error={!!errors.startDate}
                helperText={errors.startDate}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Total adultCount"
                name="adultCount"
                type="number"
                value={formData.adultCount}
                onChange={handleChange}
                required
                error={!!errors.adultCount}
                helperText={errors.adultCount}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Total childCount"
                name="childCount"
                type="number"
                value={formData.childCount}
                onChange={handleChange}
                required
                error={!!errors.childCount}
                helperText={errors.childCount}
              />
              {/* <TextField
                fullWidth
                margin="normal"
                label="Package ID"
                name="packageID"
                type="number"
                value={formData.packageID}
                onChange={handleChange}
                required
                error={!!errors.packageID}
                helperText={errors.packageID}
              /> */}
              <Button type="submit" variant="contained" color="primary" >
                Submit
              </Button>
            </form>
          </Container>
          <ToastContainer />
        </Box>
      </Box>
    );
}

export default UserBooking