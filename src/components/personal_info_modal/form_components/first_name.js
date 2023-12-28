import { StyledTextField } from '../../component_styles/text_field_modal_styles';
import { useState } from 'react';

export function FirstNameInput ({onChange}) {
    const [firstName, setFirstName] = useState('')
    return(
        <StyledTextField 
            variant='standard' 
            label='First Name' 
            onChange={(event) => {
                onChange(event.target.value)
                setFirstName(event.target.value)
            }}
            value={firstName}
            fullWidth
        />
    )
}