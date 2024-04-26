import React from 'react';
import '../styles/Password.css'; 

const InputComponent = () => {
  return (
    <div className="box">
      <div className="input_wrapper">
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Your Password"
          required
          className="input_field"
        />
        <label htmlFor="password" className="input_label">
          Password
        </label>
         
      </div>
    </div>
  );
};

export default InputComponent;
