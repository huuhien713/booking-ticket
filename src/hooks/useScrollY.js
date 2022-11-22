import { useState, useEffect } from 'react';

export const useScrollY = () => {

    const [scrollY, setScrollY] = useState(0);

    const handleScrollY = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
    }

    useEffect(() => {
        handleScrollY();
        document.addEventListener('scroll', handleScrollY);
        return () => {
            document.removeEventListener('scroll', handleScrollY);
        }
    }, []);

    return ([scrollY]);
}
