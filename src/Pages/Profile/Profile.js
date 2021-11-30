import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typical from 'react-typical'
import './profile.css';
import myimg from '../../img/profile.jpeg'

const Profile = () => {
    return (
        <div className='profile-container'>
            
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Box>
            <Typography variant="h4" gutterBottom component="div">
             <Typical
              
        steps={[
            
             'I am ', 1000, 'I am  Md Suit ', 500,
             'I am ', 1000, 'I am Full Stack Developer', 500,
              'And React/React Nativ Developer', 500,
             
    ]}
        loop={Infinity}
        wrapper="p"
      />
      </Typography>
          
           <Box>
           <Typography variant="subtitle2" gutterBottom component="div">
           <Button variant="contained"> Hire me</Button>
           <a href="mdsuit.pdf" download="md suit.pdf">
               <Button variant="contained">Get Resumi</Button>
           </a>
      </Typography>
           
           </Box>
            </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <img className="myfast-img" src={myimg} alt="" />
            </Grid>
  
           </Grid>
        </div>
    );
};

export default Profile;