import TextField from '@mui/material/TextField';
import { useState } from 'react';
import styled from '@emotion/styled';
import { StyledTextField } from '../../styled_components/styled_text_field_modal';

export function LastNameInput () {
    return(
        <StyledTextField 
            variant='standard' 
            label='Last Name' 
            fullWidth 
        />
    )
}