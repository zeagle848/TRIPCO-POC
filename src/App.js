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
import { PersonalDetailsModal } from './components/personal_info_modal/modal_container';

export function App() {

  return (
    <div >
      <div className='modal-wrapper'>
        <PersonalDetailsModal/>
      </div>
    </div>
  );
}

export default App;
