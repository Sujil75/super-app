import {useState, useEffect} from 'react'

import './RegistrationForm.css'

function RegistrationForm() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [isChecked, setIsChecked] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
        if (!errMsg) return

        const timer = setTimeout(() => {
            setErrMsg("")
        }, 5000)

        return () => clearTimeout(timer)
    }, [errMsg])

    function onFormSubmission(e) {
        e.preventDefault();

        const data = {
            name: name.trim(),
            username: username.trim(),
            email: email.trim(),
            mobile: mobile.trim()
        };

        const newErr = {}

        if (!data.name) newErr.name = "Field is required"
        if (!data.username) newErr.username = "Field is required"
        if (!data.email) newErr.email = "Field is required"
        if (!data.mobile) newErr.mobile = "Field is required"

        if (!isChecked) newErr.checkbox = "Check the box if you want to proceed"
        
        setErrMsg(newErr)

        if (Object.keys(newErr).length > 0) return

        console.log(data);
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
                    <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                    {errMsg.name && <p>{errMsg.name}</p>}
                </div>
                <div className='form-container'>
                    <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
                    {errMsg.username && <p>{errMsg.username}</p>}
                </div>
                <div className='form-container'>
                    <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    {errMsg.email && <p>{errMsg.email}</p>}
                </div>
                <div className='form-container'>
                    <input type='text' placeholder='Mobile' value={mobile} onChange={e => setMobile(e.target.value)} />
                    {errMsg.mobile && <p>{errMsg.mobile}</p>}
                </div>
                
                <div className='checkbox-container'>
                    <div className='checkbox-main-container'>
                        <input id='consent-check' type='checkbox' checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
                        <label htmlFor='consent-check'>
                            Share my registration data with Superapp
                        </label>
                    </div>
                    {errMsg.checkbox && <p>{errMsg.checkbox}</p>}
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