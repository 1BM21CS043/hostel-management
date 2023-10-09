import React, { useState } from 'react';
import axios from 'axios';
import "./Login_style.css";

const Login = () => {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const handleUserIdChange = (event) => {
        setUserId(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            usn: userId,
            password: password
        };

        axios.post('http://localhost:8080/login', formData)
            .then(response => {
                alert("Login Successful.")
                window.location.href="./"
                // Handle the response from the server
                console.log(response.data);
            })
            .catch(error => {
                alert(error.response.data.error)
                // Handle error if the request fails
                console.error(error);
            });
    };

    const redirectHome = () => {
        window.location.href = "./";
    };

    return (
        <div>
            <div className="hero">
                <div className="form-box">
                    <div className="button-box">
                        <div id="btn">

                        <h1 style={{color:"black"}}>Login</h1>
                        </div>
                    </div>
                    <br/><br/><br/>
                    <div className="social-icons">
                        <img src="../logo1.png" alt="Logo" />
                    </div>
                    <form id="Login" className="input-group" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="User ID"
                            required
                            value={userId}
                            onChange={handleUserIdChange}
                        />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Enter Password"
                            required
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <input type="checkbox" className="chech-box"/><span> Remember Password</span>
                        <button type="submit" className="submit-btn">Log In</button>
                    </form>
                    <form id="Register" className="input-group">
                        <input type="int" className="input-field" placeholder="Mobile Number" required/>
                        <input type="email" className="input-field" placeholder="Email ID" required/>
                        <input type="text" className="input-field" placeholder="Enter Password" required/>
                        <input type="text" className="input-field" placeholder="Confirm Password" required/>
                        <input type="checkbox" className="chech-box"/><span> I agree to the terms & conditions</span>
                        <button type="submit" className="submit-btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
