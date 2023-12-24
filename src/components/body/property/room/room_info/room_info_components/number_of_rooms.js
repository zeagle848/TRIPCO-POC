import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import styled from '@emotion/styled';
import { convertIntToWord } from '../../../../../../helpers/int_to_word';

const StyledMeetingRoomIcon = styled(MeetingRoomIcon)({
    color: '#239191',
    cursor: 'pointer'
});

export function NumberOfRooms({numOfRooms}) {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'top',
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }]
    });

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const [isHovered, setIsHovered] = useState(false);


    return(
        <div>
            <div className='room-info-item-container'>
                <StyledMeetingRoomIcon 
                ref={setReferenceElement}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
                <h3 className='room-info-item-content'>{convertIntToWord(numOfRooms)} {numOfRooms===1 ? 'room' : 'rooms'} available</h3>
            </div>
            {referenceElement && isHovered && (
            <div 
            ref={setPopperElement} 
            style={styles.popper} 
            {...attributes.popper} 
            className='tooltip num-of-rooms-tooltip'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <span className='tooltip-text'>Number of rooms</span>
                <div ref={setArrowElement} style={styles.arrow} className='arrow'/>
            </div>
            )}
        </div>
    )
}