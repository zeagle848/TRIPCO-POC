import { useState } from 'react';
import { StyledTextField } from '../../styled_components/styled_text_field_modal';

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