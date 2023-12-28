import { DatePicker } from '@mui/x-date-pickers';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const StyledDatePicker = styled(DatePicker)({
    width: '11rem',
    transform: 'scale(0.7)',
    right: '1.65rem'
});

export function DateSelector({setNumberOfNights}){
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(null);
    const [differenceInDays, setDifferenceInDays] = useState(null);

    const onChangeHandlerStartSelector = (newValue) => {
      setStartDate(newValue);
    };
  
    const onChangeHandlerEndSelector = (newValue) => {
      setEndDate(newValue);
    };
  
    useEffect(() => {
    const setNewNumberOfNights = () => {
      if (endDate && startDate) {
        const endDateDateFormatted = dayjs(endDate).startOf('day');
        const startDateFormatted = dayjs(startDate).startOf('day');
        const diffInDays = endDateDateFormatted.diff(startDateFormatted, 'day');
        setDifferenceInDays(diffInDays);
      }
    };
    setNewNumberOfNights();
  }, [endDate, startDate]);
  
    useEffect(() => {
      console.log(differenceInDays);
    }, [differenceInDays]);
    
    return(
        <div className='date-selector-container'>
            <div className='date-selector-element' id='from-date-selector'>
                <h5>
                    From:
                </h5>
                <StyledDatePicker disablePast value={startDate || undefined} onChange={onChangeHandlerStartSelector}/>
            </div>
            <div className='date-selector-element'>
                <h5>
                    To:
                </h5>
                <StyledDatePicker disablePast value={endDate} onChange={onChangeHandlerEndSelector}/>
            </div>
        </div>
    )
}