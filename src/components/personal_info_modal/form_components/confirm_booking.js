import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const StyledButton = styled(Button)({
    height: '3rem',
    fontFamily: 'Roboto',
    fontWeight: '500'
});

const theme = createTheme({
    palette: {
      rustRed: {
        main: '#E78251',
        light: '#E78251',
        dark: '#E78251'
      },
    },
});


export function ConfirmBooking({isDisabled, confirmBookingInformation}) {
    const handleConfirmClick = () => {
        console.log(confirmBookingInformation)
    }
    return(
        <div>
            <ThemeProvider theme={theme}>
                <StyledButton onClick={handleConfirmClick} disabled = {isDisabled} variant="contained" color='rustRed'>CONFIRM BOOKING</StyledButton>
            </ThemeProvider>
        </div>
    )
}