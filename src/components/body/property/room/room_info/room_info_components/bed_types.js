import BedIcon from '@mui/icons-material/Bed';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import styled from '@emotion/styled';

const StyledBedIcon = styled(BedIcon)({
    color: '#239191',
    cursor: 'pointer'
});

export function BedTypes() {
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
                <StyledBedIcon 
                ref={setReferenceElement}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
                <h3 className='room-info-item-content'>Single bed or 3/4-bed</h3>
            </div>
            {referenceElement && isHovered && (
            <div 
            ref={setPopperElement} 
            style={styles.popper} 
            {...attributes.popper} 
            className='tooltip bed-types-tooltip'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <span className='tooltip-text'>Bed types</span>
                <div ref={setArrowElement} style={styles.arrow} className='arrow'/>
            </div>
            )}
        </div>
    )
}