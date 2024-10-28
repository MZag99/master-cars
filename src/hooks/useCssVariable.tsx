import { useCallback, useEffect } from 'react';

const useCssVariable = (ref: React.RefObject<HTMLElement>, variableName: string, property: keyof HTMLElement) => {
    
    const updateProperty = useCallback(() => {
        if (ref.current) {
            document.body.style.setProperty(variableName, `${ref.current[property]}px`);
        }
    }, [ref, variableName, property]);
    
    useEffect(() => {
        updateProperty();
        window.addEventListener('resize', updateProperty);

        return () => {
            window.removeEventListener('resize', updateProperty);
        };
    }, [updateProperty]);
};

export default useCssVariable;