import React, {Component} from 'react';
import '../../App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Footer from '../ui/Footer';
 

// export default function Gmaps() {
//   return (
//   <h1 className='gmaps'>GMAPS</h1>
  

  
//   );
// }

export class Gmaps extends Component {
  render() {
    return (
      <>
      <Map google={this.props.google} zoom={14}>
        <h1 className='gmaps'>GMAPS</h1>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>

      <div><Footer/></div>

      </>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyA0Zxjebh012IAWjIWrQLeqXN73RYA2M_I")
})(Gmaps)