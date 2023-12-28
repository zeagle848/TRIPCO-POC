import { RoomItemContainer } from './room/room_item_container';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DATA_FROM_TRIPCO } from '../../../data';
import { useState, useCallback, useEffect } from 'react';


export function PropertyContainer({openModal, handleBookingInfoAddition, getSpecificBookingInfo, setAllRooms}){
  const rooms = DATA_FROM_TRIPCO.rooms
  
  return (
      <div className='property-container'>
          <div className='property-wrapper'>
              <h4 className='property-header'><ArrowBackIcon/>The Milner Hotel</h4>
              <div className='rooms-container'>
                  {rooms.map((room, index) =>  
                    <RoomItemContainer 
                    getSpecificBookingInfo = {getSpecificBookingInfo} 
                    handleBookingInfoAddition={handleBookingInfoAddition} 
                    room={room} 
                    isLastRoom={index===rooms.length-1} 
                    roomId={index + 1}
                    key={index}
                    openModal={openModal}/>)
                  }
              </div>
          </div>
      </div>
  )
}