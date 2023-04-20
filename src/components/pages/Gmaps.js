// import React, {Component} from 'react';
// import '../../App.css';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import { Zoom } from '@material-ui/core';
// import './Gmaps.css';


//Google Maps component for Applications
// Improved with Direction Search bar
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
  SkeletonText,
  Text,
} from '@chakra-ui/react'
import { FaLocationArrow, FaTimes } from 'react-icons/fa'

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef } from 'react'

import { myVariable, getMyVariable, parkingA, parkingB, parkingC, parkingD } from '../ui/functionGrid';
import { useSelector } from 'react-redux';
import store from '../ui/store';
import React, { useEffect, useState } from 'react';
import MyComponent from '../ui/extra';




function Gmaps() {

  const [location, setLocation] = useState("");

  useEffect(() => {
    const getLocation = async () => {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation(`${latitude}, ${longitude}`);
    };
    getLocation();
  }, []);

const myCoord =  store.getState().myVariable;
let latC= parseFloat(myCoord.split(',')[0]); 
let longC = parseFloat(myCoord.split(',')[1]); 
const center = { lat: latC, lng: longC };
const placeholder = location;



  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }

  
  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }


    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()

    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    >
    
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={16}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
        
          <Marker position={center} />
          
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
      >
        <HStack spacing={2} justifyContent='space-between'>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input type='text' placeholder='Origin' ref={originRef} defaultValue={location}/>
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
                defaultValue={myCoord}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent='space-between'>
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack>
      </Box>
    </Flex>
  )
}

export default Gmaps;





// // export default function Gmaps() {
// //   return (
// //   <h1 className='gmaps'>GMAPS</h1>
  

  
// //   );
// // }
// const latitude = coordMarkerLat;
// const longitude = coordMarkerLong;

// export class Gmaps extends Component {
//   render() {
//     return (
//       <>
//       <Map google={this.props.google} 
//         style={{width:"100", height:"100"}}
//           zoom = {17.4}
//           initialCenter={{
//             lat: 18.211610324904555, 
//             lng: -67.14294332244577
//           }}
         
//       >

//         <h1 className='gmaps'>GMAPS</h1>
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         {/* <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow> */}
//       </Map>

//       <div><Footer/></div>

//       </>
      
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyA0Zxjebh012IAWjIWrQLeqXN73RYA2M_I")
// })(Gmaps)