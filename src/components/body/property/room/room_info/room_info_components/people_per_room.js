import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import styled from '@emotion/styled';

const StyledPeopleAltIcon = styled(PeopleAltIcon)({
    color: '#239191',
    cursor: 'pointer'
});

export function PeoplePerRoom() {
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
            <h1>Test</h1>
            <div className='room-info-item-container'>
                <StyledPeopleAltIcon 
                ref={setReferenceElement}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
                <h3 className='room-info-item-content'>Two people per room</h3>
            </div>
            {referenceElement && isHovered && (
            <div 
            ref={setPopperElement} 
            style={styles.popper} 
            {...attributes.popper} 
            className='tooltip occupancy-tooltip'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <span className='tooltip-text'>Occupancy</span>
                <div ref={setArrowElement} style={styles.arrow} className='arrow'/>
            </div>
            )}
        </div>
    )
}