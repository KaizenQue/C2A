import BannerImg from '../../assets/BannerSVG.svg'
import LP42 from '../../assets/LP42.jpg'
import LP43 from '../../assets/LP43.jpg'
import LP4read from '../../assets/LP4Read.svg'
import LP4 from '../../assets/LP4.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const carouselData = [
    {
        id: 1,
        title: "Discovery Disputes in Hair Relaxer MDL: Plaintiffs Demand Accountability as Deadlines Loom",
        description: "Discovery disputes in the ongoing Hair Relaxer MDL are heating up as plaintiffs' lawyers accuse defendants of stonewalling on crucial information needed to advance the litigation.",
        image: LP4
    },
    {
        id: 2,
        title: "Uterine Fibroid Settlement Updates: New Evidence Emerges",
        description: "Recent developments in the uterine fibroid settlement case show promising evidence that could impact thousands of claimants nationwide.",
        image: LP42
    },
    {
        id: 3,
        title: "Class Action Lawsuit Filed Against Major Pharmaceutical Company",
        description: "A new class action lawsuit has been filed, alleging harmful side effects from a widely prescribed medication that weren't properly disclosed.",
        image: LP43
    }
];

const bottomCardsData = [
    [
        {
            id: 1,
            title: "Hair Relaxer Injury Claims: Latest Developments",
            image: LP42,
            date: "Updated on 15/1/2024"
        },
        {
            id: 2,
            title: "MDL Settlement Timeline: What to Expect",
            image: LP43,
            date: "Updated on 14/1/2024"
        }
    ],
    [
        {
            id: 3,
            title: "Uterine Fibroid Settlement Payouts",
            image: LP42,
            date: "Updated on 13/1/2024"
        },
        {
            id: 4,
            title: "Recent Studies on Fibroid Treatment",
            image: LP43,
            date: "Updated on 12/1/2024"
        }
    ],
    [
        {
            id: 5,
            title: "Pharmaceutical Liability: Know Your Rights",
            image: LP43,
            date: "Updated on 11/1/2024"
        },
        {
            id: 6,
            title: "New Evidence in Major Class Action",
            image: LP4,
            date: "Updated on 10/1/2024"
        }
    ]
];

const LandingPage5 = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentCards, setCurrentCards] = useState(bottomCardsData[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    useEffect(() => {
        setCurrentCards(bottomCardsData[currentSlide]);
    }, [currentSlide]);
    
    const nextSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
            setIsTransitioning(false);
        }, 300);
    };
    
    const prevSlide = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
            setIsTransitioning(false);
        }, 300);
    };

    const slideTransitionClasses = isTransitioning 
        ? "opacity-0 transition-opacity duration-300" 
        : "opacity-100 transition-opacity duration-300";
    
    const cardTransitionClasses = isTransitioning
        ? "opacity-0 transition-opacity duration-300" 
        : "opacity-100 transition-opacity duration-300";

    const MobileLayout = () => (
        <div className="w-full relative bg-[#d2d5ce] min-h-screen overflow-hidden font-poppins">
            <img 
                className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden opacity-30" 
                alt="" 
                src={BannerImg} 
            />
            
            <div className="relative px-4 py-6">
                {/* Header */}
                <div className="text-center mb-6">
                    <b className="text-[32px] text-[#162766] block mb-3">Updates on Active Legal Matters</b>
                    <div className="text-[18px] text-[#5a5a5a]">Get the latest updates on ongoing legal cases.</div>
                </div>

                {/* Main Carousel */}
                <div className="relative w-full h-[70vh] mb-6">
                    <img 
                        className={`w-full h-full object-cover rounded-[20px] ${slideTransitionClasses}`}
                        alt="" 
                        src={carouselData[currentSlide].image}
                    />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-[30px] bg-[rgba(168,168,197,0.8)] p-6 rounded-[20px]">
                        <b className={`text-[24px] text-[#050b77] block mb-3 leading-tight ${slideTransitionClasses}`}>
                            {carouselData[currentSlide].title}
                        </b>
                        <div className={`text-[14px] text-[#050b77] mb-4 line-clamp-3 ${slideTransitionClasses}`}>
                            {carouselData[currentSlide].description}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                        >
                            <FaArrowLeft className="text-white" size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                        >
                            <FaArrowRight className="text-white" size={20} />
                        </button>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mb-6">
                    {carouselData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                currentSlide === index ? 'bg-[#050b77]' : 'bg-[#050b77]/50'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Bottom Cards */}
                <div className="space-y-4">
                    {currentCards.map((card, index) => (
                        <div 
                            key={card.id}
                            className={`bg-[#f9f9f9] rounded-[20px] overflow-hidden p-3 ${cardTransitionClasses}`}
                        >
                            <div className="flex gap-4">
                                <div className="relative w-[120px] h-[90px]">
                                    <img 
                                        className="w-full h-full object-cover rounded-[15px]"
                                        alt="" 
                                        src={card.image}
                                    />
                                    <div className="absolute inset-0 rounded-[15px] bg-gradient-to-b from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)]" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-[16px] mb-2 line-clamp-2">{card.title}</div>
                                    <div className="text-[12px] text-[#89898b]">{card.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const DesktopLayout = () => (
        <div className="w-full relative bg-[#d2d5ce] h-[1153px] overflow-hidden text-left text-[20px] text-[#162766] font-poppins">
            <img className="absolute top-0 left-0 w-full h-[1017px] object-cover overflow-hidden" alt="" src={BannerImg} />
            <div className="absolute top-[46px] left-[319px] bg-[#d2d5ce] w-[798px] h-[147px] text-center text-[45px]">
                <b className="absolute top-[23px] left-[calc(50%_-_372px)]">Updates on Active Legal Matters</b>
                <div className="absolute top-[91px] left-[calc(50%_-_254px)] text-[22px] text-[#5a5a5a]">Get the latest updates on ongoing legal cases.</div>
            </div>
            <div className="absolute top-[263px] left-[1px] w-[100vw] h-[599px] text-[34px] text-[#050b77]">
                <img 
                    className={`absolute top-0 left-0 w-[100vw] h-[732px] ${slideTransitionClasses}`} 
                    alt="" 
                    src={carouselData[currentSlide].image} 
                />
                <div
                    onClick={nextSlide}
                    className="absolute top-[calc(50%_+_204px)] left-[1328px] w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[rgba(255,255,255,0.4)] z-10"
                >
                    <FaArrowRight className="text-white" size={20} />
                </div>
                <div
                    onClick={prevSlide}
                    className="absolute top-[calc(50%_+_204px)] left-[1273px] w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[rgba(255,255,255,0.4)] z-10"
                >
                    <FaArrowLeft className="text-white" size={20} />
                </div>
                <div className="absolute top-[calc(50%_-_223.5px)] left-[calc(50%_-_673px)] backdrop-blur-[30px] rounded-[40px] bg-[rgba(168,168,197,0.7)] w-[743px] h-[346px]" />
                <img className="absolute top-[367px] left-[694px] w-[32px] h-[32px] overflow-hidden" alt="" src={LP4read} />
                <b className={`absolute top-[127px] left-[120px] leading-[49px] inline-block w-[601px] ${slideTransitionClasses}`}>
                    {carouselData[currentSlide].title}
                </b>
                <div className={`absolute top-[290px] left-[120px] text-[14px] leading-[26px] font-light inline-block w-[598px] ${slideTransitionClasses}`}>
                    {carouselData[currentSlide].description}
                </div>
            </div>
            
            <div className="absolute bottom-[850px] left-[50%] transform translate-x-[-50%] flex space-x-2">
                {carouselData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            currentSlide === index ? 'bg-white' : 'bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            
            <div className={`absolute top-[884px] left-[898px] rounded-[30px] bg-[#f9f9f9] w-[489px] h-[184px] overflow-hidden ${cardTransitionClasses}`}>
                <div className="absolute top-[32px] left-[249px] font-semibold inline-block w-[240px] h-[60px] overflow-hidden text-ellipsis line-clamp-2">
                    {currentCards[0].title}
                </div>
                <img className="absolute top-[14px] left-[19px] rounded-[30px] w-[205px] h-[156px] object-cover" alt="" src={currentCards[0].image} />
                <div className="absolute top-[14px] left-[19px] rounded-[30px] bg-gradient-to-b from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)] w-[205px] h-[156px]" />
                <div className="absolute top-[110px] left-[249px] text-[14px] text-[#89898b]">
                    {currentCards[0].date}
                </div>
            </div>
            
            <div className={`absolute top-[884px] left-[370px] rounded-[30px] bg-[#f9f9f9] w-[489px] h-[184px] overflow-hidden ${cardTransitionClasses}`}>
                <div className="absolute top-[32px] left-[244px] font-semibold inline-block w-[240px] h-[60px] overflow-hidden text-ellipsis line-clamp-2">
                    {currentCards[1].title}
                </div>
                <div className="absolute top-[12px] left-[16px] w-[205px] h-[156px]">
                    <img className="absolute top-0 left-0 rounded-[30px] w-[205px] h-[156px] object-cover" alt="" src={currentCards[1].image} />
                    <div className="absolute top-0 left-0 rounded-[30px] bg-gradient-to-b from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)] w-[205px] h-[156px]" />
                </div>
                <div className="absolute top-[110px] left-[244px] text-[14px] text-[#89898b]">
                    {currentCards[1].date}
                </div>
            </div>
        </div>
    );

    return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default LandingPage5;
