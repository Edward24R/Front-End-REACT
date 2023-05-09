import { Button, ButtonGroup, Heading, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import * as yup from "yup";
import TextField from "./TextField";

const LoginValidationSchema = yup.object().shape({
  email: yup.string().label("Email").email().required(),
  password: yup.string().label("Password").required(),
});

const Login = ({ login }) => {
  const navigate = useNavigate();
  const paperStyle = {
    position: "absolute",
    top: 140,
    padding: 20,
    height: "40vh",
    width: 680,
    margin: "20px auto",
    backgroundColor: "#668966",
  };

  return (
    <div className="loginBackground" style={{ background: "#0e6e0e" }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          setStatus();
          try {
            await login(values.email, values.password);
          } catch (e) {
            setSubmitting(false);
            setStatus({
              message: e.response ? e.response.data.message : e.toString(),
              type: "error",
            });
          }
        }}
        validationSchema={LoginValidationSchema}
      >
        <VStack
          as={Form}
          w={{ base: "90%", md: "500px" }}
          m="auto"
          justify="center"
          h="100vh"
          spacing="1rem"
          border="1px solid black"
          p="4"
          bg="#668966"
          borderRadius="100px"
          overflow="hidden"
          minH="50vh"
          maxH="91.5vh"
        >
          <Heading>Log In</Heading>
          <TextField
            name="email"
            placeholder="Enter email"
            autoComplete="off"
            label="Email"
          />

          <TextField
            name="password"
            placeholder="Enter password"
            autoComplete="off"
            label="Password"
          />

          <ButtonGroup pt="1rem">
            <Button colorScheme="teal" type="submit">
              Log In
            </Button>
            <Button colorScheme="green" onClick={() => navigate("/signup")}>
              Create Account
            </Button>
          </ButtonGroup>
        </VStack>
      </Formik>
    </div>
  );
};

export default Login;
