import { DatePicker } from '@mui/x-date-pickers';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const StyledDatePicker = styled(DatePicker)({
    width: '11rem',
    transform: 'scale(0.7)',
    right: '1.65rem'
});

export function DateSelector({handleDateRangeSelection, handleBookingInfoAddition, roomId}){
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const onChangeHandlerStartSelector = (newValue) => {
      setStartDate(newValue);
    };
  
    const onChangeHandlerEndSelector = (newValue) => {
      setEndDate(newValue);
    };

    useEffect(() => {
        if (endDate && startDate) {
            const endDateDateFormatted = dayjs(endDate).startOf('day');
            const startDateFormatted = dayjs(startDate).startOf('day');
            const diffInDays = endDateDateFormatted.diff(startDateFormatted, 'day');
            handleBookingInfoAddition({bookingParameter: 'total_number_of_nights', value: diffInDays, roomId: roomId})
        }
    }, [endDate, startDate]);
  
    return(
        <div className='date-selector-container'>
            <div className='date-selector-element' id='from-date-selector'>
                <h5>
                    From:
                </h5>
                <StyledDatePicker 
                disablePast 
                value={startDate} 
                onChange = {(value)=>{
                    onChangeHandlerStartSelector(value)
                    handleDateRangeSelection({bookingParameter: 'start_date', value: value})
                }
                } 
                maxDate={endDate || undefined}/>
            </div>
            <div className='date-selector-element'>
                <h5>
                    To:
                </h5>
                <StyledDatePicker 
                disablePast
                minDate={startDate !== endDate ? startDate : ''} 
                onChange= {(value) =>{
                    onChangeHandlerEndSelector(value)
                    handleDateRangeSelection({bookingParameter: 'end_date', value: value})
                }
                }/>
            </div>
        </div>
    )
}