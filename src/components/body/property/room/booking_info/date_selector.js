import { DatePicker } from '@mui/x-date-pickers';
import { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const StyledDatePicker = styled(DatePicker)({
    width: '11rem',
    transform: 'scale(0.7)',
    right: '1.65rem'
});

export function DateSelector({handleFinancialChange, setCurrentRoomAttribute, getCurrentRoomAttribute}){
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(null);

    const onChangeHandlerStartSelector = (newValue) => {
        setStartDate(newValue);
        setCurrentRoomAttribute({attributeToChange: 'start_date', value: newValue})
    };

    const onChangeHandlerEndSelector = (newValue) => {
        setEndDate(newValue);
        setCurrentRoomAttribute({attributeToChange: 'end_date', value: newValue})
    };

    const handleDateChange = useCallback((startDate, endDate) => {
        if (endDate && startDate) {
            const endDateDateFormatted = dayjs(endDate).startOf('day');
            const startDateFormatted = dayjs(startDate).startOf('day');
            const diffInDays = endDateDateFormatted.diff(startDateFormatted, 'day');
            setCurrentRoomAttribute({attributeToChange: 'number_of_nights', value: diffInDays})
            handleFinancialChange({numberOfNights: diffInDays, occupancyPerNight: getCurrentRoomAttribute('occupancy_per_night')})
        }
    }, [startDate, endDate, setCurrentRoomAttribute, handleFinancialChange])

  
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
                    handleDateChange(getCurrentRoomAttribute('start_date'), getCurrentRoomAttribute('end_date'))
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
                    handleDateChange(getCurrentRoomAttribute('start_date'), getCurrentRoomAttribute('end_date'))
                }
                }/>
            </div>
        </div>
    )
}