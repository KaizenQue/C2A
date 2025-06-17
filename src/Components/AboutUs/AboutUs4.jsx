import { useState, useEffect } from 'react';
import AboutUs4Desktop from './AboutUs4Desktop';
import AboutUs4Mobile from './AboutUs4Mobile';

const AboutUs4 = () => {
    console.log('re-render Parent -->')
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile on mount and window resize
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    return isMobile ? <AboutUs4Mobile /> : <AboutUs4Desktop />;
};

export default AboutUs4;
