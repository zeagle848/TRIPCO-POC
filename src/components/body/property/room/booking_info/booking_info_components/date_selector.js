import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const StyledDatePicker = styled(DatePicker)({
    width: '11rem',
    transform: 'scale(0.7)',
    right: '1.65rem'
});

export function DateSelector(){
    const [minDate, setMinDate] = useState(dayjs());
    const [maxDate, setMaxDate] = useState(null);
    
    return(
        <div className='date-selector-container'>
            <div className='date-selector-element'>
                <h5>
                    To:
                </h5>
                <StyledDatePicker disablePast maxDate={maxDate || undefined} onChange={(newValue) => setMinDate(newValue)}/>
            </div>
            <div className='date-selector-element'>
                <h5>
                    From Date:
                </h5>
                <StyledDatePicker disablePast minDate={minDate} onChange={(newValue) => setMaxDate(newValue)}/>
            </div>
        </div>
    )
}