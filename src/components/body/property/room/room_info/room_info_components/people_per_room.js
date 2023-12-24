import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import styled from '@emotion/styled';
import { convertIntToWord } from '../../../../../../helpers/int_to_word';

const StyledPeopleAltIcon = styled(PeopleAltIcon)({
    color: '#6b3322',
    cursor: 'pointer'
});

export function PeoplePerRoom({peoplePerRoom}) {
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
                <StyledPeopleAltIcon 
                ref={setReferenceElement}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                />
                <h3 className='room-info-item-content'>{convertIntToWord(peoplePerRoom)} {peoplePerRoom===1 ? 'person' : 'people'} per room</h3>
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