import { LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styled from '@emotion/styled';

const StyledTimePicker = styled(TimePicker)({
    width: '9.5rem'
});

export function EstimatedArrivalTimeSelector() {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <h3>Est. Arrival Time: </h3>
                <StyledTimePicker />
            </LocalizationProvider>
        </div>
    )
} 