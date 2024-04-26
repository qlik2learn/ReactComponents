import React from 'react';
import '../styles/OTPVerification.css'; 

class OTPVerificationForm extends React.Component {
  render() {
    return (
      <form action="" className="form">
        <div className="content">
          <p align="center">OTP Verification</p>
          <div className="inp">
            <input type="text" className="input" maxLength="1" />
            <input type="text" className="input" maxLength="1" />
            <input type="text" className="input" maxLength="1" />
            <input type="text" className="input" maxLength="1" />
          </div>
          <button>Verify</button>
        </div>
      </form>
    );
  }
}

export default OTPVerificationForm;
