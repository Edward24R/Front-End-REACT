import React from 'react';
import Navbar from './components/ui/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import LogIn from './components/userPages/LogIn';
import Home from './components/pages/Home';
import Uprm from './components/pages/UPRM';
import Gmaps from './components/pages/Gmaps';
import SignUp from './components/userPages/SignUp';
import Parkwise from './components/pages/Parkwise';
import AdminHome from './components/admin/AdminHome';
import CamView from './components/TemporaryJunk/CamView';
import ForgotPass from './components/userPages/ForgotPass';
import { ChakraProvider, theme } from '@chakra-ui/react'


function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/home' exact element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/log-in' element={<LogIn/>} />
          <Route path='/forgot' element={<ForgotPass/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/uprm' element={<Uprm/>} />
          <Route path='/gmaps' element={
            <ChakraProvider theme={theme}>
                <Gmaps/>
            </ChakraProvider>
          } />
          <Route path='/parkwise' element={<Parkwise/>} />
          <Route path='/adminhome' element={<AdminHome/>} />
          <Route path='/camview' element={<CamView/>} />


          
        </Routes>
      </Router>
    </>
  );
}

export default App;
