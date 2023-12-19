import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import styled from '@emotion/styled';

const StyledMonetizationOnIcon = styled(MonetizationOnIcon)({
    color: '#239191',
    cursor: 'pointer'
});

export function PricePerRoom() {
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
                <StyledMonetizationOnIcon 
                ref={setReferenceElement}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
                <h3 className='room-info-item-content'>R1000</h3>
            </div>
            {referenceElement && isHovered && (
            <div 
            ref={setPopperElement} 
            style={styles.popper} 
            {...attributes.popper} 
            className='tooltip price-per-person-per-night-tooltip'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <span className='tooltip-text'>Pricce per person per night</span>
                <div ref={setArrowElement} style={styles.arrow} className='arrow'/>
            </div>
            )}
        </div>
    )
}