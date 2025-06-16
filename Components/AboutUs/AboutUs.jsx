import AboutUsImg from '../../assets/AboutUs.png'
import { useState, useEffect } from 'react'

const AboutUs = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const MobileLayout = () => (
        <div className="w-full relative bg-gradient-to-t from-[#162766] via-[rgba(22,39,102,0.5)] to-[rgba(22,39,102,0)] min-h-[400px] overflow-hidden font-poppins">
            <img 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                src={AboutUsImg} 
                alt="About Us" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#162766] via-[rgba(22,39,102,0.7)] to-[rgba(22,39,102,0.3)]" />
            <div className="relative h-full flex items-center justify-center px-4 py-8">
                <b className="text-[48px] text-[#f9f9f9] text-center leading-tight">
                    About Us
                </b>
            </div>
        </div>
    );

    const DesktopLayout = () => (
        <div className="w-full relative bg-gradient-to-t from-[#162766] via-[rgba(22,39,102,0.5)] to-[rgba(22,39,102,0)] h-[700px] overflow-hidden text-left text-[132px] text-[#f9f9f9] font-poppins">
            <b className="absolute top-[calc(50%-73px)] left-[calc(50%-304px)]">About Us</b>
            <img 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                src={AboutUsImg} 
                alt="About Us" 
            />
        </div>
    );

    return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default AboutUs;
