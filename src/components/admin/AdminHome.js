// import React from 'react';
import "../../App.css";
import Footer from "../ui/Footer";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Sidebar from "../ui/adminRelated/Sidebar";
import Table from "../ui/adminRelated/Table";
import React, { useState, useEffect } from "react";
import Header from "../ui/adminRelated/Header";
import { tokens } from "../theme";
import LineChart from "../ui/adminRelated/LineChart";
import Stats from "../ui/adminRelated/DataTable";


//Admin Home Page
function AdminHome() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      ></Box>
      <div className="container">
        <Table />
      </div>
      <div>
        <Box m="20px">
          <Header subtitle="Parking Spot Occupancy" />
          <Box height="75vh">
            <LineChart />
          </Box>
        </Box>
      </div>
      {/* <div>
    <Box m="20px">
      <Header subtitle="Statistics" />
        <Box height="75vh">
          <Stats/>
        </Box>
    </Box>
    </div> */}

      <div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default AdminHome;
