import React, { useState, useContext } from 'react';
import '../../style/CSS/Contact/Contact.css';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import Form from './contactcomponents/Form';
import FormSuccess from './contactcomponents/FormSuccess';

import { ThemeContext } from '../../ThemeContext';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [theme] = useContext(ThemeContext);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className={theme}>
      <div className="contact">
        <Navbar />
        {!isSubmitted ? <Form submitForm={submitForm} /> : <FormSuccess />}
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
