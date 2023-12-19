import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const StyledButton = styled(Button)({
    height: '2rem',
    fontFamily: 'Roboto',
    fontWeight: '500',
    backgroundColor: '#579CDC'
});

export function BookButton() {
    return(
        <div>
            <StyledButton variant="contained">BOOK NOW</StyledButton>
        </div>
    )
}