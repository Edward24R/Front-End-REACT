import { createStore } from 'redux';
import {Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import '../components/userPages/userPagesCSS/LogIn.css'
import {
    Box,
    MenuItem,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
  } from "@mui/material";


const initialState = {
  myVariable: "18.217454442274484, -67.14313830349626" // Set initial value of the variable
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_MESSAGE':
      return {...state, myVariable: action.payload };
    default:
      return state;
  }
}

export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.token) {
      return { 'Authorization': 'Bearer ' + user.token };
  } else {
      return {};
    }
}


// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Password must be the same")
    .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
});


const initialValuesRegister = {
    email: "",
    password: "",
    confirmPassword: ""
  };

function SignUp() {
  const navigate = useNavigate();
  // const paperStyle={ position: 'absolute' ,top: 140,padding :20,height:'40vh',
  // width:680, margin:"20px auto", backgroundColor: '#668966'}
  const register = async (values) => {
      const savedUserResponse = await fetch(
        "http://localhost:3500",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values)
        }
      );
  
      const savedUser = await savedUserResponse.json();
    
  
      if (savedUser) {
        console.log(savedUser);
        navigate("/");
      }
    };
  
    const handleFormSubmit = async (values) => {
      console.log("Test");
      console.log(values);
      // await register(values);
    };

return (
  <>
    {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
    <Formik
      initialValues={{ initialValuesRegister }}
      onSubmit={(values, {resetForm}) => {
         alert(JSON.stringify(values));
         handleFormSubmit(values);
         resetForm()
    }}
    validationSchema={schema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
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
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter email"
                className="form-control inp_text"
                id="email"
              />
              {/* If validation is not passed show errors */}
              <p className="error">
                {errors.email && touched.email && errors.email}
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
              />

              <p className="error">
                {errors.password && touched.password && errors.password}
              </p>
               {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
              <input
                
                  type="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  placeholder="Enter password"
                  className="form-control"
                  error={
                      Boolean(touched.confirmPassword) &&
                      Boolean(errors.confirmPassword)
                  }
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  sx={{ gridColumn: "span 4" }}
              />

               {/* If validation is not passed show errors */}
              <p className="error">
                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
              </p>
              {/* Click on submit button to submit the form */}
                  <ButtonGroup pt="1rem">
                  <button  colorScheme="teal" type="submit" 
                  onClick={() => {
                      navigate("/home");
                      resetForm();
                          }}>
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
}


const store = createStore(reducer);

export default store;