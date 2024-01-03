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

export function RoomItemContainer({getSpecificRoom, room, isLastRoom, roomId, openModal}, key) {
    const [currentRoom, setCurrentRoom] = useState(getSpecificRoom(roomId))

    const setCurrentRoomAttribute = useCallback(({attributeToChange, value}) => {
        setCurrentRoom((prevState) => {
            return {...prevState, [attributeToChange]: value}
        })
    }, [])

    const getCurrentRoom = useCallback(() => {
        return currentRoom;
    }, [currentRoom])

    const getCurrentRoomAttribute = useCallback((attribute) => {
        const currentRoom = getCurrentRoom();
        let value = currentRoom[attribute];
        return value;
    }, [getCurrentRoom])

    const [numberOfNights, setNumberOfNights] = useState()
    const [occupancy, setOccupancy] = useState(1)

    const getNumberOfNights = useCallback(() => {
        return numberOfNights;
    }, [numberOfNights])

    const getOccupancy = useCallback(() => {
        return occupancy;
    }, [occupancy])

    const setFinancialInformation = useCallback(() => {
        const occupancy = getOccupancy();
        const numberOfNights = getNumberOfNights();

        if(!numberOfNights){
            return;
        }

        const pricePerPerson = getCurrentRoomAttribute('price_per_person_per_night')
        const priceBeforeVat = pricePerPerson * numberOfNights * occupancy
        const vat = priceBeforeVat * 0.15
        const priceAfterVat = priceBeforeVat + vat;
        const newFinancialObject = {
            price_before_vat: priceBeforeVat, 
            vat: vat, 
            price_after_vat: priceAfterVat, 
            can_enable_button: priceBeforeVat < 0 && numberOfNights < 0, 
            price_per_person: pricePerPerson,
            numberOfNights: numberOfNights
        }
        setCurrentRoom((prevState) => {
            return {...prevState, financial_info: newFinancialObject, occupancy_per_night: occupancy}
        })
    }, [getCurrentRoomAttribute, getOccupancy, getNumberOfNights])

    const getFinancialInfo = useCallback(() => {
        return currentRoom.financial_info
    }, [currentRoom])

    const isButtonDisabled = useCallback(() =>{
        const numberOfNights = getNumberOfNights()
        return !numberOfNights;
    }, [getNumberOfNights])
    
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
                getCurrentRoomAttribute = {getCurrentRoomAttribute}
                setNumberOfNights = {setNumberOfNights}
                setFinancialInformation = {setFinancialInformation}
                setCurrentRoomAttribute = {setCurrentRoomAttribute}
                />
                </div>
            <div className="room-occupancy-selector">
                <OccupancySelector
                capacity = {room.capacity_per_room}
                setOccupancy = {setOccupancy}
                setFinancialInformation = {setFinancialInformation}
                />
            </div>
        </div>
        <div className="room-checkout-container">
            <BookButton getCurrentRoom = {getCurrentRoom} isButtonDisabled = {isButtonDisabled} openModal={openModal}/>
            <TotalPrice getFinancialInfo={getFinancialInfo} isButtonDisabled = {isButtonDisabled}/>
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