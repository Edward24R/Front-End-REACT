import axios from 'axios';

export default axios.create({
    baseURL: 'http://18.219.33.99:9190/authenticate/signup'
});

