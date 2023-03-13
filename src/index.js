import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './components/pages/about';
import { BrowserRouter, createBrowserRouter, RouterProvider, Route, } from 'react-router-dom';



// const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <App/>
//     },
//     {
//       path: 'about',
//       element: <About/>
//     }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<RouterProvider router={router}/>,
  <React.StrictMode>
  
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);






