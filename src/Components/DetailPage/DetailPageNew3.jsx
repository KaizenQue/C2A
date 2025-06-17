import { useState, useEffect } from 'react';
import DPFImg from '../../assets/DPFImg.jpg';
import LP2 from '../../assets/LP2.svg';


const DetailPageNew3 = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        category: '',
        concern: '',
        caseHistory: ''
    });

    // State for dropdown visibility
    const [dropdowns, setDropdowns] = useState({
        category: false,
        concern: false
    });

    // State for screen size
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Set initial value
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Dropdown options
    const categoryOptions = ['Personal Injury', 'Medical Malpractice', 'Product Liability', 'Employment Law', 'Other'];
    const concernOptions = ['Injury Compensation', 'Medical Bills', 'Lost Wages', 'Pain and Suffering', 'Other'];

    // Handle input changes
    const handleInputChange = (e, field) => {
        setFormData({
            ...formData,
            [field]: e.target.value
        });
    };

    // Handle dropdown selection
    const handleDropdownSelect = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
        setDropdowns({
            ...dropdowns,
            [field]: false
        });
    };

    // Toggle dropdown visibility
    const toggleDropdown = (field) => {
        setDropdowns({
            ...dropdowns,
            [field]: !dropdowns[field]
        });
    };

    // Form fields component to avoid duplication
    const FormFields = () => (
        <div className="flex flex-col gap-[25px] w-full">
            <div className="rounded-[15.98px] border border-[#f9f9f9] box-border px-[27.5px] py-[8.9px] w-full flex flex-row items-center justify-between h-[60px] relative filter drop-shadow-[0_4px_4px_rgba(154,194,255,0.29)] text-[#d8d8d8]">
                <input 
                    className="bg-transparent border-none outline-none w-full text-inherit text-[inherit]"
                    type="text" 
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange(e, 'name')}
                />
            </div>
            
            <div className="rounded-[15.98px] border border-[#89898b] box-border px-[27.5px] py-[8.9px] w-full flex flex-row items-center justify-between h-[60px] relative">
                <input 
                    className="bg-transparent border-none outline-none w-full text-inherit text-[inherit]"
                    type="text" 
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange(e, 'phone')}
                />
            </div>
            
            <div className="rounded-[15.98px] border border-[#89898b] box-border px-[27.5px] py-[8.9px] w-full flex flex-row items-center justify-between h-[60px] relative">
                <input 
                    className="bg-transparent border-none outline-none w-full text-inherit text-[inherit]"
                    type="email" 
                    placeholder="E-Mail Id"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                />
            </div>
            
            {/* Category Dropdown */}
            <div 
                className="rounded-[15.98px] border border-[#89898b] box-border px-[27.5px] py-[8.9px] w-full flex flex-row items-center justify-between h-[60px] relative cursor-pointer"
                onClick={() => toggleDropdown('category')}
            >
                <div>{formData.category || "Select the category"}</div>
                <svg 
                    className="w-[21.3px] h-[21.3px]"
                    width="21.3" 
                    height="21.3" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                {dropdowns.category && (
                    <div className="absolute top-[65px] left-0 w-full bg-[#1d3175] rounded-[10px] z-10 shadow-[0px_4px_10px_rgba(0,0,0,0.2)] max-h-[200px] overflow-y-auto">
                        {categoryOptions.map((option, index) => (
                            <div 
                                key={index} 
                                className="p-[12px_27.5px] cursor-pointer transition-colors duration-200 text-[rgba(141,142,158,0.9)] hover:bg-[#2a4299] hover:text-[#f9f9f9]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDropdownSelect('category', option);
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            {/* Concern Dropdown */}
            <div 
                className="rounded-[15.98px] border border-[#89898b] box-border px-[27.5px] py-[8.9px] w-full flex flex-row items-center justify-between h-[60px] relative cursor-pointer"
                onClick={() => toggleDropdown('concern')}
            >
                <div>{formData.concern || "Select Your Concern"}</div>
                <svg 
                    className="w-[21.3px] h-[21.3px]"
                    width="21.3" 
                    height="21.3" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                
                {dropdowns.concern && (
                    <div className="absolute top-[65px] left-0 w-full bg-[#1d3175] rounded-[10px] z-10 shadow-[0px_4px_10px_rgba(0,0,0,0.2)] max-h-[200px] overflow-y-auto">
                        {concernOptions.map((option, index) => (
                            <div 
                                key={index} 
                                className="p-[12px_27.5px] cursor-pointer transition-colors duration-200 text-[rgba(141,142,158,0.9)] hover:bg-[#2a4299] hover:text-[#f9f9f9]"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDropdownSelect('concern', option);
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            {/* Case History Textarea */}
            <div className="rounded-[15.98px] border border-[#89898b] box-border p-[35px_8.9px_8.9px_27.5px] w-full relative h-[146.5px]">
                <div className="absolute top-[15px] left-[27.5px]">Brief Case History</div>
                <textarea 
                    className="bg-transparent border-none outline-none w-full h-[80px] text-inherit text-[inherit] resize-none"
                    value={formData.caseHistory}
                    onChange={(e) => handleInputChange(e, 'caseHistory')}
                />
                <div className="absolute right-[15px] bottom-[15px] flex gap-[15px]">
                    {/* Attachment icon */}
                    <svg 
                        className="w-[21.3px] h-[21.3px] cursor-pointer"
                        width="21.3" 
                        height="21.3" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                    
                    {/* Microphone icon */}
                    <svg 
                        className="w-[21.3px] h-[21.3px] cursor-pointer"
                        width="21.3" 
                        height="21.3" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                        <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
            
            <button className="bg-[#f2c438] w-[250px] h-[55px] rounded-[12px] border-none flex items-center justify-center mt-[35px] mx-auto text-[20px] font-semibold uppercase text-[#0d0d0d] cursor-pointer">CONTINUE</button>
        </div>
    );

    // Desktop layout
    const DesktopView = () => (
        <div className="flex w-full mx-auto relative">
            {/* Left Image - 40% width */}
            <div className="w-2/5 h-[792px] overflow-hidden">
                <img 
                    src={DPFImg} 
                    alt="Depo-Provera Lawsuit Contact" 
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Right Form - 60% width */}
            <div className="w-3/5 bg-[#162766] h-[792px] relative text-[rgba(141,142,158,0.7)] text-[22px] flex justify-center items-start pt-[70px]">
                <div className="w-[563.9px] flex flex-col gap-[25px]">
                    <FormFields />
                </div>
            </div>
        </div>
    );

    // Mobile layout
    const MobileView = () => (
        <div className="flex flex-col w-full mx-auto relative">
            {/* Header Section */}
            <div className="w-full bg-[#162766] p-[30px]">
                <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-white text-2xl font-bold">Get a Free Case Review</h1>
                    {/* <img 
                        src={LP2} 
                        alt="Case Review" 
                        className="w-16 h-16 rounded-full object-cover"
                    /> */}
                </div>
                <img 
                        src={LP2} 
                        alt="Case Review" 
                        className="absolute top-0 left-[300px] w-16 h-16 rounded-full object-cover"
                    />
                <p className="text-[rgba(141,142,158,0.7)] text-base">
                Get the Answers You Need, Absolutely Free!
                </p>
            </div>

            {/* Form */}
            <div className="w-full bg-[#162766] relative text-[rgba(141,142,158,0.7)] text-[18px] flex justify-center items-start p-[30px]">
                <div className="w-full max-w-[500px] flex flex-col gap-[20px]">
                    <FormFields />
                </div>
            </div>

            {/* Bottom Image */}
            <div className="w-full h-[500px] overflow-hidden">
                <img 
                    src={DPFImg} 
                    alt="Depo-Provera Lawsuit Contact" 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );

    return isMobile ? <MobileView /> : <DesktopView />;
};

export default DetailPageNew3; 