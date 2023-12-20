import TextField from '@mui/material/TextField';
import { useState } from 'react';

export function EmailInput() {
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError(event.target.value !== confirmEmail)
    }

    const handleConfirmEmailChange = (event) => {
        setConfirmEmail(event.target.value);
        setEmailError(event.target.value !== email)
    }
    return(
        <div className='email-inputs-container'>
            <div className="email-input-item" id='email-input'>
                <TextField 
                variant='standard' 
                label='Email' 
                fullWidth 
                value={email} 
                onChange={handleEmailChange}
                />
            </div>
            <div id='confirm-email-input' className="email-input-item">
                <TextField 
                variant='standard' 
                label='Confirm Email' 
                id='confirm-email-input' 
                value={confirmEmail} 
                onChange={handleConfirmEmailChange} 
                fullWidth 
                error={emailError} 
                helperText={emailError ? 'Emails must match.' : ''}
                />
            </div>
        </div>
    )
}