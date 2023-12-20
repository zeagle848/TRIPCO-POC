import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styled from '@emotion/styled';
import { StyledTimePicker } from '../../styled_components/styled_text_field_modal';

export function EstimatedArrivalTimeSelector() {
    return (
        <div>
            <h4 className='modal-subheader'>Est. Arrival Time: </h4>
            <StyledTimePicker />
        </div>
    )
} 