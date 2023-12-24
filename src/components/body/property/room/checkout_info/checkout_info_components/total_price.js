import React, { useState } from 'react';
import { usePopper } from 'react-popper';

export function TotalPrice(){
    const totalPrice = 'R17250'
    const vat = 'VAT: R2250'
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
            <h4 className='total-price-container'>Total: 
                <h4 
                className="total-price" 
                ref={setReferenceElement}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                    <span>{totalPrice}</span>
                </h4>
            </h4>
            {referenceElement && isHovered && (
            <div 
            ref={setPopperElement} 
            style={styles.popper} 
            {...attributes.popper} 
            className='tooltip vat-tooltip'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <span className='tooltip-text'>{vat}</span>
                <div ref={setArrowElement} style={styles.arrow} className='arrow'/>
            </div>
            )}
        </div>
    )
}