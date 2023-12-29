import { DatePicker } from '@mui/x-date-pickers';
import { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const StyledDatePicker = styled(DatePicker)({
    width: '11rem',
    transform: 'scale(0.7)',
    right: '1.65rem'
});

export function DateSelector({handleFinancialChange, handleDateRangeSelection, getSpecificBookingInfoAtttribute, handleSingleAttributeAdditionAllRooms, roomId}){
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(null);
    
    const onChangeHandlerStartSelector = (newValue) => {
        setStartDate(newValue);
        handleSingleAttributeAdditionAllRooms({bookingParameter: 'start_date', value: newValue, roomId: roomId})
    };
    
    const onChangeHandlerEndSelector = (newValue) => {
        setEndDate(newValue);
        handleSingleAttributeAdditionAllRooms({bookingParameter: 'end_date', value: newValue, roomId: roomId})
    };

    const handleDateChange = useCallback((startDate, endDate) => {
        if (endDate && startDate) {
            const endDateDateFormatted = dayjs(endDate).startOf('day');
            const startDateFormatted = dayjs(startDate).startOf('day');
            const diffInDays = endDateDateFormatted.diff(startDateFormatted, 'day');
            handleSingleAttributeAdditionAllRooms({bookingParameter: 'number_of_nights', value: diffInDays, roomId: roomId})
            handleFinancialChange({numberOfNights: diffInDays, occupancyPerNight: getSpecificBookingInfoAtttribute('occupancy_per_night', roomId)})
        }
    }, [startDate, endDate])

    useEffect(() => {
        handleDateChange(startDate, endDate); 
    }, [startDate, endDate]);

    useEffect(() => {
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