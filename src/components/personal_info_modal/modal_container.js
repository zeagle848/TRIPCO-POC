import { FirstNameInput } from "./form_components/first_name"
import { LastNameInput } from "./form_components/last_name"
import { EmailInput } from "./form_components/email"
import { PhoneNumberSelector } from "./form_components/phone_number"
import { EstimatedArrivalTimeSelector } from "./form_components/estimated_arrival_time"
import { SpecialRequestInput } from "./form_components/special_request"
import { ConfirmBooking } from "./form_components/confirm_booking"

export function PersonalDetailsModal() {
    return(
        <div className="modal-root">
            <div className="modal-element" id="modal-header-container">
                <h1>PERSONAL DETAILS</h1>
            </div>
            <div className="modal-element" id="first-name-container">
                <FirstNameInput/>
            </div>
            <div className="modal-element" id="last-name-container">
                <LastNameInput/>
            </div>
            <div className="modal-element" id="email-container">
                <EmailInput/>
            </div>
            <div className="modal-element" id="phone-number-container">
                <PhoneNumberSelector/>
            </div>
            <div className="modal-element" id="eta-container">
                <EstimatedArrivalTimeSelector/>
            </div>
            <div className="modal-element" id="special-request-container">
                <SpecialRequestInput/>
            </div>
            <div className="modal-element" id="confirm-booking-container">
            <ConfirmBooking/>
            </div>            
        </div>
    )
}