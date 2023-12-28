import TextField from '@mui/material/TextField';
import { useState } from 'react';

export function EmailInput({onEmailChange, onConfirmEmailChange}) {
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
            <TextField 
            variant='standard' 
            label='Email' 
            fullWidth 
            onChange={(event) => {
                handleEmailChange(event)
                onEmailChange(event.target.value)
            }}
            />
            <TextField 
            variant='standard' 
            label='Confirm Email' 
            id='confirm-email-input' 
            onChange={(event) => {
                handleConfirmEmailChange(event)
                onConfirmEmailChange(event.target.value)
            }} 
            fullWidth 
            error={emailError} 
            helperText={emailError ? 'Emails must match.' : ''}
            />
        </div>
    )
}