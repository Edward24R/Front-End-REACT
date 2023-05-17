/**
 * Parking Data Table Component: W
 * 
 * 
 * 
 * 
 */
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DataTable from "react-data-table-component";
import "./Table.css";
import axios from "axios";

const ParkingDataTable = () => {
    const [lots, setLots] = useState([]);
  
    useEffect(() => {
      fetchLots();
    }, []);
  
    const fetchLots = async () => {
      try {
        const response = await axios.get('http://localhost:4000/parkinglot/lot');
        setLots(response.data);
      } catch (error) {
        console.error('Error fetching parking lot data:', error);
      }
    };
  
    const containerStyle = {
        width: '80%', // Adjust the width to make the entire component smaller
        margin: '0 auto', // Center the component horizontally
      };

    const customStyles = {

        headCells: {
          style: {
            fontWeight: 'bold',
            fontSize: '14px',
            backgroundColor: '#f2f2f2', // Change the background color of header cells
          },
        },
        cells: {
          style: {
            fontSize: '14px',
            backgroundColor: '#7adfe1', // Change the background color of regular cells
          },
        },
        table: {
          style: {
            backgroundColor: '#e6e6e6', // Change the background color of the table container
          },
        },
      };

    const columns = [
        
      { name: 'Parking Lot Name', selector: 'parking_lot_name' },
      { name: 'Capacity', selector: 'capacity' },
      { name: 'Current Available Spaces', selector: 'available_spaces' },
      { name: 'Current Occupied Spaces', selector: 'occupied_spaces' },
      { name: 'Average Capacity per Hour', selector: 'avg_per_hour' },
    ];
  
    return (
        <div style={containerStyle}>
      <DataTable
        title="Parking Lot Data"
        columns={columns}
        data={lots}
        pagination
        customStyles={customStyles}
      />
      </div>
    );
  };
  
  export default ParkingDataTable;