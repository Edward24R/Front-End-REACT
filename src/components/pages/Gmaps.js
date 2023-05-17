/**
 * Gmaps: W
 * Google Maps API user page, used for user Navigation after using the Parkwise interface for a
 * chosen parking location. It is primarily composed of the GoogleMap component which generates the the 
 * Google Map and the coordinate display box which contains the functional button for navigation 
 * calculation. 
 * ~Parkwise-Frontend, Developed by Eduardo Rivera
 */
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
} from "@chakra-ui/react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef } from "react";

import store from "../../store/store";
import React, { useEffect, useState } from "react";

function Gmaps() {
  const [location, setLocation] = useState("");

  /*Get user current Location coordinates using the user's current location. If user has not given permissions prior
  then a pop up event will be triggered, asking the user permission for location tracking. 
  */
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

  
  /* 
  Receives Coordinates from Store.js
  */
  // const myCoord = store.getState().myVariable;
  
  //parses the coordinates as they are in the form of a single String value
  // Example: "18.8398239, 98.289310" parses at first comma "," and divides them for use
  // let latC = parseFloat(myCoord.split(",")[0]);
  // let longC = parseFloat(myCoord.split(",")[1]);
  let latC = store.getState().myLatitude;
  let longC = store.getState().myLongitude;
  const myCoord = latC + ',' + longC;

  const center = { lat: latC, lng: longC };

  /* GETS API KEY FROM .env */
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  const buttonRef = useRef(null);

  if (!isLoaded) {
    return <SkeletonText />;
  }

  /* Function for calculating route using user's current location coordinates and
     chosen destination coordinates. Will be utilized when user clicks on the designated
     "Calculate Route" button.
  */
  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();

    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

/* Function for clearing the user's route once finished with the desired navigation 
   Sets all coordinates to "".
*/
  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <Flex
      position="relative"
      flexDirection="column"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Box position="absolute" left={0} top={0} h="100%" w="100%">
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={19}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />

          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="1"
      >
        <HStack spacing={2} justifyContent="space-between" >
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type="text"
                placeholder="Origin"
                ref={originRef}
                defaultValue={location}
              />
            </Autocomplete>
          </Box>
          <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type="text"
                placeholder="Destination"
                ref={destiantionRef}
                defaultValue={myCoord}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label="center back"
              icon={<FaTimes />}
              onClick={clearRoute}
              // ref={buttonRef}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent="space-between">
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label="center back"
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center);
              map.setZoom(17);
            }}
          />
        </HStack>
      </Box>
    </Flex>
  );
}

export default Gmaps;
