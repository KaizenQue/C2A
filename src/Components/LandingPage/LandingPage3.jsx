import LP3 from '../../assets/LP3.jpg'
import BannerImg from '../../assets/BannerSVG.svg'
import { useState, useEffect } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const LandingPage3 = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handlePrevious = () => {
        setCurrentSlide(prev => (prev === 1 ? 3 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide(prev => (prev === 3 ? 1 : prev + 1));
    };

    const MobileLayout = () => (
        <div className="w-full relative bg-[#d2d5ce] min-h-screen overflow-hidden text-left font-poppins">
            <img 
                className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden opacity-30" 
                alt="" 
                src={BannerImg} 
            />
            
            <div className="relative px-4 py-6">
                <div className="text-center mb-6">
                    <b className="text-[32px] text-[#162766] block mb-3">Our Legal Assistance</b>
                    <div className="text-[18px] text-[#5a5a5a] px-4">
                        Reach out to learn more about how our attorneys can support your case.
                    </div>
                </div>

                <div 
                    className="relative w-full h-[70vh] rounded-t-[40px] overflow-hidden bg-cover bg-no-repeat bg-center rounded-[50px]"
                    style={{ backgroundImage: `url(${LP3})` }}
                >
                    <div 
                        className="absolute bottom-0 left-0 right-0 w-full backdrop-blur-[34px] rounded-[50px]"
                        style={{ 
                            background: "linear-gradient(100.97deg, rgba(38, 40, 40, 0.8), rgba(38, 40, 40, 0.6))",
                            maxHeight: '30vh'
                        }}
                    >
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                                <b className="text-[28px] text-[#f9f9f9]">Mass Tort</b>
                                <b className="text-[60px] font-['Playfair_Display'] text-[#f9f9f9]">{currentSlide}</b>
                            </div>

                            <div className="text-[14px] text-[#f9f9f9] font-light mb-3 line-clamp-3">
                                {currentSlide === 1 && "It is a legal action where multiple individuals harmed by the same product or event file separate cases handled together. It helps victims seek justice and compensation efficiently."}
                                {currentSlide === 2 && "Class Action lawsuits allow a group of people with similar injuries to sue as a single entity. This approach is efficient for cases where individual lawsuits would be impractical."}
                                {currentSlide === 3 && "Our attorneys specialize in representing clients in complex litigation matters, ensuring your rights are protected throughout the legal process."}
                            </div>

                            <div className="flex justify-center gap-4 mt-2">
                                <button
                                    onClick={handlePrevious}
                                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-colors hover:bg-white/40"
                                >
                                    <FaArrowLeft className="text-white text-xl" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-colors hover:bg-white/40"
                                >
                                    <FaArrowRight className="text-white text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const DesktopLayout = () => (
        <div className="w-full relative bg-[#d2d5ce] h-[1068px] overflow-hidden text-left text-[45px] text-[#162766] font-poppins">
            {/* <img style={{position: "absolute", top: "4px", left: "-4px", width: "1449px", height: "899px", overflow: "hidden",}} alt="" src="Frame 90.svg" /> */}
            <img 
                className="absolute top-0 left-0 w-full h-[1017px] object-cover overflow-hidden" 
                alt="" 
                src={BannerImg} 
            />
            <div className="absolute top-[64px] left-0 right-0 mx-auto bg-[#d2d5ce] w-[894px] h-[138px]">
                <b className="absolute top-[18px] left-0 right-0 mx-auto w-fit">Our Legal Assistance</b>
                <div className="absolute top-[86px] left-0 right-0 mx-auto w-[802px] text-[22px] text-[#5a5a5a] text-center">
                    Reach out to learn more about how our attorneys can support your case.
                </div>
            </div>
            <div 
                className="absolute top-[244px] left-0 rounded-t-[80px] w-screen h-[824px] overflow-hidden bg-cover bg-no-repeat bg-top text-[34px] text-[#f9f9f9]"
                style={{ backgroundImage: `url(${LP3})` }}
            >
                <div 
                    className="absolute top-[calc(50%_+_162px)] left-30 right-14 mx-auto w-[835px] h-[250px] backdrop-blur-[34px] rounded-t-[40px]"
                    style={{ background: "linear-gradient(100.97deg, rgba(38, 40, 40, 0.7), rgba(38, 40, 40, 0.07))" }}
                />
                <div
                    onClick={handleNext}
                    className="absolute top-[calc(50%_+_204px)] left-[1328px] w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer transition-colors hover:bg-white/40"
                >
                    <FaArrowRight className="text-white text-xl" />
                </div>
                <div
                    onClick={handlePrevious}
                    className="absolute top-[calc(50%_+_204px)] left-[1273px] w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer transition-colors hover:bg-white/40"
                >
                    <FaArrowLeft className="text-white text-xl" />
                </div>
                <b className="absolute top-[656px] left-[calc(50%_+_24.5px)]">Mass Tort</b>
                <b className="absolute top-[573px] left-[659px] text-[180px] inline-block font-['Playfair_Display'] w-[69px] h-[210px]">{currentSlide}</b>
                <div className="absolute top-[calc(50%_+_301px)] left-[calc(50%_+_24.5px)] text-base font-light inline-block w-[528px]">
                    {currentSlide === 1 && "It is a legal action where multiple individuals harmed by the same product or event file separate cases handled together. It helps victims seek justice and compensation efficiently."}
                    {currentSlide === 2 && "Class Action lawsuits allow a group of people with similar injuries to sue as a single entity. This approach is efficient for cases where individual lawsuits would be impractical."}
                    {currentSlide === 3 && "Our attorneys specialize in representing clients in complex litigation matters, ensuring your rights are protected throughout the legal process."}
                </div>
            </div>
        </div>
    );

    return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default LandingPage3;
