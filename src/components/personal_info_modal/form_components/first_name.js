import TextField from '@mui/material/TextField';
import { useState } from 'react';
import styled from '@emotion/styled';

const StyledTextField = styled(TextField)({
    width: '15rem'
});

export function FirstNameInput () {
    return(
        <StyledTextField 
            variant='standard' 
            label='First Name' 
            fullWidth 
        />
    )
}