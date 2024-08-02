import { useState, useEffect, useRef } from 'react';

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState({ up: false, down: false });
    const lastScrollTopRef = useRef<number>(0);

    useEffect(() => {

        const handleScroll = () => {
            const lastScrollTop = lastScrollTopRef.current;

            const scrollTop = document.documentElement.scrollTop;
            const isScrollingUp = scrollTop < (lastScrollTop || 0);
            const isScrollingDown = scrollTop > (lastScrollTop || 0);

            setScrollDirection({ up: isScrollingUp, down: isScrollingDown });
            
            lastScrollTopRef.current = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return scrollDirection;
};

export default useScrollDirection;