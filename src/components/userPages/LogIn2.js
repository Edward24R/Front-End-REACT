/*




~Parkwise-Frontend, Developed by Eduardo Rivera
*/


import React, { useState } from 'react';

// import Bar from '../Buttons/Bar';
import LoginButton from '../Buttons/LoginButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import './userPagesCSS/LogIn.css'


// const schema = Yup.object().shape({
//     username: Yup.string()
//     .required("Username is a required field")
//     .min(3, "Username must be at least 3 characters"),
//     password: Yup.string()
//       .required("Password is a required field")
//       .min(6, "Password must be at least 6 characters"),
//   });


const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://192.168.1.85:9193/authenticate/login', { username, password })
      .then(response => {
        // Store the JWT token in local storage
        token = response.data.token;
        localStorage.setItem('token', token);

        // Redirect the user to the home page
        props.navigation.navigate('ProfileUser');
        alert('welcome back', username);
      })
      .catch(error => {
        console.log(error);
        setError('Invalid username or password');
      });
  };

  const handleButtonClick = () => {
    handleLogin();
    navigate('/home');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <>

<Formik
        // validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          // Alert the input values of the form that we filled
          alert(JSON.stringify(values));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
    <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
        border="1px solid black" p="4" bg="#668966" borderRadius="100px" overflow="hidden"
        minH="50vh" maxH="91.5vh"
      >
          <div className="login">
            <div className="form">
           {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="username"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Enter username"
                  className="form-control inp_text"
                  id="username"
                />{setUsername(values.username)}
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.username && touched.username && errors.username}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />{setPassword(values.password)}
                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                    <ButtonGroup pt="1rem">
                    {token ? (
                        <button colorScheme="teal" onClick={handleLogout}>Logout</button>
                         ) : (
                        <button  colorScheme="teal" type="submit" onClick={handleLogin}  >
                         Log In
                        </button>
                        )}
                    
                    <button   colorScheme="green" onClick={() => navigate("/signup")}>Create Account</button>
                    </ButtonGroup>

              </form>
            </div>
          </div>
          </VStack>
        )}
      </Formik>

        {/* <View style={{ alignItems: 'center', width: 420 }}>
            <Text
                style={{
                    color: 'black',
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginTop: 20,
                }}>
                Welcome Back
            </Text>
            <Text
                style={{
                    color: 'darkgreen',
                    fontSize: 19,
                    fontWeight: 'bold',
                    marginBottom: 20,
                }}>
                Log in to your account{' '}
            </Text>
        </View>
        <View
            style={{
                backgroundColor: 'white',
                height: 720,
                width: 460,
                borderTopLeftRadius: 0,
                paddingTop: 100,
                alignItems: 'center',
                shadowOpacity: 1,
            }}>
            <Text
                style={{
                    color: 'darkgreen',
                    fontSize: 19,
                    fontWeight: 'bold',
                    paddingVertical: 10,
                    marginVertical: -90,
                    marginRight: 200,
                }}>
                Name:{' '}
            </Text>
            <input
                placeholder="Enter your name"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <Text
                style={{
                    color: 'darkgreen',
                    fontSize: 19,
                    fontWeight: 'bold',
                    paddingVertical: 10,
                    marginVertical: -90,
                    marginRight: 170,
                }}>
                Password:{' '}
            </Text>
            <input
                placeholder="Enter password"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
       
        <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {error && <Text style={styles.error}>{error}</Text>}
    </View> */}
</>
);
};


export default Login;