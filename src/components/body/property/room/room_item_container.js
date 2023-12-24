import { DateSelector } from "./booking_info/booking_info_components/date_selector"
import { OccupancySelector } from "./booking_info/booking_info_components/occupancy_selector"
import { TotalPrice } from "./checkout_info/checkout_info_components/total_price"
import { BookButton } from "./checkout_info/checkout_info_components/book_button"
import { RoomType } from "./room_info/room_info_components/room_type"
import { BedTypes } from "./room_info/room_info_components/bed_types"
import { NumberOfRooms } from "./room_info/room_info_components/number_of_rooms"
import { PeoplePerRoom } from "./room_info/room_info_components/people_per_room"
import { PricePerRoom } from "./room_info/room_info_components/price_per_room"
import { Gallery } from "./gallery"

export function RoomItemContainer({room}, key) {
    console.log(room)
    return (
        <div className="room-item-container">
            <div className="room-header">{room.name}</div>
            <div className="room-gallery"><Gallery photos={room.photos}/></div>
            <div className="room-description">{room.description}</div>
            <div className="room-booking-header"><h4>Booking Info</h4></div>
            <div className="room-booking-selectors">
                <div className="room-date-selector"><DateSelector/></div>
                <div className="room-occupancy-selector"><OccupancySelector capacity={room.capacity_per_room}/></div>
            </div>
            <div className="room-checkout-container">
                <BookButton/>
                <TotalPrice/>
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