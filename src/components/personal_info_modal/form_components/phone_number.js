import { useState } from 'react'
import { MuiTelInput } from 'mui-tel-input'

export function PhoneNumberSelector({onChange}) {
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleChange = (newValue) => {
        setPhoneNumber(newValue)
        onChange(newValue)
    }
  
    return (
        <div>
            <h4 className='modal-subheader'>Phone Number: </h4>
            <MuiTelInput value={phoneNumber} onChange={handleChange} defaultCountry='ZA' />
        </div>
    )
}