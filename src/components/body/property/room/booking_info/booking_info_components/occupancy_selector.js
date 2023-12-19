import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';

const StyledInputLabel = styled(InputLabel)({
    fontSize: '19px', 
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '1rem'
});

const StyledSelect = styled(Select)({
    width: '130px',
    height: '40px'
  });

export function OccupancySelector(){
    return(
        <div>
            <StyledInputLabel className='occupancy-label'>Occupancy:</StyledInputLabel>
            <StyledSelect
            label="Occupancy"
            className='occupancy-selector'
            value={1}
            displayEmpty
            >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
            </StyledSelect>
        </div>
    )
}