import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';

const StyledButton = styled(Button)({
    height: '2rem',
    fontFamily: 'Roboto',
    fontWeight: '500',
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

export function BookButton({openModal, isButtonDisabled, getCurrentRoom}) {
    const handleBookNowButtonClick = () => {
        openModal(getCurrentRoom);
    }
    return(
        <div>
            <ThemeProvider theme={theme}>
                <StyledButton disabled={isButtonDisabled()} variant="contained" color="rustRed" onClick={handleBookNowButtonClick}>BOOK NOW</StyledButton>
            </ThemeProvider>
        </div>
    )
}