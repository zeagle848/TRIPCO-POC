import TextField from '@mui/material/TextField';
import { useState } from 'react';
import styled from '@emotion/styled';
import { StyledTextField } from '../../styled_components/styled_text_field_modal';

export function FirstNameInput () {
    return(
        <StyledTextField 
            variant='standard' 
            label='First Name' 
            fullWidth 
        />
    )
}