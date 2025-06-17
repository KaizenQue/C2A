import MT from '../../assets/MT.jpg';
import MT2 from '../../assets/MT2.jpg';
import MT3 from '../../assets/MT3.jpg';
import MT4 from '../../assets/MT4.jpg';
import BannerImg from '../../assets/BannerSVG.svg';

import { useEffect, useRef, useState } from 'react';


const MassTort = () => {
    const [animationDuration, setAnimationDuration] = useState(30);
    const [isMobile, setIsMobile] = useState(false);
    const marqueeRef = useRef(null);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkIsMobile();

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    useEffect(() => {
        if (marqueeRef.current) {
            const contentWidth = marqueeRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            const calculatedDuration = (contentWidth / viewportWidth) * 15;
            setAnimationDuration(calculatedDuration);
        }
    }, [isMobile]); 

    const keyframesStyle = `
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    `;

    const MobileLayout = () => (
        <div className="w-screen relative bg-[#d2d5ce] h-[1785px] overflow-hidden text-left text-base text-[#f9f9f9] font-poppins">
            <style>{keyframesStyle}</style>
            
            <img
                className="absolute top-0 left-0 w-full h-[700px] object-cover overflow-hidden"
                alt="Background pattern"
                src={BannerImg}
            />
            <img className="absolute top-0 left-0 w-screen h-[800px] object-cover" alt="" src={MT} />
            
            <div className="absolute top-0 left-0 bg-gradient-to-b from-[rgba(22,39,102,0)] via-[rgba(22,39,102,0.32)_15.2%,rgba(22,39,102,0.98)_44.95%,rgba(22,39,102,0.98)_55.67%,#162766_75.28%,#162766_80%,#7c7fa4_85.84%,rgba(164,167,186,0.65)_89.92%,rgba(210,213,206,0.4)_94.37%,rgba(210,213,206,0.72)_97.21%] to-[#d2d5ce] w-screen h-[2000px] overflow-hidden text-[36px] text-[#050b77]">
                <div className="flex absolute top-[1060px] left-1/2 -translate-x-1/2 justify-center w-[240px]">
                    <img className="rounded-full w-[70px] h-[70px] object-cover mx-[5px]" alt="" src={MT3} />
                    <img className="rounded-full w-[70px] h-[70px] object-cover mx-[5px]" alt="" src={MT2} />
                    <img className="rounded-full w-[70px] h-[70px] object-cover mx-[5px]" alt="" src={MT4} />
                </div>
                <b className="absolute top-[1700px] left-[20px] right-[20px] text-center text-[28px] uppercase">United Across 8 Cases for Accountability.</b>
            </div>

            <div className="absolute top-[1250px] left-0 bg-[#192a68] w-full h-[100px] overflow-hidden text-[50px]">
                <div
                    ref={marqueeRef}
                    className="flex absolute top-[15px] h-[70px]"
                    style={{
                        animation: `marquee ${animationDuration}s linear infinite`,
                        whiteSpace: 'nowrap'
                    }}
                >
                    <div className="flex items-center">
                        <div className="relative uppercase font-medium inline-block mr-[30px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[20px] h-[20px] mr-[30px]" />
                        <div className="relative uppercase font-medium inline-block mr-[30px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[20px] h-[20px] mr-[30px]" />
                    </div>

                    <div className="flex items-center">
                        <div className="relative uppercase font-medium inline-block mr-[30px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[20px] h-[20px] mr-[30px]" />
                        <div className="relative uppercase font-medium inline-block mr-[30px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[20px] h-[20px] mr-[30px]" />
                    </div>
                </div>
            </div>

            <div className="absolute top-[520px] left-[20px] text-[22px] leading-[28px] uppercase font-semibold inline-block w-[110px]">
                <p className="m-0">{`Justice `}</p>
                <p className="m-0">for All.</p>
            </div>
            
            <div className="absolute top-[520px] right-[20px] text-[22px] leading-[28px] uppercase font-semibold inline-block w-[170px]">Strength in Numbers.</div>
            
            <div className="absolute top-[600px] left-0 right-0 text-[32px] uppercase font-['Post_No_Bills_Colombo_ExtraBold'] text-center px-[15px]">Championing Justice</div>
            
            <div className="absolute top-[650px] left-0 right-0 text-[32px] uppercase font-['Post_No_Bills_Colombo_ExtraBold'] text-center px-[15px]">for the Victimized</div>
            
            <div className="absolute top-[730px] left-[20px] right-[20px] text-[22px] leading-[30px] capitalize font-medium text-center">Join thousands seeking accountability for corporate negligence.</div>
            
            <div className="absolute top-[1400px] left-[20px] right-[20px] text-[22px] capitalize font-medium text-center">We specialize in class action cases, uniting individuals with shared grievances to hold corporations accountable.</div>
            
            {/* <img className="absolute top-[20px] left-[20px] w-[36px] h-[36px] overflow-hidden" alt="" src="Frame.svg" /> */}
            
            <div className="absolute top-[880px] left-1/2 -translate-x-1/2 text-[42px] uppercase font-semibold text-[#f2c438] text-center w-[140px]">1,000+</div>
            
            <div className="absolute top-[930px] left-1/2 -translate-x-1/2 text-[20px] leading-[30px] font-medium text-white text-center w-[140px]">Fought Back</div>
            
            <div className="absolute top-[980px] left-1/2 -translate-x-1/2 text-[32px] leading-[36px] uppercase font-medium text-white text-center w-[200px]">Join Them!</div>
            
            <div className="absolute top-[20px] left-[20px] w-[36px] h-[36px] rounded-full bg-white/30 flex justify-center items-center cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19L8 12L15 5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );

    const DesktopLayout = () => (
        <div className="w-screen relative bg-[#d2d5ce] h-[2115px] overflow-hidden text-left text-lg text-[#f9f9f9] font-poppins">
            <style>{keyframesStyle}</style>
            <img
                className="absolute top-0 left-0 w-full h-[1017px] object-cover overflow-hidden"
                alt="Background pattern"
                src={BannerImg}
            />
            <img className="absolute top-0 left-0 w-screen h-[1134px] object-cover" alt="" src={MT} />
            <div className="absolute top-0 left-0 bg-gradient-to-b from-[rgba(22,39,102,0)] via-[rgba(22,39,102,0.32)_15.2%,rgba(22,39,102,0.98)_44.95%,rgba(22,39,102,0.98)_55.67%,#162766_75.28%,#162766_80%,#7c7fa4_86.84%,rgba(164,167,186,0.65)_90.92%,rgba(210,213,206,0.4)_95.37%,rgba(210,213,206,0.72)_98.21%] to-[#d2d5ce] w-screen h-[2143px] overflow-hidden text-[54px] text-[#050b77]">
                <img className="absolute top-[1280px] left-[126px] rounded-full w-[92px] h-[92px] object-cover" alt="" src={MT2} />
                <img className="absolute top-[1280px] left-[54px] rounded-full w-[92px] h-[92px] object-cover" alt="" src={MT3} />
                <b className="absolute top-[2001px] left-[calc(50%-644px)] uppercase">United Across 8 Cases for Accountability.</b>
                <img className="absolute top-[1280px] left-[195px] rounded-full w-[92px] h-[92px] object-cover" alt="" src={MT4} />
            </div>

            <div className="absolute top-[1532px] left-0 bg-[#192a68] w-full h-[164px] overflow-hidden text-[90px]">
                <div
                    ref={marqueeRef}
                    className="flex absolute top-[23px] h-[118px]"
                    style={{
                        animation: `marquee ${animationDuration}s linear infinite`,
                        whiteSpace: 'nowrap'
                    }}
                >
                    <div className="flex items-center">
                        <div className="relative uppercase font-medium inline-block mr-[60px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[29px] h-[29px] mr-[60px]" />
                        <div className="relative uppercase font-medium inline-block mr-[60px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[29px] h-[29px] mr-[60px]" />
                        <div className="relative uppercase font-medium inline-block mr-[60px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[29px] h-[29px] mr-[60px]" />
                        <div className="relative uppercase font-medium inline-block mr-[60px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[29px] h-[29px] mr-[60px]" />
                    </div>

                    <div className="flex items-center">
                        <div className="relative uppercase font-medium inline-block mr-[60px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[29px] h-[29px] mr-[60px]" />
                        <div className="relative uppercase font-medium inline-block mr-[60px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[29px] h-[29px] mr-[60px]" />
                        <div className="relative uppercase font-medium inline-block mr-[60px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[29px] h-[29px] mr-[60px]" />
                        <div className="relative uppercase font-medium inline-block mr-[60px] whitespace-nowrap">CLASS ACTION</div>
                        <div className="rounded-full bg-[#f2c438] w-[29px] h-[29px] mr-[60px]" />
                    </div>
                </div>
            </div>

            <div className="absolute top-[790px] left-[101px] text-[26px] leading-[30px] uppercase font-semibold inline-block w-[112px]">
                <p className="m-0">{`Justice `}</p>
                <p className="m-0">for All.</p>
            </div>
            <div className="absolute top-[790px] left-[248px] text-[26px] leading-[30px] uppercase font-semibold inline-block w-[221px]">Strength in Numbers.</div>
            <div className="absolute top-[925px] left-[53px] text-[112px] uppercase font-['Post_No_Bills_Colombo_ExtraBold'] text-center inline-block w-[83vw]">Championing Justice </div>
            <div className="absolute top-[1286px] left-[709px] text-[34px] leading-[58px] capitalize font-medium inline-block w-[524px]">Join thousands seeking accountability for corporate negligence.</div>
            <div className="absolute top-[1777px] left-[calc(50%-602px)] text-[28px] capitalize font-medium text-center inline-block w-[1216px]">We specialize in class action cases, uniting individuals with shared grievances to hold corporations accountable.</div>
            <div className="absolute top-[1055px] left-[175px] text-[112px] uppercase font-['Post_No_Bills_Colombo_ExtraBold'] text-center inline-block w-[95vw]">for the Victimized</div>
            
            <div className="absolute top-[28px] left-[44px] w-[42px] h-[42px] rounded-full bg-white/30 flex justify-center items-center cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19L8 12L15 5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            
            <div className="absolute top-[1290px] left-[311px] text-[48px] uppercase font-semibold text-[#f2c438]">1,000+</div>
            <div className="absolute top-[1354px] left-[311px] text-[20px] leading-[40px] font-medium text-white">Fought Back</div>
            <div className="absolute top-[1409.48px] left-[57px] text-[40.53px] leading-[42.22px] uppercase font-medium text-white text-center">Join Them!</div>
        </div>
    );

    return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default MassTort;
