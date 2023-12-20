import { useState } from 'react'
import { MuiTelInput } from 'mui-tel-input'
import { StyledPhoneNumberInput } from '../../styled_components/styled_text_field_modal'

export function PhoneNumberSelector() {
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleChange = (newValue) => {
        setPhoneNumber(newValue)
    }
  
    return (
        <div>
            <h4 className='modal-subheader'>Phone Number: </h4>
            <StyledPhoneNumberInput value={phoneNumber} onChange={handleChange} defaultCountry='ZA' />
        </div>
    )
}