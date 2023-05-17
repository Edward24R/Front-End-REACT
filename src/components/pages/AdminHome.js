/**
 * Admin Home:
 * 
 * 
 * ~Parkwise-Frontend, Developed by Eduardo Rivera
 */
// import React from 'react';
import "../../App.css";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import UserDataTable from "../ui/adminRelated/UserTable";
import React, { useState, useEffect } from "react";
import { tokens } from "..//ui/theme";
import ParkingDataTable from "../ui/adminRelated/ParkingLotTable";

//Admin Home Page
function AdminHome() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>

     <UserDataTable/>
     <ParkingDataTable/>
      
    </>
  );
}

export default AdminHome;
