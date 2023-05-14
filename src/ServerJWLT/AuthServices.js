import Axios from "axios";

const API_BASE_URL = 'http://18.219.33.99:9190/authenticate';
const LOGIN_URL = '/login';
const SIGNIN_URL = '/signup';


var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...',
    'accept': '*/*',
    'Content-Type': 'application/json',  
    'content-type': 'text/json',
    // 'Origin,Access-Control-Request-Method,Access-Control-Request-Headers'

}


class ApiService {

    get(url) { return Axios.get(API_BASE_URL + url); }

    post(url, data) { return Axios.post(API_BASE_URL + url, data); }

    put(url, data) { return Axios.put(API_BASE_URL + url, data); }

    delete(url) { return Axios.delete(API_BASE_URL + url); }
    
    login(data) { return Axios.post(API_BASE_URL + LOGIN_URL, data); }

    signin(data) { return Axios.post(API_BASE_URL + SIGNIN_URL, data, { headers: {headers}}

    ) ;  }

    changeAuthToken(jwt){
        if(jwt) 
            Axios.defaults.headers['Authorization'] = 'Bearer '+jwt;
        else
            Axios.defaults.headers['Authorization'] = null;  
    }

    changeLanguage (lg){ Axios.defaults.headers["accept-language"] = lg; }
}


export default new ApiService();