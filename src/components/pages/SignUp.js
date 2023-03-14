import React, { useState, useEffect }from 'react';
import '../../App.css';


// export default function SignUp() {
//   return <h1 className='sign-up'>LIKE & SUBSCRIBE</h1>;
// }


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the email and password to the server for authentication
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Redirect the user to the dashboard or home page
          window.location.href = "/";
        } else {
          // Display an error message
          setErrorMessage("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Error logging in", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <button type="submit">Log In</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}

export default SignUp;
