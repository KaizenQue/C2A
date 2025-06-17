import BannerImg from '../../assets/BannerSVG.svg'
import { useState, useEffect } from 'react'

const AboutUs2 = () => {
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

    // Desktop view component
    const DesktopView = () => (
        <div className="w-full relative bg-[#162766] h-[676px] overflow-hidden text-center text-[25.64px] text-[#162766] font-poppins">
            <div className="absolute top-[-114px] left-[-3px] w-screen h-[788px] overflow-hidden">
                {/* <img style={{ position: "absolute", top: "-150px", left: "0px", width: "1449px", height: "4763.7px", }} alt="" src="actual grid.svg" /> */}
                <img 
                    className="absolute top-0 left-0 w-full h-[1017px] object-cover overflow-hidden" 
                    alt="" 
                    src={BannerImg} 
                />
                <div className="absolute top-[106px] left-[calc(50%-667px)] w-[1334px] h-[616px]">
                    <div className="absolute top-[-132px] left-[calc(50%-673px)] bg-[#162766] w-[1345px] h-[761px]" />
                    <div className="absolute top-[34px] left-[189px] rounded-[14px] bg-[#eae8e8] border-[1.6px] border-[rgba(168,193,231,0.22)] box-border w-[955.8px] h-[259.6px]">
                        <div className="absolute top-[calc(50%-69.71px)] left-[calc(50%-416.21px)] tracking-[0.02em] leading-[46.47px] font-semibold inline-block w-[833.2px]">{`At Connect2Attorney, we bridge the gap between individuals and the legal support they need, connecting clients with trusted, experienced attorneys dedicated to securing justice. `}</div>
                    </div>
                    <div className="absolute top-[322.42px] left-[189px] rounded-[14px] border-[1.6px] border-[rgba(168,193,231,0.22)] box-border w-[955.8px] h-[259.6px] text-white">
                        <div className="absolute top-[36.85px] left-[44.87px] tracking-[0.03em] leading-[46.47px] font-medium inline-block w-[866.1px]">Whether it's a personal injury case, a class action lawsuit, or general legal advice, our team of professionals ensures guidance every step of the way, empowering individuals to access the justice they deserve.</div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Mobile view component
    const MobileView = () => (
        <div className="w-full bg-[#162766] min-h-[700px] py-10 px-4 text-center text-[18px] text-[#162766] font-poppins relative overflow-hidden">
            <img 
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50" 
                alt="" 
                src={BannerImg} 
            />
            <div className="relative flex flex-col gap-6 items-center justify-center h-full">
                <div className="bg-[#eae8e8] rounded-[14px] border-[1.6px] border-[rgba(168,193,231,0.22)] box-border w-full p-6">
                    <div className="tracking-[0.02em] leading-[1.5] font-semibold">
                        {`At Connect2Attorney, we bridge the gap between individuals and the legal support they need, connecting clients with trusted, experienced attorneys dedicated to securing justice. `}
                    </div>
                </div>
                <div className="rounded-[14px] border-[1.6px] border-[rgba(168,193,231,0.22)] box-border w-full p-6 text-white">
                    <div className="tracking-[0.03em] leading-[1.5] font-medium">
                        Whether it's a personal injury case, a class action lawsuit, or general legal advice, our team of professionals ensures guidance every step of the way, empowering individuals to access the justice they deserve.
                    </div>
                </div>
            </div>
        </div>
    );

    return isMobile ? <MobileView /> : <DesktopView />;
};

export default AboutUs2;
