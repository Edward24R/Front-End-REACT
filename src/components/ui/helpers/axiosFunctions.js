/*
Grid helper functions for receiving and sending data between database and application files.


~Parkwise-Frontend, Developed by Eduardo Rivera
*/

import store from "../../../store/store";
import axios from "axios";
import React, { useEffect, useState } from 'react';

export function getParkingSpotLatitude(id) {
    return axios
      .get(`/parking-spot/latitude/${id}`)
      .then(response => {
        return response.data.latitude;
      })
      .catch(error => {
        console.error('Error retrieving parking spot latitude:', error);
        return null;
      });
  }
  
  export function getParkingSpotLongitude(id) {
    return axios
      .get(`/parking-spot/longitude/${id}`)
      .then(response => {
        return response.data.longitude;
      })
      .catch(error => {
        console.error('Error retrieving parking spot longitude:', error);
        return null;
      });
  }
  
// export function getParkingSpotLatitude(id) {
//     const [latitude, setLatitude] = useState(null);
  
//     useEffect(() => {
//       axios.get(`/parking-spot/latitude/${id}`)
//         .then(response => {
//           setLatitude(response.data.latitude);
//         })
//         .catch(error => {
//           console.error('Error retrieving parking spot latitude:', error);
//         });
//     }, [id]);
  
//     return latitude;
//   }
  
//   export function getParkingSpotLongitude(id) {
//     const [longitude, setLongitude] = useState(null);
  
//     useEffect(() => {
//       axios.get(`/parking-spot/longitude/${id}`)
//         .then(response => {
//           setLongitude(response.data.longitude);
//         })
//         .catch(error => {
//           console.error('Error retrieving parking spot longitude:', error);
//         });
//     }, [id]);
  
//     return longitude;
//   }



// export const checkParkingSpotAvailability = async (name) => {
//   try {
//     const response = await axios.get(`http://localhost:4000/parking-spot/availability/${name}`);
//     return response.data.available;
//   } catch (error) {
//     console.error('Error checking parking spot availability:', error);
//     throw new Error('An error occurred while checking parking spot availability');
//   }
// };


// export const getParkingSpotLatitude = async (name) => {
//   try {
//     const response = await axios.get(`http://localhost:4000/parking-spot/latitude/${name}`);
//     return response.data.latitude;
//   } catch (error) {
//     console.error('Error retrieving parking spot latitude:', error);
//     throw new Error('An error occurred while retrieving parking spot latitude');
//   }
// };

// export const getParkingSpotLongitude = async (name) => {
//   try {
//     const response = await axios.get(`http://localhost:4000/parking-spot/longitude/${name}`);
//     return response.data.longitude;
//   } catch (error) {
//     console.error('Error retrieving parking spot longitude:', error);
//     throw new Error('An error occurred while retrieving parking spot longitude');
//   }
// };



// async function getSpotLatitude(parkingSpotName) {
//     try {
//       const response = await axios.get('http://localhost:4000/parking-spots', {
//         params: {
//           spotName: parkingSpotName,
//         },
//       });
  
//       const { latitude } = response.data;
  
//       return latitude;
//     } catch (error) {
//       console.error('Error retrieving latitude:', error);
//       throw error;
//     }
//   }
  
//   export { getSpotLatitude };
