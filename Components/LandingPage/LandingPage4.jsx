import LP4 from '../../assets/LP4.jpg'
import LP42 from '../../assets/LP42.jpg'
import LP43 from '../../assets/LP43.jpg'
import LP4read from '../../assets/LP4Read.svg'
import { useState, useEffect } from 'react'

const LandingPage4 = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const MobileLayout = () => (
        <div className="w-full relative bg-[#d2d5ce] min-h-screen overflow-hidden text-center font-poppins px-4 py-8">
            <div className="mb-8">
                <b className="text-[32px] text-[#162766] block mb-3">Active Lawsuits</b>
                <div className="text-[18px] text-[#5a5a5a]">Stay ahead with key law and regulation updates.</div>
            </div>

            <div className="relative w-full">
                {/* Main AFFF Card */}
                <div className="relative w-full h-[70vh] mb-6">
                    <img 
                        className="w-full h-full object-cover rounded-[20px]" 
                        alt="" 
                        src={LP4}
                    />
                    <div className="absolute bottom-0 left-0 right-0 backdrop-blur-[20px] rounded-[20px] bg-[rgba(168,168,197,0.8)] p-6 text-left">
                        <b className="text-[28px] text-[#050b77] block mb-3 leading-tight">AFFF Claim</b>
                        <div className="text-[14px] text-[#050b77] font-medium mb-4">
                            An AFFF claim seeks compensation for health issues caused by exposure to firefighting foam containing toxic PFAS chemicals. Common claims include cancer and groundwater contamination cases.
                        </div>
                        <div className="flex items-center gap-2 text-[12px] text-[rgba(5,11,119,0.5)]">
                            <div className="font-medium">Read more</div>
                            <img className="w-[20px] h-[20px]" alt="" src={LP4read} />
                        </div>
                    </div>
                </div>

                {/* Additional Cases Cards */}
                <div className="space-y-4">
                    {/* Roundup Case Card */}
                    <div className="w-full rounded-[20px] bg-[#f9f9f9] overflow-hidden p-3">
                        <div className="flex items-center gap-4">
                            <div className="relative w-[140px] h-[100px]">
                                <img 
                                    className="w-full h-full object-cover rounded-[15px]" 
                                    alt="" 
                                    src={LP42}
                                />
                                <div className="absolute inset-0 rounded-[15px] bg-gradient-to-b from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)]" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[20px] font-semibold text-left">Roundup Lawsuit</div>
                            </div>
                        </div>
                    </div>

                    {/* NEC Case Card */}
                    <div className="w-full rounded-[20px] bg-[#f9f9f9] overflow-hidden p-3">
                        <div className="flex items-center gap-4">
                            <div className="relative w-[140px] h-[100px]">
                                <img 
                                    className="w-full h-full object-cover rounded-[15px]" 
                                    alt="" 
                                    src={LP43}
                                />
                                <div className="absolute inset-0 rounded-[15px] bg-gradient-to-b from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)]" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[20px] font-semibold text-left">NEC Lawsuit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const DesktopLayout = () => (
        <div className="w-full relative bg-[#d2d5ce] h-[1133px] overflow-hidden flex flex-col items-center justify-start p-[80px_0px] box-border gap-[70px] text-center text-[45px] text-[#162766] font-poppins">
            <div className="self-stretch flex flex-col items-center justify-start">
                <b className="self-stretch relative">Active Lawsuits</b>
                <div className="self-stretch relative text-[22px] text-[#5a5a5a]">Stay ahead with key law and regulation updates.</div>
            </div>
            <div className="w-full flex flex-col items-start justify-start p-[109px_1px] box-border relative gap-[10px] min-w-[600px] max-w-[1600px] text-left text-[24px]">
                <img className="w-full absolute m-0 h-[79.78%] top-0 right-0 bottom-[20.22%] left-0 max-w-full overflow-hidden max-h-full object-cover z-0" alt="" src={LP4} />
                <div className="w-[1437px] flex flex-col items-start justify-start gap-[156px] z-[1] text-[34px] text-[#050b77]">
                    <div className="w-full backdrop-blur-[20.01px] rounded-[0px_40.03px_40.03px_0px] bg-[rgba(168,168,197,0.7)] flex flex-col items-start justify-center p-[34px_84.1px] box-border min-w-[500px] max-w-[700px]">
                        <div className="self-stretch flex flex-col items-start justify-center gap-[20px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                                <b className="self-stretch relative leading-[49.03px]">AFFF Claim</b>
                                <div className="self-stretch relative text-[14px] leading-[26.02px] font-medium">An AFFF claim seeks compensation for health issues caused by exposure to firefighting foam containing toxic PFAS chemicals. Common claims include cancer and groundwater contamination cases.</div>
                            </div>
                            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] text-[12px] text-[rgba(5,11,119,0.5)]">
                                <div className="relative font-medium">Read more</div>
                                <img className="w-[20px] relative h-[20px]" alt="" src={LP4read} />
                            </div>
                        </div>
                    </div>
                    <div className="w-[100px] relative bg-[#d9d9d9] h-[100px]" />
                    <div className="self-stretch flex flex-row items-end justify-end p-[0px_60px_0px_0px] gap-[18px]">
                        <img className="w-[32px] relative h-[32px] overflow-hidden shrink-0 object-contain" alt="" src={LP42} />
                        <img className="w-[32px] relative h-[32px] overflow-hidden shrink-0" alt="" src="Frame.svg" />
                    </div>
                </div>
                <div className="w-[514px] m-0 absolute top-[611px] left-[375px] rounded-[30px] bg-[#f9f9f9] h-[188px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-[16px_24px_16px_16px] box-border min-w-[400px] min-h-[146.02px] z-[2]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[18px]">
                        <div className="flex-1 flex flex-col items-start justify-start">
                            <div className="self-stretch relative h-[156px]">
                                <img className="absolute top-0 left-0 rounded-[30px] w-[228px] h-[156px] object-cover" alt="" src={LP42} />
                                <div className="absolute top-0 left-0 rounded-[30px] bg-gradient-to-b from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)] w-[228px] h-[156px]" />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="flex-1 relative font-semibold">Roundup Lawsuit</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[515px] m-0 absolute top-[611px] left-[904px] rounded-[30px] bg-[#f9f9f9] h-[188px] overflow-hidden shrink-0 flex flex-col items-center justify-center p-[16px_24px_16px_16px] box-border min-w-[400px] min-h-[146.02px] z-[3]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[18px]">
                        <div className="w-[205px] flex flex-col items-start justify-start">
                            <div className="w-[205px] relative h-[156px]">
                                <img className="absolute top-0 left-0 rounded-[30px] w-[205px] h-[156px] object-cover" alt="" src={LP43}/>
                                <div className="absolute top-0 left-0 rounded-[30px] bg-gradient-to-b from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)] w-[205px] h-[156px]" />
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start">
                            <div className="self-stretch flex flex-row items-center justify-start">
                                <div className="flex-1 relative font-semibold">NEC Lawsuit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default LandingPage4;
