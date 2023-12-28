import './App.css';
import { PersonalDetailsModal } from './components/personal_info_modal/personal_details_modal_container';
import { HeaderBar } from './components/header';
import { PropertyContainer } from './components/body/property/property_container';
import { useState, useEffect, useCallback } from 'react';

export function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  
  const handleOutsideClick = (event) => {
    if (isModalOpen && !event.target.closest('.modal-root') &&!event.target.closest('.MuiPopper-root')) {
      closeModal();
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);

  
  const [allRooms, setAllRooms] = useState([{
    room_id: 1,
    number_of_rooms: 2,
    capacity_per_room: 2,
    start_date: "",
    end_date: "",
    price_per_person_per_night: 1000,
    occupancy_per_night: null,
    price_inc_vat: "",
    price_excl_vat: "",
    vat_total: "",
    total_number_of_nights: null
  },
  {
    room_id: 2,
    number_of_rooms: 3,
    capacity_per_room: 2,
    start_date: "",
    end_date: "",
    price_per_person_per_night: 1500,
    occupancy_per_night: null,
    price_inc_vat: "",
    price_excl_vat: "",
    vat_total: "",
    total_number_of_nights: null
  },
  {
    room_id: 3,
    number_of_rooms: 1,
    capacity_per_room: 4,
    start_date: "",
    end_date: "",
    price_per_person_per_night: 2000,
    occupancy_per_night: null,
    price_inc_vat: "",
    price_excl_vat: "",
    vat_total: "",
    total_number_of_nights: null
  }])
  
  useEffect(() => {
    console.log(allRooms)
  }, [allRooms])
  
  const getSpecificBookingInfo = useCallback((roomId) => {
    return allRooms.find(room => room.room_id === roomId)
  }, [allRooms]);
  
  const handleBookingInfoAddition = useCallback(({bookingParameter, value, roomId}) => {
    if(getSpecificBookingInfo(roomId)){
      const updatedRooms = allRooms.map((booking) => {
        return booking.room_id === roomId ? { ...booking, [bookingParameter]: value } : booking
      }
      );
      setAllRooms(updatedRooms)
    }else {
      const updatedRooms = allRooms.map((booking) => {
        return [...allRooms, {[bookingParameter]: value, room_id: roomId}];
      }
      );
      setAllRooms(updatedRooms)
    }
  }, [getSpecificBookingInfo, setAllRooms]);

  return (
    <div>
      <div className={`modal-wrapper ${isModalOpen ? '' : 'hidden'}`}>
        { isModalOpen && <PersonalDetailsModal bookingInformation = {'hello'} closeModal={closeModal}/>}
      </div>
      <div className={'app-body'}>
        <HeaderBar/>
        <PropertyContainer setAllRooms={setAllRooms} getSpecificBookingInfo = {getSpecificBookingInfo} handleBookingInfoAddition = { handleBookingInfoAddition } allRooms = {allRooms} openModal={openModal}/>
      </div>
    </div>
  );
}

export default App;
