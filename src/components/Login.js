import React, { useState } from 'react';
import '../styles/Login.css'; 

function SlidingForm() {
  const [activeForm, setActiveForm] = useState('login');

  const switchToLogin = () => {
    setActiveForm('login');
  };

  const switchToSignup = () => {
    setActiveForm('signup');
  };

  return (
    <main>
      <div className="login">
        <span>Already have an account?</span>
        <button type="button" onClick={switchToLogin}>Login</button>
      </div>

      <div className="signup">
        <span>Not a member?</span>
        <button type="button" onClick={switchToSignup}>Sign up</button>
      </div>

      <div className="back-layer" style={{ clipPath: activeForm === 'login' ? '' : 'inset(0 0 0 50%)' }}>
        <form className={`login-form ${activeForm === 'login' ? 'active' : ''}`}>
          <h2>Login</h2>
          <label htmlFor="lemail">Email</label>
          <input type="email" id="lemail" placeholder="person@email.com" />
          <label htmlFor="lpassword">Password</label>
          <input type="password" id="lpassword" placeholder="******" />
          <button type="button">Login</button>
        </form>

        <form className={`signup-form ${activeForm === 'signup' ? 'active' : ''}`}>
          <h2>Sign Up</h2>
          <label htmlFor="f-name">First Name</label>
          <input type="text" id="f-name" placeholder="First Name" />
          <label htmlFor="l-name">Last Name</label>
          <input type="text" id="l-name" placeholder="Last Name" />
          <label htmlFor="semail">Email</label>
          <input type="email" id="semail" placeholder="example@email.com" />
          <label htmlFor="spassword">Password</label>
          <input type="password" id="spassword" placeholder="******" />
          <button type="button">Sign up</button>
        </form>
      </div>
    </main>
  );
}

export default SlidingForm;
