import React from 'react';
import emailjs from 'emailjs-com';
import './ContactFrom.css';
import { TextField } from '@mui/material';

const ContactFrom = () => {


    const sendEmail = (e) => {
        e.preventDefault();
            console.log(e);
        emailjs.sendForm('service_e14qasp', 'template_8mc4ohy', e.target, 'user_Ft5WcKhhcUL2pQ8tv6zq7')
          .then((result) => {
              console.log(result);
              if(result.text) {
                  alert('your messeg send success')
              }
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <div>
            <h1>Contact Us</h1>
            <div className="contact-container">
            <form onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" /> 
            <input type="email" name="email" placeholder="Email"/> 
            <input type="text" name="subject" placeholder="Subject" /> 
            <textarea name="message"  placeholder="Messege"/> 
            <input type="submit" value="Send Message" />
            </form>
        </div>
        </div>
      
    );
};

export default ContactFrom;