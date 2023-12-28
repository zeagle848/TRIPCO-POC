import { useState } from 'react';
import { StyledTextField } from '../../component_styles/text_field_modal_styles';

export function SpecialRequestInput ({onChange}) {
    const [specialRequest, setSpecialRequest] = useState('')
    return(
        <StyledTextField 
            label="Special Request"
            multiline
            fullWidth
            rows={4}
            variant='standard'
            value={specialRequest}
            onChange={(event) => {
                setSpecialRequest(event.target.value)
                onChange(event.target.value)
            }}
        />
    )
}