/*
Profile:
User Profile page which is accessible when a user logs in to or signs up for a Parkwise account.
Displays account information and a button component that will navigate the user to their last chosen parking spot
if available.

~Parkwise-Frontend, Developed by Eduardo Rivera
*/
import React from 'react';
import Footer from '../ui/Footer';
import './pagesCSS/Profile.css'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import GridButton from "../Buttons/GridButton";
import { useState } from "react";
import "../Buttons/ButtonsCSS/GridButton.css";
import store from "../../store/store";

// Contact Info page
export default function Profile() {

  return (
    <>

  <div className='contact-container'>
  <AccountCircleTwoToneIcon baseClassName="fas" className="fa-plus-circle" sx={{ fontSize: 200, color: "white" }}/>

  <Box sx={{
        fontSize: '30px',
        color: 'white', 
      }}>
  <p>username: {} </p>
  <p>email: {} </p>
  <p>Previous Parking Spot:</p>
        <Link
                to={'/parkwise'}
                // onClick={() => handleCoord(parkingA, 1)}
              >
                <GridButton  text="Available" />
        </Link>
  </Box>
 

  </div>
 


  </>
  );
}
