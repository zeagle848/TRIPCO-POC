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

export function RoomItemContainer({room, isLastRoom, roomId, openModal, handleBookingInfoAddition, getSpecificBookingInfo}, key) {
        const [financialInfo, setFinancialInfo] = useState({
            priceBeforeVat: null,
            vat: null,
            priceAfterVat: null,
            pricePerPerson: room.price_per_person_per_night,
            canEnableButton: false
        })

        const getFinancialInfo = useCallback(() => {
            return financialInfo
        }, [financialInfo])

        const handleFinancialChange = useCallback((currentBooking) => {
            const numberOfNights = currentBooking.total_number_of_nights
            if(!numberOfNights){
                setFinancialInfo({...financialInfo, canEnableButton: false});
            }
            const pricePerPerson = currentBooking.price_per_person_per_night
            const priceBeforeVat = pricePerPerson * numberOfNights
            const vat = priceBeforeVat * 0.15
            const priceAfterVat = priceBeforeVat + vat;
            
            setFinancialInfo({priceBeforeVat, vat, priceAfterVat, canShowButton: true})
        }, [financialInfo])

        useEffect(() => {
            console.log(getFinancialInfo())
        }, [financialInfo])
    
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
                    handleBookingInfoAddition = {handleBookingInfoAddition} 
                    handleDateRangeSelection = {({bookingParameter, value}) => handleBookingInfoAddition({bookingParameter: bookingParameter, value: value, roomId: roomId})}
                    handleFinancialChange = {handleFinancialChange}
                    />
                    </div>
                <div className="room-occupancy-selector">
                    <OccupancySelector 
                    capacity = {room.capacity_per_room}
                    getSpecificBookingInfo = {getSpecificBookingInfo}
                    roomId = {roomId}
                    handleBookingInfoAddition ={handleBookingInfoAddition}
                    handleFinancialChange = {handleFinancialChange}
                    />
                </div>
            </div>
            <div className="room-checkout-container">
                <BookButton handleFinancialChange= {handleFinancialChange} getSpecificBookingInfo = {getSpecificBookingInfo} openModal={openModal}/>
                <TotalPrice handleFinancialChange={handleFinancialChange}/>
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