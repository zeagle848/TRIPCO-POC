import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import dayjs from 'dayjs';

export function DateSelector(){
    const [minDate, setMinDate] = useState(dayjs());
    const [maxDate, setMaxDate] = useState(null);
    
    return(
        <div className='date-selector-container'>
            <div className='date-selector-element'>
                <h3>
                    To Date:
                </h3>
                <DatePicker disablePast maxDate={maxDate || undefined} onChange={(newValue) => setMinDate(newValue)}/>
            </div>
            <div className='date-selector-element'>
                <h3>
                    From Date:
                </h3>
                <DatePicker disablePast minDate={minDate} onChange={(newValue) => setMaxDate(newValue)}/>
            </div>
        </div>
    )
}