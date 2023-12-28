import { StyledTimePicker } from '../../component_styles/text_field_modal_styles';
import { useState } from 'react';

export function EstimatedArrivalTimeSelector({onChange}) {
    const [value, setValue] = useState(null);
    return (
        <div>
            <h4 className='modal-subheader'>Est. Arrival Time: </h4>
            <StyledTimePicker value = {value} onChange={(newValue) => {
                setValue(newValue)
                onChange(newValue)
            }}/>
        </div>
    )
} 