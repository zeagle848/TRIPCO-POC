import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const StyledButton = styled(Button)({
    height: '3rem',
    fontFamily: 'Roboto',
    fontWeight: '500',
    backgroundColor: '#579CDC'
});

export function ConfirmBooking() {
    return(
        <div>
            <StyledButton variant="contained">CONFIRM BOOKING</StyledButton>
        </div>
    )
}