import React from 'react';
// import '../../App.css';
import Footer from '../ui/Footer';
import './Contact.css'

// Contact Info page
export default function Contact() {
  return (
    <>

  <div className='contact-container'>

  <h1>Contact Us at</h1>
  <p>For questions or more information about our Parkwise system, contact us at:</p>
  <p>instinct.parkwise@gmail.com</p>

  {/* <form>
        <label htmlFor="name" padding = "4rem" >Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form> */}


  </div>
  <div>
    <Footer/>
  </div>


  </>
  );
}
