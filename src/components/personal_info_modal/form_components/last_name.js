import { useState } from 'react';
import { StyledTextField } from '../../component_styles/text_field_modal_styles';

export function LastNameInput ({onChange}) {
    const [firstName, setfirstName] = useState('');
    return(
        <StyledTextField 
            variant='standard' 
            label='Last Name'
            fullWidth 
            value={firstName}
            onChange={(event) => {
                setfirstName(event.target.value)
                onChange(event.target.value)
            }}
        />
    )
}