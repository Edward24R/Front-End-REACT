/*




~Parkwise-Frontend, Developed by Eduardo Rivera
*/

import React, { useState } from 'react';
import axios from 'axios';


import {Form, Formik } from "formik";
import * as Yup from "yup";
import {  ButtonGroup,  VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import './userPagesCSS/LogIn.css'
import ApiService from "../../ServerJWLT/AuthServices"

// import {
//     Box,
//     MenuItem,
//     TextField,
//     Typography,
//     useMediaQuery,
//     useTheme
//   } from "@mui/material";



  const schema = Yup.object().shape({
    username: Yup.string()
    .required("Username is a required field")
    .min(3, "Username must be at least 3 characters"),
    email: Yup.string()
      .required("Email is a required field")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Password is a required field")
      .min(6, "Password must be at least 6 characters"),
  
  });



const SignUp = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const navigate = useNavigate();

    const handleFormSubmit = async () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        
        try {
            const response = ApiService.signin({username: username, password: password, email: email,  isAdmin: false});
          
            if (response.status === 200) {
              console.log(response);
              alert('your account have been created, you can now login');
              props.navigation.navigate('/home');
            } else {
              alert(response.data.message);
            }
          } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again later.');
          }
      };

    return (
        
        <>

<Formik
        initialValues={{ 
                username: '',
                email: '',
                password: '',
                confirmPassword: '' }}
        onSubmit={handleFormSubmit}
      validationSchema={schema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleSubmit,
          handleChange,
          resetForm,
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
                <span>Sign Up</span>
              {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}   
              <input
                  type="username"
                  name="username"
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Enter Username"
                  className="form-control inp_text"
                  id="username" 
                  onChange={handleChange}
                  
                /> {setUsername(values.username)}
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.username && touched.username && errors.username}
                </p>
                <input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email"
                  className="form-control inp_text"
                  id="email"
                  onChange={handleChange}
                  
                /> {setEmail(values.email)}
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control" 
                  onChange={handleChange}
                  onChangeText= {(text) => setPassword(text)}
                /> {setPassword(values.password)}

                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                 {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                    type="password"
                    name="confirmPassword"
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                    placeholder="Confirm password"
                    className="form-control"
                    onChange={handleChange}
                   
                    error={
                        Boolean(touched.confirmPassword) &&
                        Boolean(errors.confirmPassword)
                    }
                    helperText={touched.confirmPassword && errors.confirmPassword}
                    sx={{ gridColumn: "span 4" }}
                /> {setConfirmPassword(values.confirmPassword)}

                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                </p>
                {/* Click on submit button to submit the form */}
                    <ButtonGroup pt="1rem">
                    <button  colorScheme="teal" type="submit" 
                    onClick={
                        handleFormSubmit
                            }>
                         Sign Up
                    </button>

                    <button   colorScheme="green" onClick={() => navigate("/log-in")}>Back</button>
                    </ButtonGroup>

              </form>
            </div>
          </div>
          </VStack>
        )}
      </Formik>
    </>
  
);
};
  
  export default SignUp;