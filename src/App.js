import './App.css';
import { PersonalDetailsModal } from './components/personal_info_modal/personal_details_modal_container';
import { HeaderBar } from './components/header';
import { PropertyContainer } from './components/body/property/property_container';
import { useState, useEffect, useCallback } from 'react';
import { Footer } from './components/footer';
import dayjs from 'dayjs';

export function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  
  const [modalContext, setModalContext] = useState({})
  
  const allRooms = [
    {
      room_id: 1,
      number_of_rooms: 2,
      capacity_per_room: 2,
      start_date: dayjs(),
      end_date: "",
      price_per_person_per_night: 1000,
      occupancy_per_night: 1,
      financial_info : {
        price_before_vat: null,
        vat_total: null,
        price_after_vat: null,
        can_enable_button: false,
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
    occupancy_per_night: 1,
    financial_info : {
      price_before_vat: null,
      vat_total: null,
      price_after_vat: null,
      can_enable_button: false,
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
    occupancy_per_night: 1,
    financial_info : {
      price_before_vat: null,
      vat_total: null,
      price_after_vat: null,
      can_enable_button: false,
      number_of_nights: null
    },
  }]

  const getSpecificRoom = (roomId) => {
    return allRooms.find(room => room.room_id === roomId) || undefined
  };
  
  const openModal = useCallback((currentRoom) => {
    setModalContext(currentRoom);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, [])
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
    setModalContext({})
  };
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isModalOpen && !event.target.closest('.modal-root') &&!event.target.closest('.MuiPopper-root')) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);
  
  
  
  const getModalContext = useCallback(() => {
    return modalContext;
  }, [modalContext])
  
  return (
    <div>
      <div className={`modal-wrapper ${isModalOpen ? '' : 'hidden'}`}>
        { isModalOpen && <PersonalDetailsModal modalContext = {getModalContext()} closeModal={closeModal}/>}
      </div>
      <div className={'app-body'}>
        <HeaderBar/>
        <PropertyContainer getSpecificRoom = {getSpecificRoom} openModal={openModal}/>
        <Footer/>
      </div>
    </div>
  );
};


export default App;
