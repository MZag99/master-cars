import { useEffect, useRef, useCallback } from 'react';

const useClickOutside = (onOutside: (param?: unknown) => void) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            onOutside();
        }
    }, [onOutside, ref]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);

    return ref;
};

export default useClickOutside;