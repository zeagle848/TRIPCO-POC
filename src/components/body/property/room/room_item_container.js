import { DateSelector } from "./booking_info/date_selector"
import { OccupancySelector } from "./booking_info/occupancy_selector"
import { TotalPrice } from "./checkout_info_components/total_price"
import { BookButton } from "./checkout_info_components/book_button"
import { RoomType } from "./room_info_components/room_type"
import { BedTypes } from "./room_info_components/bed_types"
import { NumberOfRooms } from "./room_info_components/number_of_rooms"
import { PeoplePerRoom } from "./room_info_components/people_per_room"
import { PricePerRoom } from "./room_info_components/price_per_room"
import { Gallery } from "./room_info_components/gallery"
import { useState, useCallback, useEffect } from "react"

export function RoomItemContainer({getAllRooms, getSpecificRoom, handleUpdateAllRooms, room, isLastRoom, roomId, openModal}, key) {

    const [currentRoom, setCurrentRoom] = useState(getSpecificRoom(roomId))

    const getCurrentRoom = useCallback(() => {
        return currentRoom;
    }, [currentRoom])

    const setCurrentRoomAttribute = useCallback(({attributeToChange, value}) => {
        setCurrentRoom((prevState) => {
            return {...prevState, [attributeToChange]: value}
        })
    }, [])
    
    const getCurrentRoomAttribute = useCallback((attribute) => {
        let value = currentRoom[attribute];
        if(!value){
            value = currentRoom.financial_info[attribute]
        }
        return value || undefined
    }, [currentRoom])
    
    
    const handleFinancialChange = useCallback(({numberOfNights, occupancyPerNight}) => {
        const pricePerPerson = getCurrentRoomAttribute('price_per_person_per_night')
        const occupancePerNight = occupancyPerNight
        const priceBeforeVat = pricePerPerson * numberOfNights * occupancePerNight
        const vat = priceBeforeVat * 0.15
        const price_after_vat = priceBeforeVat + vat;
        const newFinancialObject = {
            ...getCurrentRoomAttribute('financial_info'), 
            price_before_vat: priceBeforeVat, 
            vat: vat, 
            price_after_vat: price_after_vat, 
            can_show_button: priceBeforeVat < 0 && numberOfNights < 0, 
            price_per_person: pricePerPerson
        }
        
        setCurrentRoomAttribute({attributeToChange: 'financial_info', newFinancialObject})
    }, [currentRoom])

    const getFinancialInfo = useCallback(() => {
        return currentRoom.financial_info
    }, [currentRoom])
    
    const isButtonDisabled = useCallback(() =>{
        const priceBeforeVat = getCurrentRoomAttribute('price_before_vat')
        const numberOfNights = getCurrentRoomAttribute('number_of_nights')
        return priceBeforeVat < 0 && numberOfNights < 0
    }, [currentRoom, handleFinancialChange, setCurrentRoomAttribute])
    
    return (
        <div className={isLastRoom ? "room-item-container last-room" : "room-item-container"}>
        <h3 className="room-header">{room.name}</h3>
        <div className="room-gallery"><Gallery photos={room.photos}/></div>
        <div className="room-description">{room.description}</div>
        <div className="room-booking-header"><h4>Booking Info</h4></div>
        <div className="room-booking-selectors">
            <div className="room-date-selector">
                <DateSelector 
                roomId = {roomId} 
                setCurrentRoomAttribute = {setCurrentRoomAttribute} 
                handleFinancialChange = {handleFinancialChange}
                getCurrentRoomAttribute = {getCurrentRoomAttribute}
                />
                </div>
            <div className="room-occupancy-selector">
                <OccupancySelector
                handleFinancialChange = {(value) => handleFinancialChange({numberOfNights: getCurrentRoomAttribute('number_of_nights'), occupancyPerNight: value})} 
                capacity = {room.capacity_per_room}
                roomId = {roomId}
                setCurrentRoomAttribute ={setCurrentRoomAttribute} 
                getCurrentRoomAttribute = {getCurrentRoomAttribute}
                />
            </div>
        </div>
        <div className="room-checkout-container">
            <BookButton getCurrentRoom = {getCurrentRoom} isButtonDisabled = {isButtonDisabled} openModal={openModal}/>
            <TotalPrice getFinancialInfo={getFinancialInfo}/>
        </div>
        <div className="room-info">
            <RoomType roomType={room.room_type}/>
            <NumberOfRooms numOfRooms={room.number_of_rooms}/>
            <PeoplePerRoom peoplePerRoom={room.capacity_per_room}/>
            <BedTypes bedTypes={room.main_bed_type}/>
            <PricePerRoom price={room.price_per_person_per_night}/>
        </div>
    </div>
)
}