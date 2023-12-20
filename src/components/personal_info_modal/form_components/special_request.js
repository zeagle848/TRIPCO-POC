import TextField from '@mui/material/TextField';
import { useState } from 'react';
import styled from '@emotion/styled';

const StyledTextField = styled(TextField)({
    width: '30rem'
});

export function SpecialRequestInput () {
    return(
        <StyledTextField 
            label="Special Request"
            multiline
            fullWidth
            rows={4}
            variant='standard'
        />
    )
}