import { useState, useEffect } from 'react';
import BannerImg from '../../assets/BannerSVG.svg'
import LP6 from '../../assets/LP6.jpg'
import LP62 from '../../assets/LP62.jpg'
import LP63 from '../../assets/LP63.jpg'

const LandingPage6 = () => {
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

      // Desktop view component
      const DesktopView = () => (
            <div className="w-full relative bg-[#d2d5ce] h-[1020px] overflow-hidden text-left text-[22px] text-[#162766] font-poppins">
                  {/* <img className="absolute top-[3px] left-[-4px] w-[1449px] h-[1017px] overflow-hidden" alt="" src="Frame 90.svg" /> */}
                  <img
                        className="absolute top-0 left-0 w-full h-[1017px] object-cover overflow-hidden"
                        alt=""
                        src={BannerImg}
                  />
                  <div className="absolute top-[49px] left-[calc(50%-339px)] bg-[#d2d5ce] w-[677px] h-[160px] text-center text-[45px]">
                        <b className="absolute top-[23px] left-[calc(50%-203.5px)]">Recent Blog Posts</b>
                        <div className="absolute top-[91px] left-[calc(50%-267.5px)] text-[22px] text-[#5a5a5a]">Stay ahead with key law and regulation updates.</div>
                  </div>
                  <div className="absolute top-[235px] left-[1271px] text-[16px] underline font-medium">View More</div>
                  <div className="absolute top-[279px] left-[61px] w-[580px] h-[640px] text-right">
                        <img className="absolute h-full w-[96.03%] top-0 right-0 bottom-0 left-[3.97%] rounded-[30px] max-w-full overflow-hidden max-h-full object-cover" alt="" src="Vector 1.png" />
                        <img className="absolute h-full w-[96.03%] top-0 right-0 bottom-0 left-[3.97%] rounded-[30px] max-w-full overflow-hidden max-h-full" alt="" src={LP6} />
                        <div className="absolute w-[53.79%] top-[77.03%] left-0 inline-block">
                              <p className="m-0">
                                    <b className="leading-[38px]">{`Your Legal Options `}</b>
                              </p>
                              <p className="m-0">
                                    <b className="leading-[38px]">After a Personal injury</b>
                              </p>
                              <p className="m-0 text-[18px] leading-[34px] font-light"> Steps to take Immediately</p>
                        </div>
                  </div>
                  <div className="absolute top-[279px] left-[673px] w-[687px] h-[298px] text-[#f9f9f9]">
                        <img className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-[30px] max-w-full overflow-hidden max-h-full object-cover" alt="" src={LP62} />
                        <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-[30px] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)]" />
                        <div className="absolute w-[79.04%] top-[74.5%] left-[5.24%] inline-block">
                              <p className="m-0">
                                    <b className="leading-[32px]">{`Workplace Injuries `}</b>
                              </p>
                              <p className="m-0 text-[18px] leading-[34px] font-light">Understanding Your Rights and Legal Options</p>
                        </div>
                  </div>
                  <div className="absolute top-[606px] left-[673px] w-[687px] h-[313px] text-[#f9f9f9]">
                        <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-[30px] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)]" />
                        <img className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-[30px] max-w-full overflow-hidden max-h-full object-cover" alt="" src={LP63} />
                        <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 rounded-[30px] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]" />
                        <div className="absolute w-[72.63%] top-[76.04%] left-[5.24%] inline-block">
                              <p className="m-0">
                                    <b className="leading-[32px]">Zantac Lawsuit Update</b>
                              </p>
                              <p className="m-0 text-[18px] leading-[34px] font-light">Understanding Your Rights and Legal Options</p>
                        </div>
                  </div>
            </div>
      );

      // Mobile view component - optimized for smaller screens
      const MobileView = () => (
            <div className="w-full relative bg-[#d2d5ce] overflow-hidden text-left text-[18px] text-[#162766] font-poppins pb-8">
                  <img
                        className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
                        alt=""
                        src={BannerImg}
                  />
                  <div className="relative z-10 pt-8 pb-6 bg-[#d2d5ce] w-full text-center">
                        <b className="block text-[32px] mb-2">Recent Blog Posts</b>
                        <div className="text-[18px] text-[#5a5a5a] px-4">Stay ahead with key law and regulation updates.</div>
                  </div>
                  <div className="relative z-10 text-right px-4 mb-4 flex justify-end">
                        <span className="text-[14px] underline font-medium">View More</span>
                  </div>
                  
                  <div className="relative z-10 px-4 flex flex-col gap-6">
                        {/* First blog post */}
                        <div className="w-full h-[280px] relative rounded-[20px] overflow-hidden">
                              <img className="w-full h-full object-cover" alt="" src={LP6} />
                              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent text-left text-[#f9f9f9]">
                                    <p className="m-0 mb-1">
                                          <b className="leading-[26px]">Your Legal Options After a Personal injury</b>
                                    </p>
                                    <p className="m-0 text-[14px] leading-[20px] font-light">Steps to take Immediately</p>
                              </div>
                        </div>
                        
                        {/* Second blog post */}
                        <div className="w-full h-[200px] relative rounded-[20px] overflow-hidden">
                              <img className="w-full h-full object-cover" alt="" src={LP62} />
                              <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]" />
                              <div className="absolute bottom-0 left-0 w-full p-4 text-left text-[#f9f9f9]">
                                    <p className="m-0 mb-1">
                                          <b className="leading-[24px]">Workplace Injuries</b>
                                    </p>
                                    <p className="m-0 text-[14px] leading-[20px] font-light">Understanding Your Rights and Legal Options</p>
                              </div>
                        </div>
                        
                        {/* Third blog post */}
                        <div className="w-full h-[200px] relative rounded-[20px] overflow-hidden">
                              <img className="w-full h-full object-cover" alt="" src={LP63} />
                              <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)]" />
                              <div className="absolute bottom-0 left-0 w-full p-4 text-left text-[#f9f9f9]">
                                    <p className="m-0 mb-1">
                                          <b className="leading-[24px]">Zantac Lawsuit Update</b>
                                    </p>
                                    <p className="m-0 text-[14px] leading-[20px] font-light">Understanding Your Rights and Legal Options</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
      
      // Conditionally render based on screen size
      return isMobile ? <MobileView /> : <DesktopView />;
};

export default LandingPage6;
