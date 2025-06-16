import { useState, useEffect } from 'react';
import LP2 from '../../assets/LP2.svg';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import BannerImg from '../../assets/BannerSVG.svg'

const LegalServices = () => {
    const [openFaq, setOpenFaq] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Check if the screen is mobile sized
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const faqData = [
        {
            question: "How Do I Know If I Qualify for a Mass Tort Case?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            question: "What Happens After I Submit My Case for Review?",
            answer: "Once you submit your case for review, our team of legal experts will carefully evaluate the details of your situation. We typically respond within 24-48 hours with an assessment of your case and potential next steps. If your case qualifies, we'll connect you with an appropriate attorney who specializes in your specific legal matter."
        },
        {
            question: "Is There a Fee for Using Connect2Attorney?",
            answer: "Connect2Attorney provides free initial case evaluations. We believe everyone deserves access to quality legal assistance regardless of their financial situation. If you proceed with legal representation, fee structures will be clearly explained by your attorney before any commitment is made."
        },
        {
            question: "What Types of Cases Does Connect2Attorney Handle?",
            answer: "We handle a wide variety of legal matters including personal injury, medical malpractice, product liability, mass torts, employment law, and more. Our network includes attorneys who specialize in different practice areas to ensure you receive the most qualified representation for your specific case."
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Desktop FAQ component
    const DesktopFAQ = () => (
        <div className="w-full max-w-[896px] flex flex-col gap-5">
            {faqData.map((faq, index) => (
                <div 
                    key={index}
                    className="shadow-[0px_5px_16px_rgba(8,15,52,0.06)] rounded-[24px] bg-[#162766] w-full overflow-hidden transition-all duration-300"
                >
                    <div 
                        onClick={() => toggleFaq(index)}
                        className="p-[30px_20px] flex justify-between items-center cursor-pointer"
                    >
                        <div className="leading-7 font-medium text-[22px]">
                            {faq.question}
                        </div>
                        <div className="flex justify-center items-center w-8 h-8 text-[#f9f9f9] transition-transform duration-300">
                            {openFaq === index ? 
                                <IoIosArrowUp size={24} /> : 
                                <IoIosArrowDown size={24} />
                            }
                        </div>
                    </div>
                    
                    <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out leading-[30px] text-[#9e9cb6] text-[18px] ${
                        openFaq === index ? "max-h-[300px]" : "max-h-0"
                    }`}>
                        <div className="px-5 pb-[30px]">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    // Mobile FAQ component with optimized styling for smaller screens
    const MobileFAQ = () => (
        <div className="w-full flex flex-col gap-3">
            {faqData.map((faq, index) => (
                <div 
                    key={index}
                    className="shadow-[0px_3px_10px_rgba(8,15,52,0.06)] rounded-[16px] bg-[#162766] w-full overflow-hidden transition-all duration-300"
                >
                    <div 
                        onClick={() => toggleFaq(index)}
                        className="p-[15px] flex justify-between items-center cursor-pointer"
                    >
                        <div className="leading-6 font-medium text-[16px] pr-2">
                            {faq.question}
                        </div>
                        <div className="flex-shrink-0 flex justify-center items-center w-6 h-6 text-[#f9f9f9] transition-transform duration-300">
                            {openFaq === index ? 
                                <IoIosArrowUp size={18} /> : 
                                <IoIosArrowDown size={18} />
                            }
                        </div>
                    </div>
                    
                    <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out leading-[24px] text-[#9e9cb6] text-[14px] ${
                        openFaq === index ? "max-h-[500px]" : "max-h-0"
                    }`}>
                        <div className="px-4 pb-[15px]">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="w-full relative bg-[#d2d5ce] overflow-hidden text-left text-[22px] text-[#f9f9f9] font-['Poppins'] pt-0 pb-5">
            <div className="relative max-w-[1442px] mx-auto px-[15px]">
                <img 
                    className="absolute top-0 left-0 w-full h-full md:h-[1017px] object-cover overflow-hidden" 
                    alt="Background pattern" 
                    src={BannerImg} 
                />
                
                <div className="relative flex flex-col items-center p-2 md:p-5 mt-5 md:mt-10">
                    <div className="flex items-center mb-3 md:mb-5">
                        <h1 className="text-[28px] md:text-[clamp(32px,5vw,45px)] text-[#162766] text-center font-bold">
                            Frequently Asked Questions
                        </h1>
                        <img 
                            className="relative bottom-[15px] md:bottom-[25px] w-[40px] h-[40px] md:w-[51.2px] md:h-[52.5px] object-contain" 
                            alt="" 
                            src={LP2} 
                        />
                    </div>
                    
                    <div className="text-[#9193a7] text-center mb-5 md:mb-10 text-[16px] md:text-[clamp(16px,3vw,22px)]">
                        Have questions about our services? We've got answers.
                    </div>
                    
                    {/* Conditional rendering based on screen size */}
                    {isMobile ? <MobileFAQ /> : <DesktopFAQ />}
                </div>
            </div>
        </div>
    );
};

export default LegalServices;
