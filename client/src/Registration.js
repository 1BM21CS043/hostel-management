import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Registration = () => {
  const [input_name, setinput_name] = useState('');
  const [input_usn, setinput_usn] = useState('');
  const [input_address, setinput_address] = useState('');
  const [input_guardian_name, setinput_guardian_name] = useState('');
  const [input_guardian_contact, setinput_guardian_contact] = useState('');
  const [input_password, setinput_password] = useState('');

  const handleinput_name = event => {
    const result = event.target.value.replace(/[^a-zA-Z]/g, ''); // Updated regex to allow both lowercase and uppercase letters
    setinput_name(result);
  };

  const handleinput_usn = event => {
    const result = event.target.value.replace(/[^a-zA-Z0-9]/g, ''); // Updated regex to allow both letters and numbers
    setinput_usn(result);
  };

  const handleinput_address = event => {
    const result = event.target.value; // Removed unnecessary regex for address input
    setinput_address(result);
  };

  const handleinput_guardian_name = event => {
    const result = event.target.value.replace(/[^a-zA-Z]/g, ''); // Updated regex to allow both lowercase and uppercase letters
    setinput_guardian_name(result);
  };

  const handleinput_guardian_contact = value => {
    setinput_guardian_contact(value); // Updated to use the value directly from react-phone-input-2
  };

  const handleinput_password = event => {
    const result = event.target.value; // Removed unnecessary regex for password input
    setinput_password(result);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      name: input_name,
      usn: input_usn,
      address: input_address,
      guardian_name: input_guardian_name,
      guardian_contact: input_guardian_contact,
      password: input_password
    };

    axios
      .post('http://localhost:8080/signup', formData)
      .then(response => {
        // Handle successful response
        alert(response.data.message);
        window.location.href="./login"
        console.log(response.data);
      })
      .catch(error => {
        // Handle error
        alert(error.response.data.error);
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <div className="registration-form">
        <form className="form-element" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              id="message"
              name="message"
              type="text"
              value={input_name}
              onChange={handleinput_name}
            />
          </label>
          <label>
            USN:
            <input
              type="text" // Changed input type to text to allow alphanumeric values
              name="usn"
              value={input_usn}
              onChange={handleinput_usn}
            />
          </label>
          <label>
            Permanent Address:
            <input
              type="text"
              name="address"
              value={input_address}
              onChange={handleinput_address}
            />
          </label>
          <label>
            Guardian's name:
            <input
              id="message2"
              name="Guardian's name"
              type="text"
              value={input_guardian_name}
              onChange={handleinput_guardian_name}
            />
          </label>
          <label>
            Guardian's contact:
            <PhoneInput
              country={'in'}
              value={input_guardian_contact}
              onChange={handleinput_guardian_contact}
            />
          </label>
          <label>
            Password:
            <input
              id="message2"
              name="password"
              type="password"
              value={input_password}
              onChange={handleinput_password}
            />
          </label>
          <input type="submit" value="Submit" className='submitbutton' />
        </form>
      </div>
    </div>
  );
};

export default Registration;
