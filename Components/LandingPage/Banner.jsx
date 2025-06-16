import { useState, useEffect } from 'react';
import BannerImage from "../../assets/mainImg.png"
import BannerImage2 from "../../assets/BannerSVG.svg"
import BannerButton from "../../assets/Vector.svg"
import "./Banner.css"

const Banner = () => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showScrollHint, setShowScrollHint] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const handleCaseReviewClick = () => {
        window.location.href = "/consultation";
    };

    const handleButtonMouseEnter = () => {
        setIsButtonHovered(true);
    };

    const handleButtonMouseLeave = () => {
        setIsButtonHovered(false);
    };

    const scrollToNextSection = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
                setShowScrollHint(false);
            } else {
                setScrolled(false);
                setShowScrollHint(true);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        handleResize();

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        const timeout = setTimeout(() => {
            setShowScrollHint(false);
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeout);
        };
    }, []);

    // Mobile view component
    const MobileView = () => (
        <div className="w-full h-screen relative bg-[#d2d5ce] overflow-hidden text-left text-[32px] text-[#162766] font-poppins banner-container">
            <div className="banner-overlay"></div>
            <img 
                className="w-full h-full overflow-hidden absolute top-0 left-0 banner-content" 
                alt="Background pattern" 
                src={BannerImage2} 
            />
            <div className="absolute top-[50px] left-0 w-full h-full flex flex-col md:flex-row p-6 pt-10 banner-content">
                <div className="bg-[#d2d5ce] w-full max-w-[400px] p-4 mb-6 md:mb-0 banner-text">
                    <p className="text-[38px] font-light mb-0">Your Case</p>
                    <p className="text-[72px] font-extrabold leading-tight mb-2">Matters</p>
                    <p className="text-[18px] capitalize font-semibold text-[#5a5a5a] mb-6">
                        Join the movement for justice
                    </p>
                    <button 
                        onClick={handleCaseReviewClick}
                        className="rounded-xl bg-[#f2c438] w-full py-3 flex items-center justify-center text-[16px] text-[#0d0d0d] active:bg-[#e0b32e] banner-button"
                        aria-label="Get a free case review"
                    >
                        <div className="uppercase font-semibold">Get a Free Case Review</div>
                        <img 
                            className="w-[20px] h-[20px] ml-2" 
                            alt="Arrow icon" 
                            src={BannerButton} 
                        />
                    </button>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img 
                        className="w-full max-w-[350px] object-cover banner-image" 
                        alt="Main banner image" 
                        src={BannerImage} 
                    />
                </div>
            </div>
        </div>
    );

    // Desktop view component
    const DesktopView = () => (
        <div className="w-full h-[845px] relative bg-[#d2d5ce] overflow-hidden text-center text-[68px] text-[#162766] font-poppins banner-container">
            <div className="banner-overlay"></div>
            <img 
                className="w-[100vw] h-[121vh] overflow-hidden banner-content" 
                alt="Background pattern" 
                src={BannerImage2} 
            />
            <img 
                className="absolute top-0 left-0 w-full h-[118vh] object-cover overflow-hidden banner-content" 
                alt="Background overlay" 
                src={BannerImage2} 
            />
            <img 
                className={`absolute top-[115px] left-[72px] h-[800px] object-cover transition-all duration-700 banner-image ${scrolled ? 'opacity-80 scale-[0.98]' : ''}`} 
                alt="Main banner image" 
                src={BannerImage} 
            />
            <div className={`absolute top-[153px] left-[784px] bg-[#d2d5ce] w-[582px] h-[471px] transition-all duration-700 banner-text ${scrolled ? 'translate-y-[-20px]' : ''}`}>
                <div className="absolute top-0 left-[86px] font-light inline-block w-[410.6px] h-[115.1px]">
                    <p className="m-0">Your Case</p>
                </div>
                <div className="absolute top-[55.1px] left-[12px] text-[132px] font-extrabold inline-block w-[558px] h-[140.5px]">
                    Matters
                </div>
                <div className="absolute top-[248px] left-[19px] text-[26px] capitalize font-semibold text-[#5a5a5a] inline-block w-[544px]">
                    Join the movement for justice
                </div>
                <button 
                    onClick={handleCaseReviewClick}
                    onMouseEnter={handleButtonMouseEnter}
                    onMouseLeave={handleButtonMouseLeave}
                    className={`absolute top-[361px] left-[93px] rounded-xl bg-[#f2c438] w-[396px] h-[62px] flex flex-row items-center justify-center px-[33px] pr-[80px] pt-[10px] pb-0 box-border gap-[10px] text-[20px] text-[#0d0d0d] transition-all duration-300 banner-button ${isButtonHovered ? 'bg-[#e0b32e] transform scale-[1.02]' : ''}`}
                    aria-label="Get a free case review"
                >
                    <div className="relative uppercase font-semibold">Get a Free Case Review</div>
                    <img 
                        className={`w-[24px] relative h-[24px] overflow-hidden flex-shrink-0 transition-transform duration-300 ${isButtonHovered ? 'transform translate-x-1' : ''}`} 
                        alt="Arrow icon" 
                        src={BannerButton} 
                    />
                </button>
            </div>
        </div>
    );

    return isMobile ? <MobileView /> : <DesktopView />;
};

export default Banner;
