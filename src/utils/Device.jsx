import {useState, useEffect} from "react";

export default function Device() {
    const [size, setSize] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    });

    useEffect(() => {
        const handleScreenResize = () => {
            let newSizes = {
                isMobile: false,
                isTablet: false,
                isDesktop: false,
            }
            if(window.innerWidth <= 550) newSizes = {
                ...newSizes,
                isMobile: true
            }
            else if(window.innerWidth <= 1023 && window.innerHeight > 550) newSizes = {
                ...newSizes,
                isTablet: true
            }
            else if(window.innerWidth > 1023) newSizes = {
                ...newSizes,
                isDesktop: true
            };
            setSize(newSizes);
        }

        handleScreenResize();

        window.addEventListener('resize', handleScreenResize);

        return () => window.removeEventListener('resize', handleScreenResize);
    }, [])

    return size;
}