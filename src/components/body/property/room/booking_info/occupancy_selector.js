import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import { convertIntToWord } from '../../../../../utils/utils';
import { useState, useEffect } from 'react';

const StyledSelect = styled(Select)({
    width: 'index+130px',
    height: '40px',
    fontSize: '1rem'
  });

export function OccupancySelector({
    capacity, 
    setOccupancy,
    setFinancialInformation
}){
    const [selectedOccupancy, setSelectedOccupancy] = useState(1)

    const onChangeHandlerOccupancy = (newValue) => {
        setSelectedOccupancy(newValue)
        setOccupancy(newValue)
    };

    useEffect(() => {
        setFinancialInformation();
    }, [setOccupancy, setFinancialInformation]);
    
    return(
        <div className='occupancy-container'>
            <h5>Occupancy:</h5>
            <StyledSelect
            label="Occupancy"
            className='occupancy-selector'
            value={selectedOccupancy}
            displayEmpty
            onChange={(event) => {
                onChangeHandlerOccupancy(event.target.value)
            }}
            >
            {Array(capacity).fill().map((_, index) => (
                <MenuItem key={index+1}value={index+1}>
                    {convertIntToWord(index+1)}
                </MenuItem>
            ))}
            </StyledSelect>
        </div>
    )
}