import './App.css';
import { PersonalDetailsModal } from './components/personal_info_modal/personal_details_modal_container';
import { HeaderBar } from './components/header';
import { PropertyContainer } from './components/body/property/property_container';
import { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';

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
    start_date: dayjs(),
    end_date: "",
    price_per_person_per_night: 1000,
    occupancy_per_night: null,
    price_inc_vat: "",
    price_excl_vat: "",
    financial_info : {
      price_before_vat: null,
      vat_total: null,
      price_per_night: null,
      price_after_vat: null,
      price_per_person: null,
      can_enable_button: false,
      occupancy_per_night: null,
      number_of_nights: null
    }
  },
  {
    room_id: 2,
    number_of_rooms: 3,
    capacity_per_room: 2,
    start_date: dayjs(),
    end_date: "",
    price_per_person_per_night: 1500,
    occupancy_per_night: null,
    price_inc_vat: "",
    price_excl_vat: "",
    financial_info : {
      price_before_vat: null,
      vat_total: null,
      price_per_night: null,
      price_after_vat: null,
      price_per_person: null,
      can_enable_button: false,
      occupancy_per_night: null,
      number_of_nights: null
    },
  },
  {
    room_id: 3,
    number_of_rooms: 1,
    capacity_per_room: 4,
    start_date: dayjs(),
    end_date: "",
    price_per_person_per_night: 2000,
    occupancy_per_night: null,
    financial_info : {
      price_before_vat: null,
      vat_total: null,
      price_after_vat: null,
      price_per_person: null,
      can_enable_button: false,
      occupancy_per_night: null,
      number_of_nights: null
    },
  }])

  const handleUpdateAllRooms = useCallback((newRoom) => {
    setAllRooms((prevRooms) => {
      return prevRooms.map((room) => {
        if (room.room_id === newRoom.room_id) {
          return { ...room, ...newRoom };
        }
        return room;
      });
    });
  }, [setAllRooms, allRooms]);

  const getAllRooms = useCallback(() => {
    return allRooms;
  }, [allRooms])
  
  const getSpecificRoom = useCallback((roomId) => {
    return allRooms.find(room => room.room_id === roomId) || undefined
  }, [allRooms])

  useEffect(() => {
    // console.log(getSpecificBookingInfoAtttribute({roomId : 3, roomAttribute: 'price_after_vat'}))
  }, [allRooms])


  return (
    <div>
      <div className={`modal-wrapper ${isModalOpen ? '' : 'hidden'}`}>
        { isModalOpen && <PersonalDetailsModal bookingInformation = {'hello'} closeModal={closeModal}/>}
      </div>
      <div className={'app-body'}>
        <HeaderBar/>
        <PropertyContainer getSpecificRoom = {getSpecificRoom} handleUpdateAllRooms={handleUpdateAllRooms} getAllRooms = {getAllRooms} openModal={openModal}/>
      </div>
    </div>
  );
}

export default App;
