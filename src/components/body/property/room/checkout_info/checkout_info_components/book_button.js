import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

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

export function BookButton() {
    return(
        <div>
            <ThemeProvider theme={theme}>
                <StyledButton variant="contained" color="rustRed">BOOK NOW</StyledButton>
            </ThemeProvider>
        </div>
    )
}