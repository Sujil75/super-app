import React from 'react'
import registrationbBg from '../../assets/registration-bg.png'

import './Register.css'

function Register() {
  return (
    <div className="register-container">
        <img 
          src={registrationbBg} 
          alt="Registration Background" 
          className="registration-bg"
        />
    </div>
  )
}

export default Register