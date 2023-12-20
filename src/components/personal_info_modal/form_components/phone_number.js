import { useState } from 'react'
import { MuiTelInput } from 'mui-tel-input'

export function PhoneNumberSelector() {
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleChange = (newValue) => {
        setPhoneNumber(newValue)
    }
  
    return <MuiTelInput value={phoneNumber} onChange={handleChange} defaultCountry='ZA'/>
}