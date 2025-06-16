import { useState, useEffect } from 'react';
import LPN from "../../assets/LPN.jpg"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const LandingPageNewUpdated = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeButton, setActiveButton] = useState(null);
    const [activeImage, setActiveImage] = useState(LPN);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeText, setActiveText] = useState({
        title: "Expert Legal Solutions",
        description: "Professional legal guidance"
    });

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const pageContent = {
        1: {
            title: "Mass Tort",
            image: LPN,
            buttons: [
                { 
                    id: 1, 
                    text: "Depo Provera Lawsuit", 
                    image: LPN,
                    title: "Depo Provera Legal Support",
                    description: "Expert guidance for your case"
                },
                { 
                    id: 2, 
                    text: "Philips CPAP/BiPAP Device Lawsuit", 
                    image: LPN,
                    title: "CPAP Device Claims",
                    description: "Fight for your rights"
                },
                { 
                    id: 3, 
                    text: "Exactech Implant Recall", 
                    image: LPN,
                    title: "Implant Recall Support",
                    description: "Get the compensation you deserve"
                },
                { 
                    id: 4, 
                    text: "Tylenol Autism Lawsuit", 
                    image: LPN,
                    title: "Tylenol Autism Claims",
                    description: "Professional legal assistance"
                },
                { 
                    id: 5, 
                    text: "Mesothelioma Lawsuit", 
                    image: LPN,
                    title: "Mesothelioma Support",
                    description: "Expert legal representation"
                }
            ]
        },
        2: {
            title: "Personal Injury",
            image: LPN,
            buttons: [
                { 
                    id: 6, 
                    text: "Car Accident", 
                    image: LPN,
                    title: "Car Accident Claims",
                    description: "Get the compensation you deserve"
                },
                { 
                    id: 7, 
                    text: "Slip and Fall", 
                    image: LPN,
                    title: "Slip and Fall Support",
                    description: "Expert legal guidance"
                },
                { 
                    id: 8, 
                    text: "Medical Malpractice", 
                    image: LPN,
                    title: "Medical Malpractice Claims",
                    description: "Professional assistance"
                },
                { 
                    id: 9, 
                    text: "Workplace Injury", 
                    image: LPN,
                    title: "Workplace Injury Support",
                    description: "Protect your rights"
                },
                { 
                    id: 10, 
                    text: "Product Liability", 
                    image: LPN,
                    title: "Product Liability Claims",
                    description: "Seek justice today"
                }
            ]
        },
        3: {
            title: "Class Action",
            image: LPN,
            buttons: [
                { 
                    id: 11, 
                    text: "Consumer Protection", 
                    image: LPN,
                    title: "Consumer Rights",
                    description: "Fight for your rights"
                },
                { 
                    id: 12, 
                    text: "Employment Law", 
                    image: LPN,
                    title: "Employment Claims",
                    description: "Get the support you need"
                },
                { 
                    id: 13, 
                    text: "Securities Fraud", 
                    image: LPN,
                    title: "Securities Claims",
                    description: "Expert representation"
                },
                { 
                    id: 14, 
                    text: "Antitrust", 
                    image: LPN,
                    title: "Antitrust Support",
                    description: "Professional guidance"
                },
                { 
                    id: 15, 
                    text: "See All", 
                    image: LPN,
                    title: "All Legal Services",
                    description: "Browse all our services"
                }
            ]
        },
        4: {
            title: "Criminal Defense",
            image: LPN,
            buttons: [
                { 
                    id: 16, 
                    text: "DUI/DWI", 
                    image: LPN,
                    title: "DUI/DWI Defense",
                    description: "Expert legal representation"
                },
                { 
                    id: 17, 
                    text: "Drug Crimes", 
                    image: LPN,
                    title: "Drug Crime Defense",
                    description: "Protect your rights"
                },
                { 
                    id: 18, 
                    text: "White Collar", 
                    image: LPN,
                    title: "White Collar Defense",
                    description: "Professional legal support"
                },
                { 
                    id: 19, 
                    text: "Violent Crimes", 
                    image: LPN,
                    title: "Violent Crime Defense",
                    description: "Strong legal advocacy"
                },
                { 
                    id: 20, 
                    text: "See All", 
                    image: LPN,
                    title: "All Criminal Defense",
                    description: "Browse all our services"
                }
            ]
        }
    };

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < 4) {
            setCurrentPage(prev => prev + 1);
        } else if (direction === 'prev' && currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
        // Reset active button when changing pages
        setActiveButton(null);
        setActiveImage(pageContent[currentPage].image);
        setActiveText({
            title: "Expert Legal Solutions",
            description: "Professional legal guidance"
        });
    };

    const handleButtonHover = (button) => {
        setActiveButton(button.id);
        setActiveImage(button.image);
        setActiveText({
            title: button.title,
            description: button.description
        });
    };

    const handleButtonLeave = () => {
        setActiveButton(null);
        setActiveImage(pageContent[currentPage].image);
        setActiveText({
            title: "Expert Legal Solutions",
            description: "Professional legal guidance"
        });
    };

    const mobileLayout = () => (
        <div className="flex flex-col w-full min-h-screen bg-[#D2D5CE] p-5">
            {/* Header Section */}
            <div className="mb-8">
                <b className="text-[32px] inline-block font-poppins text-[#162766] text-left">Expert Legal Solutions When You Need Them Most</b>
                <div className="border-t border-[#9a9cc3] w-full h-[1px] mt-5" />
            </div>

            {/* Page Navigation */}
            <div className="flex items-center gap-1 mb-5">
                <div className="text-[40px] font-semibold text-[#162766]">{currentPage}</div>
                <div className="text-[40px] font-semibold text-[#aaa]">/4</div>
                <b className="text-2xl text-[#162766]">
                    {pageContent[currentPage].title}
                </b>
                <div className="flex gap-2.5 ml-auto">
                    <button 
                        onClick={() => handlePageChange('prev')}
                        className={`bg-transparent border-none ${currentPage > 1 ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                    >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                            <FaArrowLeft className="text-[#162766]" size={20} />
                        </div>
                    </button>
                    <button 
                        onClick={() => handlePageChange('next')}
                        className={`bg-transparent border-none ${currentPage < 4 ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                    >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                            <FaArrowRight className="text-[#162766]" size={20} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Main Image */}
            <div className="mb-8">
                <img 
                    src={pageContent[currentPage].image} 
                    alt="Main section image"
                    className="w-full h-auto transition-all duration-500 ease-in-out rounded-[20px]"
                />
            </div>

            {/* Buttons Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-8">
                {pageContent[currentPage].buttons.map((button) => (
                    <div
                        key={button.id}
                        onMouseEnter={() => handleButtonHover(button)}
                        onMouseLeave={handleButtonLeave}
                        className={`rounded-[19px] border border-[#999cc3] flex items-center justify-center p-2.5 cursor-pointer transition-all duration-300 ease-in-out text-sm text-center ${
                            activeButton === button.id ? 'bg-[#162766] text-[#f9f9f9]' : 'bg-transparent'
                        }`}
                    >
                        <div className="uppercase font-medium">{button.text}</div>
                    </div>
                ))}
            </div>

            {/* Active Image and Text */}
            <div className="relative">
                <img 
                    src={activeImage} 
                    alt="Bottom section image"
                    className="w-full h-auto transition-all duration-500 ease-in-out rounded-[20px]"
                />
                <div className="absolute bottom-5 left-5 text-white transition-all duration-500 ease-in-out">
                    <b className="block text-xl mb-1.5 opacity-100 transition-all duration-500 ease-in-out">{activeText.title}</b>
                    <p className="text-sm m-0 max-w-[90%] opacity-100 transition-all duration-500 ease-in-out">{activeText.description}</p>
                </div>
            </div>
        </div>
    );

    return isMobile ? mobileLayout() : (
        <div className="flex flex-col w-full min-h-screen bg-[#D2D5CE]">
            <div className="flex w-full flex-1">
                {/* Left Section - 40% */}
                <div className="w-1/2 p-5 flex flex-col justify-center pl-[65px]">
                    <b className="text-[45px] inline-block font-poppins text-[#162766] text-left">Expert Legal Solutions When You Need Them Most</b>
                    <div className="border-t border-[#9a9cc3] w-full h-[1px] mt-5" />
                    <div className="flex items-baseline gap-5 mt-5">
                        <div className="text-[80px] font-semibold text-[#162766]">{currentPage}</div>
                        <div className="text-[80px] font-semibold text-[#aaa]">/4</div>
                        <b className="text-[40px] inline-block h-[43px] text-[#162766]">
                            {pageContent[currentPage].title}
                        </b>
                        <div className="flex gap-2.5 ml-auto">
                            <button 
                                onClick={() => handlePageChange('prev')}
                                className={`bg-transparent border-none ${currentPage > 1 ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                            >
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                                    <FaArrowLeft className="text-[#162766]" size={20} />
                                </div>
                            </button>
                            <button 
                                onClick={() => handlePageChange('next')}
                                className={`bg-transparent border-none ${currentPage < 4 ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
                            >
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                                    <FaArrowRight className="text-[#162766]" size={20} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section - 60% */}
                <div className="w-1/2 p-5 pr-[65px]">
                    <img 
                        src={pageContent[currentPage].image} 
                        alt="Right section image"
                        className="w-full h-auto transition-all duration-500 ease-in-out rounded-[20px]"
                    />
                </div>
            </div>

            {/* Common Bottom Section */}
            <div className="w-4/5 w-[100%]">
                <div className="border-t border-[#9a9cc3] w-full h-[1px] mt-5" />
            </div>

            {/* Bottom Sections */}
            <div className="flex w-full p-5 mb-10 px-[65px]">
                {/* Left Section - 70% */}
                <div className="w-[70%] relative min-h-[400px] flex justify-start items-center">
                    <div className="flex flex-wrap gap-5 justify-start items-center max-w-full">
                        {pageContent[currentPage].buttons.map((button) => (
                            <div
                                key={button.id}
                                onMouseEnter={() => handleButtonHover(button)}
                                onMouseLeave={handleButtonLeave}
                                className={`rounded-[19px] border border-[#999cc3] inline-flex items-center justify-center p-3.5 cursor-pointer transition-all duration-300 ease-in-out ${
                                    activeButton === button.id ? 'bg-[#162766] text-[#f9f9f9]' : 'bg-transparent'
                                }`}
                            >
                                <div className="uppercase font-medium">{button.text}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - 30% */}
                <div className="w-[40%] p-5 relative">
                    <div className="relative w-full h-full">
                        <img 
                            src={activeImage} 
                            alt="Bottom right section image"
                            className="w-full h-auto transition-all duration-500 ease-in-out rounded-[20px]"
                        />
                        <div className="absolute bottom-[35px] left-5 text-white transition-all duration-500 ease-in-out drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                            <b className="block text-2xl mb-2.5 opacity-100 transition-all duration-500 ease-in-out">{activeText.title}</b>
                            <p className="text-base m-0 max-w-[90%] opacity-100 transition-all duration-500 ease-in-out">{activeText.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageNewUpdated;