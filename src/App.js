import './App.css';
import { DateSelector } from './components/body/property/room/booking_info/booking_info_components/date_selector';
import { OccupancySelector } from './components/body/property/room/booking_info/booking_info_components/occupancy_selector';
import { TotalPrice } from './components/body/property/room/checkout_info/checkout_info_components/total_price';

export function App() {

  return (
    <div>
        <TotalPrice/>
    </div>
  );
}

export default App;
