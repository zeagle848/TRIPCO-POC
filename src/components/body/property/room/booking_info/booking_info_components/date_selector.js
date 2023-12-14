import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export function DateSelector(){
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
                <div>
                    <DatePicker />
                </div>
                <div>
                    <DatePicker />
                </div>
            </div>
        </LocalizationProvider>
    )
}