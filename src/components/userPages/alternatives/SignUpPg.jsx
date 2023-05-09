import { Button, ButtonGroup, Heading, VStack, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import * as React from "react";
import * as yup from "yup";
import TextField from "./TextField";

const LoginValidationSchema = yup.object().shape({
  email: yup.string().label("Email").email().required(),
  password: yup.string().label("Password").required(),
});

const SignUp = ({ login }) => {
  const navigate = useNavigate();
  return (
    <div style={{ background: "#06579e" }}>
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
          <Heading>Sign Up</Heading>
          {/* <Heading>In Order To Get the Latest Parkwise News!</Heading> */}
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

          <TextField
            name="confirm_Password"
            placeholder="Confirm password"
            autoComplete="off"
            label="Password Confirm"
          />

          <ButtonGroup pt="1rem">
            <Button colorScheme="teal" type="submit">
              Create Account
            </Button>
            <Button colorScheme="red" onClick={() => navigate("/log-in")}>
              Back
            </Button>
          </ButtonGroup>
          <Text fontSize="lg" fontWeight="bold" textAlign="center">
            Stay up to date with our latest Parkwise developments!
          </Text>
        </VStack>
      </Formik>
    </div>
  );
};

export default SignUp;
