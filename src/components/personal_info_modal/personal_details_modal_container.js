import React, { useState, useCallback } from "react";
import { FirstNameInput } from "./form_components/first_name";
import { LastNameInput } from "./form_components/last_name";
import { EmailInput } from "./form_components/email";
import { PhoneNumberSelector } from "./form_components/phone_number";
import { EstimatedArrivalTimeSelector } from "./form_components/estimated_arrival_time";
import { SpecialRequestInput } from "./form_components/special_request";
import { ConfirmBooking } from "./form_components/confirm_booking";

export function PersonalDetailsModal({ closeModal, modalContext }) {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phoneNumber: "",
    eta: "",
    specialRequest: "",
  });

  const handleFormChange = useCallback((formComponent, value) => {
    setPersonalDetails((prevDetails) => ({
      ...prevDetails,
      [formComponent]: value,
    }));
  }, []);

    
  const isFormValid = Object.values(personalDetails).every((value) => value !== "");

  return (
    <div className="modal-root">
      <div className="close-modal-button" onClick={closeModal}>
        X
      </div>
      <div className="modal-element" id="modal-header-container">
        <h1>PERSONAL DETAILS</h1>
      </div>
      <div className="modal-element" id="first-name-container">
        <FirstNameInput onChange={(value) => handleFormChange("firstName", value)} />
      </div>
      <div className="modal-element" id="last-name-container">
        <LastNameInput onChange={(value) => handleFormChange("lastName", value)} />
      </div>
      <div className="modal-element" id="email-container">
        <EmailInput onEmailChange={(value) => handleFormChange("email", value)} onConfirmEmailChange={(value) => handleFormChange("confirmEmail", value)} />
      </div>
      <div className="modal-element" id="phone-number-container">
        <PhoneNumberSelector onChange={(value) => handleFormChange("phoneNumber", value)} />
      </div>
      <div className="modal-element" id="eta-container">
        <EstimatedArrivalTimeSelector onChange={(value) => handleFormChange("eta", value)} />
      </div>
      <div className="modal-element" id="special-request-container">
        <SpecialRequestInput onChange={(value) => handleFormChange("specialRequest", value)} />
      </div>
      <div className="modal-element" id="confirm-booking-container">
        <ConfirmBooking isDisabled = {!isFormValid} confirmBookingInformation = {{...modalContext, personalDetails: personalDetails}} />
      </div>
    </div>
  );
}