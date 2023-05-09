import React from 'react';
import '../../App.css';
import MyGrid from '../ui/Grid';
import './pagesCSS/Parkwise.css'
import Typography from "@mui/material/Typography";

//Parkwise Page

export default function Parkwise() {

    return (
    //Page Background Color  
     <div className= 'page-containerSC' style={{height: "300vh", background: '#0cb9c2' }   }>
     
          <div className='parkw'><h1>Administracion de Empresas: Click on 
          Available Parking for Parking Directions</h1></div>
          
          <div >
         {/* <img className='backW' src='/images/B1.jpg'/> */}
         <MyGrid top="10%" left="20%"  />

         </div>
         
        <div id= "right" >
            <img src='/images/parkingBaseTemp.png' className='pic'/>
            {/* <img src='/images/ParkingSatE.png' className='pic'/> */}
        </div>
      </div>
      
    );

}
