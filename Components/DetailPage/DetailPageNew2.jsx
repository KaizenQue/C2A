import { useState, useEffect } from 'react';

const DetailPageNew2 = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    useEffect(() => {
        // Function to check if viewport is mobile width
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleNavClick = (section) => {
        setActiveSection(section);
        if (isMobile) {
            setMobileMenuOpen(false); // Close mobile menu when a section is selected
        }
    };

    return (
        <div className="flex flex-col md:flex-row mx-auto my-[50px] max-w-[1400px] w-full px-4 md:px-0">
            {/* Mobile Header and Menu Toggle */}
            {isMobile && (
                <div className="w-full mb-6">
                    <div className="flex justify-between items-center bg-[#162766] text-white rounded-[14px] py-3 px-4">
                        <h2 className="font-semibold text-[18px]">
                            {activeSection === 'introduction' && 'Introduction'}
                            {activeSection === 'what-is' && 'What is Depo-Provera?'}
                            {activeSection === 'health-risks' && 'Health Risks and Side Effects'}
                            {activeSection === 'why-lawsuits' && 'Why Are Lawsuits Being Filed?'}
                            {activeSection === 'who-can-file' && 'Who Can File a Lawsuit?'}
                            {activeSection === 'compensation' && 'Types of Compensation Available'}
                            {activeSection === 'steps' && 'Steps to File a Lawsuit'}
                            {activeSection === 'faqs' && 'FAQs About Depo-Provera Lawsuits'}
                            {activeSection === 'conclusion' && 'Conclusion'}
                        </h2>
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2"
                        >
                            {mobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                    
                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="w-full bg-[#162766] rounded-b-[14px] text-white mt-1 shadow-md">
                            <div 
                                className={`py-3 px-4 border-b border-white/20 ${activeSection === 'introduction' ? 'bg-white/20' : ''}`}
                                onClick={() => handleNavClick('introduction')}
                            >
                                <div className="font-medium text-[16px]">Introduction</div>
                            </div>
                            
                            <div 
                                className={`py-3 px-4 border-b border-white/20 ${activeSection === 'what-is' ? 'bg-white/20' : ''}`}
                                onClick={() => handleNavClick('what-is')}
                            >
                                <div className="font-medium text-[16px]">What is Depo-Provera?</div>
                            </div>
                            
                            <div 
                                className={`py-3 px-4 border-b border-white/20 ${activeSection === 'health-risks' ? 'bg-white/20' : ''}`}
                                onClick={() => handleNavClick('health-risks')}
                            >
                                <div className="font-medium text-[16px]">Health Risks and Side Effects</div>
                            </div>
                            
                            <div 
                                className={`py-3 px-4 border-b border-white/20 ${activeSection === 'why-lawsuits' ? 'bg-white/20' : ''}`}
                                onClick={() => handleNavClick('why-lawsuits')}
                            >
                                <div className="font-medium text-[16px]">Why Are Lawsuits Being Filed?</div>
                            </div>
                            
                            <div 
                                className={`py-3 px-4 border-b border-white/20 ${activeSection === 'who-can-file' ? 'bg-white/20' : ''}`}
                                onClick={() => handleNavClick('who-can-file')}
                            >
                                <div className="font-medium text-[16px]">Who Can File a Lawsuit?</div>
                            </div>
                            
                            <div 
                                className={`py-3 px-4 border-b border-white/20 ${activeSection === 'compensation' ? 'bg-white/20' : ''}`}
                                onClick={() => handleNavClick('compensation')}
                            >
                                <div className="font-medium text-[16px]">Types of Compensation Available</div>
                            </div>
                            
                            <div 
                                className={`py-3 px-4 border-b border-white/20 ${activeSection === 'steps' ? 'bg-white/20' : ''}`}
                                onClick={() => handleNavClick('steps')}
                            >
                                <div className="font-medium text-[16px]">Steps to File a Lawsuit</div>
                            </div>
                            
                            <div 
                                className={`py-3 px-4 border-b border-white/20 ${activeSection === 'faqs' ? 'bg-white/20' : ''}`}
                                onClick={() => handleNavClick('faqs')}
                            >
                                <div className="font-medium text-[16px]">FAQs About Depo-Provera Lawsuits</div>
                            </div>
                            
                            <div 
                                className={`py-3 px-4 ${activeSection === 'conclusion' ? 'bg-white/20' : ''}`}
                                onClick={() => handleNavClick('conclusion')}
                            >
                                <div className="font-medium text-[16px]">Conclusion</div>
                            </div>
                        </div>
                    )}
                </div>
            )}
            
            {/* Desktop Sidebar - 20% width, hidden on mobile */}
            {!isMobile && (
                <div className="w-1/5 bg-[#162766] rounded-[14px] text-white overflow-hidden sticky top-[20px] self-start max-h-full">
                    <div 
                        className={`relative py-[15px] px-[27px] cursor-pointer flex justify-between items-center transition-colors duration-300 ${activeSection === 'introduction' ? 'bg-white/20' : 'bg-transparent'}`}
                        onClick={() => handleNavClick('introduction')}
                    >
                        <div className="uppercase font-semibold text-[16px] w-[calc(100%-30px)]">Introduction</div>
                        <div className={`w-[24px] h-[24px] rounded-full flex justify-center items-center border border-white ${activeSection === 'introduction' ? 'bg-white' : 'bg-transparent'}`}>
                            <div className={`w-[8px] h-[8px] border-t-2 border-r-2 ${activeSection === 'introduction' ? 'border-[#162766]' : 'border-white'} rotate-45`}></div>
                        </div>
                    </div>
                    
                    <div 
                        className={`relative py-[15px] px-[27px] cursor-pointer flex justify-between items-center transition-colors duration-300 ${activeSection === 'what-is' ? 'bg-white/20' : 'bg-transparent'}`}
                        onClick={() => handleNavClick('what-is')}
                    >
                        <div className="uppercase font-semibold text-[16px] w-[calc(100%-30px)]">What is Depo-Provera?</div>
                        <div className={`w-[24px] h-[24px] rounded-full flex justify-center items-center border border-white ${activeSection === 'what-is' ? 'bg-white' : 'bg-transparent'}`}>
                            <div className={`w-[8px] h-[8px] border-t-2 border-r-2 ${activeSection === 'what-is' ? 'border-[#162766]' : 'border-white'} rotate-45`}></div>
                        </div>
                    </div>
                    
                    <div 
                        className={`relative py-[15px] px-[27px] cursor-pointer flex justify-between items-center transition-colors duration-300 ${activeSection === 'health-risks' ? 'bg-white/20' : 'bg-transparent'}`}
                        onClick={() => handleNavClick('health-risks')}
                    >
                        <div className="uppercase font-semibold text-[16px] w-[calc(100%-30px)]">Health Risks and Side Effects Linked to Depo-Provera</div>
                        <div className={`w-[24px] h-[24px] rounded-full flex justify-center items-center border border-white ${activeSection === 'health-risks' ? 'bg-white' : 'bg-transparent'}`}>
                            <div className={`w-[8px] h-[8px] border-t-2 border-r-2 ${activeSection === 'health-risks' ? 'border-[#162766]' : 'border-white'} rotate-45`}></div>
                        </div>
                    </div>
                    
                    <div 
                        className={`relative py-[15px] px-[27px] cursor-pointer flex justify-between items-center transition-colors duration-300 ${activeSection === 'why-lawsuits' ? 'bg-white/20' : 'bg-transparent'}`}
                        onClick={() => handleNavClick('why-lawsuits')}
                    >
                        <div className="uppercase font-semibold text-[16px] w-[calc(100%-30px)]">Why Are Lawsuits Being Filed?</div>
                        <div className={`w-[24px] h-[24px] rounded-full flex justify-center items-center border border-white ${activeSection === 'why-lawsuits' ? 'bg-white' : 'bg-transparent'}`}>
                            <div className={`w-[8px] h-[8px] border-t-2 border-r-2 ${activeSection === 'why-lawsuits' ? 'border-[#162766]' : 'border-white'} rotate-45`}></div>
                        </div>
                    </div>
                    
                    <div 
                        className={`relative py-[15px] px-[27px] cursor-pointer flex justify-between items-center transition-colors duration-300 ${activeSection === 'who-can-file' ? 'bg-white/20' : 'bg-transparent'}`}
                        onClick={() => handleNavClick('who-can-file')}
                    >
                        <div className="uppercase font-semibold text-[16px] w-[calc(100%-30px)]">Who Can File a Lawsuit?</div>
                        <div className={`w-[24px] h-[24px] rounded-full flex justify-center items-center border border-white ${activeSection === 'who-can-file' ? 'bg-white' : 'bg-transparent'}`}>
                            <div className={`w-[8px] h-[8px] border-t-2 border-r-2 ${activeSection === 'who-can-file' ? 'border-[#162766]' : 'border-white'} rotate-45`}></div>
                        </div>
                    </div>
                    
                    <div 
                        className={`relative py-[15px] px-[27px] cursor-pointer flex justify-between items-center transition-colors duration-300 ${activeSection === 'compensation' ? 'bg-white/20' : 'bg-transparent'}`}
                        onClick={() => handleNavClick('compensation')}
                    >
                        <div className="uppercase font-semibold text-[16px] w-[calc(100%-30px)]">Types of Compensation Available</div>
                        <div className={`w-[24px] h-[24px] rounded-full flex justify-center items-center border border-white ${activeSection === 'compensation' ? 'bg-white' : 'bg-transparent'}`}>
                            <div className={`w-[8px] h-[8px] border-t-2 border-r-2 ${activeSection === 'compensation' ? 'border-[#162766]' : 'border-white'} rotate-45`}></div>
                        </div>
                    </div>
                    
                    <div 
                        className={`relative py-[15px] px-[27px] cursor-pointer flex justify-between items-center transition-colors duration-300 ${activeSection === 'steps' ? 'bg-white/20' : 'bg-transparent'}`}
                        onClick={() => handleNavClick('steps')}
                    >
                        <div className="uppercase font-semibold text-[16px] w-[calc(100%-30px)]">Steps to File a Depo-Provera Lawsuit</div>
                        <div className={`w-[24px] h-[24px] rounded-full flex justify-center items-center border border-white ${activeSection === 'steps' ? 'bg-white' : 'bg-transparent'}`}>
                            <div className={`w-[8px] h-[8px] border-t-2 border-r-2 ${activeSection === 'steps' ? 'border-[#162766]' : 'border-white'} rotate-45`}></div>
                        </div>
                    </div>
                    
                    <div 
                        className={`relative py-[15px] px-[27px] cursor-pointer flex justify-between items-center transition-colors duration-300 ${activeSection === 'faqs' ? 'bg-white/20' : 'bg-transparent'}`}
                        onClick={() => handleNavClick('faqs')}
                    >
                        <div className="uppercase font-semibold text-[16px] w-[calc(100%-30px)]">FAQs About Depo-Provera Lawsuits</div>
                        <div className={`w-[24px] h-[24px] rounded-full flex justify-center items-center border border-white ${activeSection === 'faqs' ? 'bg-white' : 'bg-transparent'}`}>
                            <div className={`w-[8px] h-[8px] border-t-2 border-r-2 ${activeSection === 'faqs' ? 'border-[#162766]' : 'border-white'} rotate-45`}></div>
                        </div>
                    </div>
                    
                    <div 
                        className={`relative py-[15px] px-[27px] cursor-pointer flex justify-between items-center transition-colors duration-300 ${activeSection === 'conclusion' ? 'bg-white/20' : 'bg-transparent'}`}
                        onClick={() => handleNavClick('conclusion')}
                    >
                        <div className="uppercase font-semibold text-[16px] w-[calc(100%-30px)]">Conclusion</div>
                        <div className={`w-[24px] h-[24px] rounded-full flex justify-center items-center border border-white ${activeSection === 'conclusion' ? 'bg-white' : 'bg-transparent'}`}>
                            <div className={`w-[8px] h-[8px] border-t-2 border-r-2 ${activeSection === 'conclusion' ? 'border-[#162766]' : 'border-white'} rotate-45`}></div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Content Area - full width on mobile, 80% on desktop */}
            <div className={`${isMobile ? 'w-full' : 'w-4/5 px-[40px]'}`}>
                <section id="introduction" className={`mb-[60px] ${activeSection === 'introduction' ? 'block' : 'hidden'}`}>
                    <h2 className="text-[28px] uppercase mb-[25px] text-[#162766]">Introduction</h2>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </section>
                
                <section id="what-is" className={`mb-[60px] ${activeSection === 'what-is' ? 'block' : 'hidden'}`}>
                    <h2 className="text-[28px] uppercase mb-[25px] text-[#162766]">What is Depo-Provera?</h2>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </section>
                
                <section id="health-risks" className={`mb-[60px] ${activeSection === 'health-risks' ? 'block' : 'hidden'}`}>
                    <h2 className="text-[28px] uppercase mb-[25px] text-[#162766]">Health Risks and Side Effects Linked to Depo-Provera</h2>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </section>
                
                <section id="why-lawsuits" className={`mb-[60px] ${activeSection === 'why-lawsuits' ? 'block' : 'hidden'}`}>
                    <h2 className="text-[28px] uppercase mb-[25px] text-[#162766]">Why Are Lawsuits Being Filed?</h2>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </section>
                
                <section id="who-can-file" className={`mb-[60px] ${activeSection === 'who-can-file' ? 'block' : 'hidden'}`}>
                    <h2 className="text-[28px] uppercase mb-[25px] text-[#162766]">Who Can File a Lawsuit?</h2>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </section>
                
                <section id="compensation" className={`mb-[60px] ${activeSection === 'compensation' ? 'block' : 'hidden'}`}>
                    <h2 className="text-[28px] uppercase mb-[25px] text-[#162766]">Types of Compensation Available</h2>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </section>
                
                <section id="steps" className={`mb-[60px] ${activeSection === 'steps' ? 'block' : 'hidden'}`}>
                    <h2 className="text-[28px] uppercase mb-[25px] text-[#162766]">Steps to File a Depo-Provera Lawsuit</h2>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </section>
                
                <section id="faqs" className={`mb-[60px] ${activeSection === 'faqs' ? 'block' : 'hidden'}`}>
                    <h2 className="text-[28px] uppercase mb-[25px] text-[#162766]">FAQs About Depo-Provera Lawsuits</h2>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </section>
                
                <section id="conclusion" className={`mb-[60px] ${activeSection === 'conclusion' ? 'block' : 'hidden'}`}>
                    <h2 className="text-[28px] uppercase mb-[25px] text-[#162766]">Conclusion</h2>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <p className="mb-[20px] leading-[1.6] text-[16px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </section>
            </div>
        </div>
    );
};

export default DetailPageNew2; 