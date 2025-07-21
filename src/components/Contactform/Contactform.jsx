import React, { useState } from 'react';
import { FiMessageSquare, FiPhone } from "react-icons/fi";
import "./Contactform.css";

function Contactform() {
    const [submittedData, setSubmittedData] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form Data:', formData); // Print to console
    setSubmittedData(formData);
  };

  return (
    <div className='form'>
      <div>
        <div className='formbutton'>
          <button className='button1'> <FiMessageSquare /> VIA SUPPORT CHAT</button>
          <button className='button2'><FiPhone /> VIA CALL</button>
        </div>

        <div className='formbutton2'>
          <button className='button3'> <FiMessageSquare /> VIA EMAIL FORM</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='contactform'>

            <div className="input-container">
              <input
                type="text"
                name="name"
                required
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor='name'>Name</label>
            </div>

            <div className="input-container">
              <input
                type="email"
                name="email"
                required
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor='email'>Email</label>
            </div>

            <div className="input-container">
              <input
                type="text"
                name="message"
                required
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
              />
              <label htmlFor='message'>Message</label>
            </div>

            <button type="submit" className="submit-button">Submit</button>

            {submittedData && (
  <div>
    <p>{submittedData.name}</p>
    <p>{submittedData.email}</p>
    <p>{submittedData.message}</p>
  </div>
)}
          </div>
        </form>
      </div>

      <div>
        <img src="./images/Service 24_7-pana 1.svg" alt="support" />
      </div>
    </div>
  );
}

export default Contactform;
