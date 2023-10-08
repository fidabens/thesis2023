import React from 'react';
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Home.css';

export const Home = () => {
  const navigate = useNavigate();

  const navigateToBooking = () => {
    // 👇️ navigate to /contacts
    navigate('/Booking');
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <h1>Welcome to the platform that eases your life</h1>
        <Button
          sx={{
            color: 'white',
            backgroundColor: '#426CFF',
            textTransform: 'none',
            marginTop: '10px',
            font: 'Poppins',
          }}
          onClick={navigateToBooking}
        >
          Book your drone now
        </Button>
      </div>
    </>
  );
};
