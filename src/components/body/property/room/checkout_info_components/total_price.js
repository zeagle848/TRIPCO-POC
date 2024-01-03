import React, { useMemo, useState } from 'react';
import { usePopper } from 'react-popper';

export function TotalPrice({getFinancialInfo, isButtonDisabled}){
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: 'top',
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }]
    });

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const financialInfo = useMemo(() => getFinancialInfo(), [getFinancialInfo]);    

    const priceAfterVat = financialInfo.price_after_vat;
    const vat = financialInfo.vat
    return(
        <div>
            { !isButtonDisabled() && 
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
                <span className='tooltip-text'>{`VAT: R${vat}`}</span>
                <div ref={setArrowElement} style={styles.arrow} className='arrow'/>
            </div>
            )}
        </div>
    )
}