import React, { useEffect, useState } from 'react';
import { usePopper } from 'react-popper';

export function TotalPrice({getCurrentFinancialInfo, roomId}){
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'top',
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }]
    });

    
    const currentFinancialInfo = getCurrentFinancialInfo()
    // if(roomId === 1){
    //     console.log(currentFinancialInfo)
    // }
    const [vat, setVat] = useState('');
    const [priceAfterVat, setPriceAfterVat] = useState('');

    useEffect(() => {
        const { vat, priceAfterVat } = getCurrentFinancialInfo();
        setVat(vat);
        setPriceAfterVat(priceAfterVat);
    }, [currentFinancialInfo]);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return(
        <div>
            { priceAfterVat > 0 && 
            <div className='total-price-container'>Total: 
                <h4 
                className="total-price" 
                ref={setReferenceElement}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                   <span>{`R${priceAfterVat}`}</span>
                </h4>
            </div>}
            {referenceElement && isHovered && (
            <div 
            ref={setPopperElement} 
            style={styles.popper} 
            {...attributes.popper} 
            className='tooltip vat-tooltip'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <span className='tooltip-text'>{`R${vat}`}</span>
                <div ref={setArrowElement} style={styles.arrow} className='arrow'/>
            </div>
            )}
        </div>
    )
}