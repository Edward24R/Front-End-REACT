import React, { useState, useEffect } from 'react';
import axios from 'axios';


///FOR TESTING ONLY

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/') 
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        console.log('Error response status:', error.response?.status);
        console.log('Error message:', error.message);
        console.log('Error response data:', error.response?.data);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Is Admin: {user.is_admin ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;