import axios from 'axios';

const fetchData = async () => {
    try {
      const response = await axios.get('/path/to/json/file.json');
      const { oneArr, coords } = response.data;
      return { oneArr, coords };
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getOneArr = async () => {
    const { oneArr } = await fetchData();
    return oneArr;
  };
  
  export const getCoords = async () => {
    const { coords } = await fetchData();
    return coords;
  };