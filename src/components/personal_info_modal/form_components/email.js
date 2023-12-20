import TextField from '@mui/material/TextField';
import { useState } from 'react';
import styled from '@emotion/styled';
import { StyledEmailTextField } from '../../styled_components/styled_text_field_modal';

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
            <StyledEmailTextField 
            variant='standard' 
            label='Email' 
            fullWidth 
            value={email} 
            onChange={handleEmailChange}
            />
            <StyledEmailTextField 
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
    )
}