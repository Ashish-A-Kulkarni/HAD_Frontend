import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const OTPFetch=({setOtp})=>{
    const [ otp, setauthcode] = useState('')

    // onSubmit event handler of this form
    const handleauthcode= (event) => {
        // Preventing default submission of the form to the action attribute URL
        event.preventDefault()


        const authcode = otp

        setOtp(authcode)

        setauthcode('')
    }
    return(
        <div>
            <form onSubmit={handleauthcode} authcode='otp'>
            <div className="form-group row">
                    <label for="authcode" className="offset-md-1 col-md-2 col-form-label">Enter OTP</label>
                    <div className="col-md-6">
                        <input className="form-control" type="text" name='otp' id='otp' placeholder='OTP' value={otp} onChange={event => setauthcode(event.target.value)} required/>
                    </div>
                    <div className="col-md-1 col-lg-2">
                        <button className="btn btn-primary form-control">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default OTPFetch