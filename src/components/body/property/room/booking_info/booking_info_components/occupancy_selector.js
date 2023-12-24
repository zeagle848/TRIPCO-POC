import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import { convertIntToWord } from '../../../../../../helpers/int_to_word';

const StyledSelect = styled(Select)({
    width: 'index+130px',
    height: '40px',
    fontSize: '1rem'
  });

export function OccupancySelector({capacity}){
    return(
        <div className='occupancy-container'>
            <h5>Occupancy:</h5>
            <StyledSelect
            label="Occupancy"
            className='occupancy-selector'
            value={1}
            displayEmpty
            >
                {Array(capacity).fill().map((_, index) => (
                    <MenuItem value={index+1}>{convertIntToWord(index+1)}</MenuItem>
                ))}
            </StyledSelect>
        </div>
    )
}