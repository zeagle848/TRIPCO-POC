import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import styled from '@emotion/styled';

const StyledHomeIcon = styled(HomeIcon)({
    color: '#239191',
    cursor: 'pointer'
});

export function RoomType({roomType}) {
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
                <StyledHomeIcon 
                ref={setReferenceElement}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
                <h3 className='room-info-item-content'>{roomType}</h3>
            </div>
            {referenceElement && isHovered && (
            <div 
            ref={setPopperElement} 
            style={styles.popper} 
            {...attributes.popper} 
            className='tooltip room-type-tooltip'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <span className='tooltip-text'>Room type</span>
                <div ref={setArrowElement} style={styles.arrow} className='arrow'/>
            </div>
            )}
        </div>
    )
}