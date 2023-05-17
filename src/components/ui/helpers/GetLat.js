import React, { useEffect, useState } from 'react';
import { getParkingSpotLatitude } from '../helpers/axiosFunctions';

function LatitudeDisplay({ name }) {
  const [latitude, setLatitude] = useState(null);
        
  useEffect(() => {
    // Call the function to get the latitude for the provided parking spot name
    getParkingSpotLatitude(name)
      .then((value) => {
        // Update the latitude state with the received value
        setLatitude(value);
      })
      .catch((error) => {
        console.error('Error retrieving latitude:', error);
      });
  }, [name]);

  return (
    <div>
      <h1>Latitude for {name}: {latitude}</h1>
    </div>
  );
}

export default LatitudeDisplay;