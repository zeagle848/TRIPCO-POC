import './App.css';
import { PersonalDetailsModal } from './components/personal_info_modal/personal_details_modal_container';
import { HeaderBar } from './components/header';
import { PropertyContainer } from './components/body/property/property_container';
import { useState, useEffect } from 'react';

export function App() {
  const [isModalOpen, setModalOpen] = useState(true);

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

  const [bookingInfo, setBookingInfo] = useState({
    occupancyPerNigt: undefined,
    roomID: '',
    numberOfNights: undefined,
    fromData: '',
    toDate: '',
    priceIncVat: '',
    priceExclVAT: '',
    vatTotal: ''
  })

  return (
    <div>
      <div className={`modal-wrapper ${isModalOpen ? '' : 'hidden'}`}>
        { isModalOpen && <PersonalDetailsModal bookingInformation = {'hello'} closeModal={closeModal}/>}
      </div>
      <div className={'app-body'}>
        <HeaderBar/>
        <PropertyContainer bookingInfo = {bookingInfo} openModal={openModal}/>
      </div>
    </div>
  );
}

export default App;
