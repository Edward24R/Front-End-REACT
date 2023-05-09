// import "../../App.css";
import {Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import './userPagesCSS/LogIn.css'

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

const initialValuesRegister = {
    email: "",
    isAdmin: false,
    password: "",
    confirmPassword: ""
  };
  
  const type = [
    {
      value: "User",
      label: "Student"
    }
  ];


function Login() {
    const navigate = useNavigate();
    // const paperStyle={ position: 'absolute' ,top: 140,padding :20,height:'40vh',width:680, margin:"20px auto", backgroundColor: '#668966'}
  

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
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
                 {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                    <ButtonGroup pt="1rem">
                    <button  colorScheme="teal" type="submit">
                         Log In
                    </button>
                    <button   colorScheme="green" onClick={() => navigate("/signup")}>Create Account</button>
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

export default Login;