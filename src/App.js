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
import AdminHome from './components/userPages/AdminHome';

function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/home' exact element={<Home/>} />
          {/* <Route path='/about' element={<About/>} /> */}
          <Route path='/contact' element={<Contact/>} />
          <Route path='/log-in' element={<LogIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/uprm' element={<Uprm/>} />
          <Route path='/gmaps' element={<Gmaps/>} />
          <Route path='/parkwise' element={<Parkwise/>} />
          <Route path='/adminhome' element={<AdminHome/>} />


          
        </Routes>
      </Router>
    </>
  );
}

export default App;