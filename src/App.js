import './App.css';
import { DateSelector } from './components/body/property/room/booking_info/booking_info_components/date_selector';
import { OccupancySelector } from './components/body/property/room/booking_info/booking_info_components/occupancy_selector';
import { TotalPrice } from './components/body/property/room/checkout_info/checkout_info_components/total_price';
import { BookButton } from './components/body/property/room/checkout_info/checkout_info_components/book_button';

export function App() {
  
  return (
    <div>
        <BookButton/>
    </div>
  );
}

export default App;
