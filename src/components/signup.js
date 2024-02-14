import React from 'react';
import './signup.css'; 

const Signup = () => {
    return (
      
        <div className="signup-container">
          <h2>Sign Up</h2>
          <div className="signup-form">
            <input type="text" placeholder="Name"  />
            <input type="email" placeholder="Email"  />
            <input type="password" placeholder="Password" />
            <input type="tel" placeholder="Phone Number"  />
            <button >Sign Up</button>
          </div>
        </div>
      
        
      );
    };
    
    export default Signup;