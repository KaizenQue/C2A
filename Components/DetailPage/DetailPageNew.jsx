import { useCallback, useEffect, useState } from 'react';
import DetailPageNew2 from './DetailPageNew2';
import DetailPageNew3 from './DetailPageNew3';
import DPFImg from '../../assets/DPFImg.jpg';

const DetailPageNew = () => {
    const [marqueeItems, setMarqueeItems] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    
    // Keyframes for marquee animation
    const marqueeKeyframes = `
        @keyframes marquee {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
    `;
    
    // Media query styles
    const mediaQueryStyles = `
        @media screen and (max-width: 768px) {
            .banner-container {
                height: 300px;
            }
            
            .marquee-item {
                min-width: 200px;
                padding: 0 10px;
            }
        }
    `;
    
    // Check if device is mobile
    const checkIfMobile = useCallback(() => {
        const mobileBreakpoint = 768;
        setIsMobile(window.innerWidth <= mobileBreakpoint);
    }, []);
    
    useEffect(() => {
        // Create enough marquee items to fill the screen width
        const numberOfItems = Math.ceil(window.innerWidth / 359) + 3; // Add extra items for seamless scrolling
        setMarqueeItems(Array(numberOfItems).fill("Depo-Provera lawsuit"));
        
        // Add keyframes and media queries to document
        const styleElement = document.createElement('style');
        styleElement.innerHTML = marqueeKeyframes + mediaQueryStyles;
        document.head.appendChild(styleElement);
        
        // Initial mobile check
        checkIfMobile();
        
        // Add resize listener for responsive behavior
        window.addEventListener('resize', checkIfMobile);
        
        return () => {
            // Clean up when component unmounts
            document.head.removeChild(styleElement);
            window.removeEventListener('resize', checkIfMobile);
        };
    }, [checkIfMobile]);

    return (
        <div className="w-full overflow-hidden relative">
            {/* Banner Image - Desktop/Mobile Conditional Rendering */}
            {isMobile ? (
                <div className="w-full h-[300px] overflow-hidden banner-container">
                    <img 
                        src="/mobile-banner.jpg" // Mobile-optimized image
                        alt="Depo-Provera Lawsuit Banner" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <h1 className="text-white text-2xl font-bold text-center px-4">
                            Depo-Provera Lawsuit Information
                        </h1>
                    </div>
                </div>
            ) : (
                <div className="w-full h-[500px] overflow-hidden banner-container">
                    <img 
                        src="/banner-image.jpg" 
                        alt="Depo-Provera Lawsuit Banner" 
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            
            {/* Marquee Effect */}
            <div className="relative top-[365px] w-full bg-black text-white py-[10px] overflow-hidden mt-[20px]">
                <div className="flex whitespace-nowrap" style={{ animation: 'marquee 30s linear infinite' }}>
                    {marqueeItems.map((text, index) => (
                        <span 
                            key={index} 
                            className="inline-block px-[20px] font-bold uppercase min-w-[359px] text-center marquee-item"
                        >
                            {text}
                        </span>
                    ))}
                </div>
            </div>

            {/* Mobile-specific content section */}
            {isMobile && (
                <div className="bg-gray-100 p-4 my-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-3">Quick Information</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white mr-2">1</span>
                            <span>Learn about eligibility requirements</span>
                        </li>
                        <li className="flex items-center">
                            <span className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white mr-2">2</span>
                            <span>Understand potential compensation</span>
                        </li>
                        <li className="flex items-center">
                            <span className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center text-white mr-2">3</span>
                            <span>Free case evaluation available</span>
                        </li>
                    </ul>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 font-bold">
                        Contact Us Now
                    </button>
                </div>
            )}

            {/* Main Content Container Component */}
            {/* <DetailPageNew2 /> */}

            {/* Contact Form Section Component */}
            {/* <DetailPageNew3 /> */}
        </div>
    );
};

export default DetailPageNew;
