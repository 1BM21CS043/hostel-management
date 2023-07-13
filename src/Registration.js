import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

//imported library with all countries data
const Registration = () => {
    const [message, setMessage] = useState(''); //state for Student's Name
    const [message2, setMessage2] = useState(''); //state for Gaurdian's Name
    const [phone, setPhone] = useState(""); //state for phone number
    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z]/gi, ''); //regex to accept only characters
    
        setMessage(result);
    };
    const handleChange2 = event => {
        const result = event.target.value.replace(/[^a-z]/gi, ''); //regex to accept only characters
    
        setMessage2(result);
    };
    
    return (
        <div className = 'form-container'>
            <div className = 'registration-form'>
                <form className = 'form-element'>
                    <label>
                        Name:
                        <input
        id="message"
        name="message"
        type="text"
        value={message}
        onChange={handleChange}
      />
                    </label>
                    <label>
                        USN:
                        <input type="number" name="usn" />
                    </label>
                    <label>
                        Permanent Address:
                        <input type="text" name="address" />
                    </label>
                    <label>
                        Guardian's name:
                        <input
        id="message2"
        name="Gaurdian's name"
        type="text"
        value={message2}
        onChange={handleChange2}
      />
                    </label>
                    <label>
                        Guardian's contact:
                        <PhoneInput
          country={'in'}
          value={phone}
          onChange={phone => setPhone(phone)}
        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Registration;
