import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FeedbackForm.css';
import fedbck from '../../images/feedbck.avif'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const FeedbackForm = () => {
  const form = useRef();
  const [validationErrors, setValidationErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!form.current.user_name.value.trim()) {
      errors.user_name = 'Name is required';
    }

    if (!form.current.user_email.value.trim()) {
      errors.user_email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.current.user_email.value)) {
      errors.user_email = 'Invalid email format';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm('service_rmvoxua', 'template_wfbsdi9', form.current, 'Mhrxs9fMgJHNM_IX0')
        .then(
          (result) => {
            console.log(result.text);
            toast.success('Feedback sent!');
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
            toast.error('Failed to send Feedback');
          }
        );
    }
  }


  return (
    <div>
      <Navbar />
      <div className='container combinefeedbks'>
        <div>
          <img src={fedbck} alt="" />
        </div>
        <div>
          <div className=" Feedback_Form" style={{ width: '400px' }}>
            <br />
            <br />
            <form ref={form} onSubmit={sendEmail}>
              <label>Name </label>
              <input type="text" name="customer_name" placeholder='Your name' />
              {validationErrors.user_name && <div className="error">{validationErrors.user_name}</div>}
              <label>Email </label>
              <input type="email" name="customer_email" placeholder='Your Email' />
              {validationErrors.user_email && <div className="error">{validationErrors.user_email}</div>}
              <lable>Subject</lable>
              <textarea name='subject' />
              <label>Content </label>
              <textarea name="feedback" />
              <input type="submit" value="Submit" />
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className='container-fluid py-3'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.550616744486!2d80.21605579387196!3d12.89886888859843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b79de7f381b%3A0xffbb2dd48afe3f1b!2sSholinganallur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1691388405727!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

      <Footer/>
    </div>
  );
}

export default FeedbackForm





