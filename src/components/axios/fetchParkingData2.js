import axios from 'axios';

function fetchData() {
    return axios.get('../../server/parkings.json')
      .then(response => {
        const data = response.data;
        const parkA = data.parkA;
        const coordsA = data.coordsA;
        const parkB = data.parkB;
        const coordsB = data.coordsB;
        const parkC = data.parkC;
        const coordsC = data.coordsC;
        const parkD = data.parkD;
        const coordsD = data.coordsD;

        return { parkA,parkB,parkC,parkD, coordsA,coordsB,coordsC,coordsD };
      })
      .catch(error => console.log(error));
  }
  
  export function getOneArrA() {
    return fetchData().then(data => data.parkA);
  }
  
  export function getCoordsA() {
    return fetchData().then(data => data.coordsA);
  }

  export function getOneArrB() {
    return fetchData().then(data => data.parkB);
  }
  
  export function getCoordsB() {
    return fetchData().then(data => data.coordsB);
  }
  
  export function getOneArrC() {
    return fetchData().then(data => data.parkC);
  }
  
  export function getCoordsC() {
    return fetchData().then(data => data.coordsC);
  }
  
  export function getOneArrD() {
    return fetchData().then(data => data.parkD);
  }
  
  export function getCoordsD() {
    return fetchData().then(data => data.coordsD);
  }
  
  
