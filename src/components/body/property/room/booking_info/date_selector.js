import { DatePicker } from '@mui/x-date-pickers';
import { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

const StyledDatePicker = styled(DatePicker)({
    width: '11rem',
    transform: 'scale(0.7)',
    right: '1.65rem'
});

export function DateSelector({ 
    setCurrentRoomAttribute, 
    getCurrentRoomAttribute, 
    setNumberOfNights, 
    setFinancialInformation}){
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
            setNumberOfNights(diffInDays);
        }
    }, [setCurrentRoomAttribute])
    
    useEffect(() => {
        handleDateChange(getCurrentRoomAttribute('start_date'), getCurrentRoomAttribute('end_date'))
    }, [startDate, endDate])

    useEffect(() => {
        setFinancialInformation();
    }, [setNumberOfNights, setFinancialInformation]);
  
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
                }
                }/>
            </div>
        </div>
    )
}