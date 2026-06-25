import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import { useStore } from '../../store/useStore'
import './RegistrationForm.css'

function RegistrationForm() {
    const setUser = useStore(state => state.setUser)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "KK Vinay",
        username: "vinay060",
        email: "Vinay090@gmail.com",
        mobile: "0123456789",
        isCheck: true
    })
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
        if (!errMsg) return

        const timer = setTimeout(() => {
            setErrMsg("")
        }, 5000)

        return () => clearTimeout(timer)
    }, [errMsg])

    const formValidation = () => {
        const error = {}
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phonePattern = /^\d{10}$/

        if (!formData.name.trim()) error.name = "Name field cannot be left blank."
        if (!formData.username.trim()) error.username = "Username field cannot be left blank."
        if (!emailPattern.test(formData.email)) error.email = "Please input a valid email formatting schema."
        if (!phonePattern.test(formData.mobile)) error.mobile = "Mobile field must encompass exactly 10 digital characters."
        if (!formData.isCheck) error.isCheck = "Check this box if you want to proceed"

        setErrMsg(error)

        return Object.keys(error).length === 0
    }

    function onFormSubmission(e) {
        e.preventDefault();
        if (formValidation()) {
            setUser(formData)
            navigate('categories')
        }
    }

    return (
    <section className='registration-form-container'>
        <div className='registration-main-container'>
            <div className='form-heading-container'>
                <h1>Super app</h1>
                <p>Create your new account</p>
            </div>

            <form onSubmit={e => onFormSubmission(e)}>
                <div className='form-container'>
                    <input 
                            type='text' 
                            placeholder='Name' 
                            value={formData.name} 
                            onChange={e => setFormData({...formData, name: e.target.value})} 
                        />
                    {errMsg.name && <p>{errMsg.name}</p>}
                </div>
                <div className='form-container'>
                    <input 
                        type='text' 
                        placeholder='Username' 
                        value={formData.username} 
                        onChange={e => setFormData({...formData, username: e.target.value})} 
                    />
                    {errMsg.username && <p>{errMsg.username}</p>}
                </div>
                <div className='form-container'>
                    <input 
                        type='text' 
                        placeholder='Email' 
                        value={formData.email} 
                        onChange={e => setFormData({...formData, email: e.target.value})} 
                    />
                    {errMsg.email && <p>{errMsg.email}</p>}
                </div>
                <div className='form-container'>
                    <input 
                        type='text' 
                        placeholder='Mobile' 
                        value={formData.mobile} 
                        onChange={e => setFormData({...formData, mobile: e.target.value})} 
                    />
                    {errMsg.mobile && <p>{errMsg.mobile}</p>}
                </div>
                
                <div className='checkbox-container'>
                    <div className='checkbox-main-container'>
                        <input 
                            id='consent-check' 
                            type='checkbox' 
                            checked={formData.isCheck} 
                            onChange={e => setFormData({...formData, isCheck: e.target.checked})} 
                        />
                        <label htmlFor='consent-check'>
                            Share my registration data with Superapp
                        </label>
                    </div>
                    {errMsg.isCheck && <p>{errMsg.isCheck}</p>}
                </div>

                <button type='submit'>SIGN UP</button>
            </form>

            <div className='consent-container'>
                <p>
                    By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span>
                </p>

                <p>
                    To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span>
                </p>
            </div>
        </div>
    </section>
    )
}

export default RegistrationForm