import React from 'react'
import "./Login_style.css"
const Login = ()=>{
    const redirectHome=()=>{
        window.location.href="./";
    }
    return(
        <div>
            <div class="hero">
    <div class="form-box">
        <div class="button-box">
            <div id="btn"></div>
            <button type="button" class="toggle-btn" onclick="Login()">Log In</button>
            {/* <button type="button" class="toggle-btn" onclick="Register()">Register</button> */}
        </div>
        <br/><br/><br/>
        <div class="social-icons">
            <img src="../logo1.png" />

        </div>
        <form id="Login" class="input-group">
            <input type="text" class="input-field" placeholder="User ID" required/>
            <input type="text" class="input-field" placeholder="Enter  Password" required/>
            <input type="checkbox" class="chech-box"/><span> Remember Password</span>
            <button onClick={redirectHome} type="submit" class="submit-btn">Log In</button>
        </form>
        <form id="Register" class="input-group">
            <input type="int" class="input-field" placeholder="Mobile Number" required/>
            <input type="email" class="input-field" placeholder="Email ID" required/>
            <input type="text" class="input-field" placeholder="Enter  Password" required/>
            <input type="text" class="input-field" placeholder="Confirm  Password" required/>
            <input type="checkbox" class="chech-box"/><span> I agree to the terms & conditions</span>
            <button type="submit" class="submit-btn">Register</button>
        </form>
    </div>
   </div>
        </div>
    )
}

export default Login