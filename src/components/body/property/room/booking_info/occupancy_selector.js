import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import { convertIntToWord } from '../../../../../utils/utils';
import { useState } from 'react';

const StyledSelect = styled(Select)({
    width: 'index+130px',
    height: '40px',
    fontSize: '1rem'
  });

export function OccupancySelector({getSpecificBookingInfo, capacity, handleBookingInfoAddition, handleFinancialChange, roomId}){
    const [selectedOccupancy, setSelectedOccupancy] = useState(1)
    return(
        <div className='occupancy-container'>
            <h5>Occupancy:</h5>
            <StyledSelect
            label="Occupancy"
            className='occupancy-selector'
            value={selectedOccupancy}
            displayEmpty
            onChange={(event) => {
                setSelectedOccupancy(event.target.value)
                handleBookingInfoAddition({bookingParameter: 'occupancy_per_night', value: event.target.value, roomId})
                handleFinancialChange(getSpecificBookingInfo(roomId))
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