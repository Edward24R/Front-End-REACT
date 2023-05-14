/*




~Parkwise-Frontend, Developed by Eduardo Rivera
*/

import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from './components/ui/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Switch} from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import Login from './components/userPages/LogIn2';
import SignUp from './components/userPages/SignUp2';

import Home from './components/pages/Home';
import Gmaps from './components/pages/Gmaps';
import Parkwise from './components/pages/Parkwise';
import AdminHome from './components/pages/AdminHome';
import { ChakraProvider, theme } from '@chakra-ui/react'
import Profile from './components/pages/Profile';

function App() {
 
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://18.219.33.99:9190/authenticate/signup');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/home' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/log-in' element={ 
            <ChakraProvider theme={theme}>
              <Login/>
            </ChakraProvider>
          } />
          <Route path='/signup' element={
              <ChakraProvider theme={theme}>
                <SignUp/>
              </ChakraProvider>
          } />
          
          <Route path='/gmaps' element={
            <ChakraProvider theme={theme}>
                <Gmaps/>
            </ChakraProvider>
          } />
          <Route path='/parkwise' element={<Parkwise/>} />
          <Route path='/adminhome' element={<AdminHome/>} />
          


          
        </Routes>
      </Router>
    </>
  );
}

export default App;
