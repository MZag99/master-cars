import { useEffect, useState } from 'react';

const useFooterInView = (): boolean => {
    const [isFooterInView, setIsFooterInView] = useState<boolean>(false);
    const OFFSET = 200;

    useEffect(() => {
        
        const handleScroll = () => {
            const footerElement = document.querySelector('footer');

            if (footerElement) {
                const { top } = footerElement.getBoundingClientRect();
                setIsFooterInView(top <= window.innerHeight + OFFSET);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isFooterInView;
};

export default useFooterInView;