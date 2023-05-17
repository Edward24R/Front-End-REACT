import axios from 'axios';
import React, { useState, useEffect } from 'react';

const ParkingSpotAvailability = ({ id }) => {
  const [isAvailable, setIsAvailable] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/parking-spot/availability/${id}`);
        setIsAvailable(response.data.available);
      } catch (error) {
        console.error('Error retrieving parking spot availability:', error);
        // Handle error state or display an error message
      }
    };

    fetchData();
  }, [id]);

  return isAvailable;
};

export default ParkingSpotAvailability;