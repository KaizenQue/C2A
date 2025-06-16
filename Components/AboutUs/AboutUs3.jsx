import BannerImg from '../../assets/BannerSVG.svg'
import { useState, useEffect } from 'react'

const AboutUs3 =()=>{
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Content for cards
    const cardContent = [
        {
            id: 1,
            title: "Online form",
            description: <><span className="underline font-semibold">Connect2Attorney</span><span> is here to connect you with top legal experts for the justice you deserve.</span></>
        },
        {
            id: 2,
            title: "Online form",
            description: <><span className="underline font-semibold">Connect2Attorney</span><span> is here to connect you with top legal experts for the justice you deserve.</span></>
        },
        {
            id: 3,
            title: "Online form",
            description: <><span className="underline font-semibold">Connect2Attorney</span><span> is here to connect you with top legal experts for the justice you deserve.</span></>
        },
        {
            id: 4,
            title: "Online form",
            description: <><span className="underline font-semibold">Connect2Attorney</span><span> is here to connect you with top legal experts for the justice you deserve.</span></>
        }
    ];

    // Card component
    const Card = ({ id, title, description }) => (
        <div className="shadow-[0px_3.9px_3.91px_rgba(0,0,0,0.25)] rounded-[28px] bg-[#d2d5ce] border border-[#162766] box-border w-full md:w-[266px] h-auto md:h-[450px] flex flex-col items-center justify-start p-[30px_20px] md:p-[60px_38.7px] gap-[20.8px]">
            <div className="w-[30.3px] rounded-[293.06px] bg-[#162766] h-[30.3px] flex flex-col items-center justify-center p-[9.8px] box-border text-[#f9f9f9]">
                <b className="w-[6.8px] relative leading-[44.94px] inline-block">{id}</b>
            </div>
            <b className="w-full md:w-[222.8px] relative text-[30px] md:text-[39.07px] inline-block font-exo text-center">{title}</b>
            <div className="self-stretch relative text-sm md:text-base leading-[1.5] md:leading-[44.94px]">
                {description}
            </div>
        </div>
    );

    return(
        <div className="relative flex flex-col items-center bg-[#162766] bg-cover bg-center bg-no-repeat w-full py-5" style={{backgroundImage: `url(${BannerImg})`}}>
            
            <div className="bg-[#162766] w-full md:w-[445px] h-auto md:h-[170px] text-[30px] md:text-[45px] text-[#f9f9f9] text-center mb-10 px-4 md:px-0">
                <b>How It Works</b>
                <div className="text-[18px] md:text-[22px] text-[#89898b] text-center">How We Simplify the Legal Process</div>
            </div>
            
            {isMobile ? (
                // Mobile view - 2x2 grid
                <div className="grid grid-cols-2 gap-4 px-4 w-full">
                    {cardContent.map((card) => (
                        <Card key={card.id} {...card} />
                    ))}
                </div>
            ) : (
                // Desktop view - row of 4 cards
                <div className="flex justify-center gap-[30px] flex-wrap w-full relative">
                    {cardContent.map((card) => (
                        <Card key={card.id} {...card} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default AboutUs3