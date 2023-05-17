/*
Profile:
User Profile page which is accessible when a user logs in to or signs up for a Parkwise account.
Displays account information and a button component that will navigate the user to their last chosen parking spot
if available.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/

import Footer from '../ui/Footer';
import './pagesCSS/Profile.css'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import GridButton from "../Buttons/GridButton";
import React, { useEffect, useState } from 'react';
import "../Buttons/ButtonsCSS/GridButton.css";
import store from "../../store/store";
import axios from 'axios';
import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";

// Contact Info page
export default function Profile() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    // Send a request to the backend logout endpoint
    axios.post('http://localhost:4000/user-logout')
      .then(response => {
        // Handle successful logout, such as clearing the local storage or performing any necessary cleanup
        localStorage.removeItem('token');
        // Redirect or update the UI to reflect the logged-out state
      })
      .catch(error => {
        // Handle error, such as displaying an error message
        console.log(error);
      });
  };


  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetch the logged-in user data from the backend
        const response = await axios.get('http://localhost:4000/current-user');
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);


  if (!user) {
    return <div style={{ position: 'relative', height: '100vh' }}>
    <h1
      style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, 50%)',
        color: 'white',
        fontSize: '4rem',
      }}
    >
    Make a Parkwise Account in Order To Get Full Access for All Features!</h1></div>;
  }

  return (
    <>

  <div className='contact-container'>
  <AccountCircleTwoToneIcon baseClassName="fas" className="fa-plus-circle" sx={{ fontSize: 200, color: "white" }}/>

  <Box sx={{
        fontSize: '30px',
        color: 'white', 
      }}>
        <p>username: {user.username} </p>
        <p>email: {user.email} </p>
        <p>Previous Parking Spot:</p>
        <Link
                to={'/parkwise'}
                // onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton  text="Available" />
        </Link>
        <Link to={'/home'}>
        <button onClick={handleLogout}>Logout</button>
        </Link>
  </Box>
 

  </div>
 


  </>
  );
}
