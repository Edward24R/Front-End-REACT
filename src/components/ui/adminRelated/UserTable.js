/**
 * User Data Table Component: W
 * 
 * 
 * 
 */
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DataTable from "react-data-table-component";
import "./Table.css";
import axios from "axios";

const UserDataTable = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    const handleAdminChange = async (user) => {
      try {
        const updatedUser = { ...user, is_admin: !user.is_admin };
        await axios.put(`http://localhost:4000/users/${user.id}`, updatedUser);
        // Update the local state with the updated user
        setUsers(prevUsers => {
          const updatedUsers = prevUsers.map(u => (u.id === user.id ? updatedUser : u));
          return updatedUsers;
        });
      } catch (error) {
        console.error('Error updating user:', error);
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
     
      { name: 'Username', selector: 'username' },
      { name: 'Email', selector: 'email' },
      { name: 'Is Admin', selector: 'is_admin', cell: row => row.is_admin ? 'Yes' : 'No' },
      {
        name: 'Add/Remove Admin',
        cell: row => (
          <input
            type="checkbox"
            checked={row.is_admin}
            onChange={() => handleAdminChange(row)}
          />
        ),
      },
    ];
  
    return (
        <div style={containerStyle}>
      <DataTable
        title="User Data"
        columns={columns}
        data={users}
        pagination
        customStyles={customStyles}
      />
      </div>
    );
  };
  
  export default UserDataTable;