import './App.css';
import { DateSelector } from './components/body/property/room/booking_info/booking_info_components/date_selector';
import { OccupancySelector } from './components/body/property/room/booking_info/booking_info_components/occupancy_selector';
import { TotalPrice } from './components/body/property/room/checkout_info/checkout_info_components/total_price';
import { BookButton } from './components/body/property/room/checkout_info/checkout_info_components/book_button';
import { BedTypes } from './components/body/property/room/room_info/room_info_components/bed_types';
import { NumberOfRooms } from './components/body/property/room/room_info/room_info_components/number_of_rooms';
import { PeoplePerRoom } from './components/body/property/room/room_info/room_info_components/people_per_room';
import { PricePerRoom } from './components/body/property/room/room_info/room_info_components/price_per_room';
import { Gallery } from './components/body/property/room/gallery';
import { ConfirmBooking } from './components/personal_info_modal/form_components/confirm_booking';
import { EmailInput } from './components/personal_info_modal/form_components/email';
import { EstimatedArrivalTimeSelector } from './components/personal_info_modal/form_components/estimated_arrival_time';
import { PhoneNumberSelector } from './components/personal_info_modal/form_components/phone_number';
import { FirstNameInput } from './components/personal_info_modal/form_components/first_name';
import { LastNameInput } from './components/personal_info_modal/form_components/last_name';
import { SpecialRequestInput } from './components/personal_info_modal/form_components/special_request';

export function App() {

  return (
    <div>
        <SpecialRequestInput/>
    </div>
  );
}

export default App;
