import React from "react";
import { Navbar } from "./Navbar";
import { useNavigate} from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/Booking');
  };
  return (
    <>
    <Navbar/>
    <div className="counter">
    <h1>Welcome to the platform that eases your life</h1>
    <button onClick={navigateToContacts}>Book your drone now</button>
    </div>
    </>
  );
};