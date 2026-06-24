import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

import './Register.css'

function Register() {
  return (
    <div className="register-container">
        <div className="registration-bg">
          <h1>Discover new things on Superapp</h1>
        </div>

        <RegistrationForm />
    </div>
  )
}

export default Register