import React from 'react';

function Navigation() {
  const navigatelogin=()=>{
    window.location.href="./login";
  }
  return (
    <div className = "nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/notice">Notice Board</a>
        </li>
        <li>
          <a href="/registration">Registration</a>
        </li>
        <li>
            <button onClick={navigatelogin} className="button-36"> Login </button>
        </li>
        <li>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
