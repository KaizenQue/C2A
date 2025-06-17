import React, { useState, useEffect } from 'react';
import NU1 from '../../assets/NU1.jpg';
import NU12 from '../../assets/NU12.jpg';
import EyeVector from '../../assets/eye.svg';
import ShareVector from '../../assets/share.svg';
import BannerImage2 from "../../assets/BannerSVG.svg"

const NewUpdateNew = () => {
    // Add state for carousel navigation
    const [currentIndex, setCurrentIndex] = React.useState(0);
    // Add state for selected category
    const [selectedCategory, setSelectedCategory] = React.useState("Hair Relaxer");
    // Add state for screen size
    const [isMobile, setIsMobile] = useState(false);
    // Add state for mobile dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    // Check for mobile screen size on component mount and window resize
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
    
    // Toggle mobile dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    
    // Categories data with active status
    const categories = [
        { id: 1, name: "Hair Relaxer", isNew: false, isActive: true },
        { id: 2, name: "Roundup Lawsuit", isNew: true, isActive: true },
        { id: 3, name: "Camp Lejeune", isNew: false, isActive: false },
        { id: 4, name: "Talcum Powder", isNew: false, isActive: false },
        { id: 5, name: "Paraquat", isNew: false, isActive: true },
        { id: 6, name: "Zantac", isNew: false, isActive: false },
        { id: 7, name: "NEC (Baby Toxic Food)", isNew: false, isActive: false },
    ];
    
    // Articles data organized by category
    const articlesByCategory = {
        "Hair Relaxer": [
            {
                id: 1,
                title: "Hair Relaxer Lawsuits Surge Amid Health Concerns",
                category: "Hair Relaxer",
                date: "23/1/2024",
                time: "08:33pm",
                timezone: "EST",
                likes: "12k",
                shares: "6k",
                image: NU1,
                content: "Recent reports have sparked a wave of lawsuits against manufacturers of hair relaxers, alleging severe health risks linked to their products. Consumers claim that prolonged use of certain chemical hair relaxers has been associated with adverse health conditions, including hormone disruption and, in some cases, an increased risk of cancer. Legal experts are urging individuals who have experienced health issues after using these products to come forward, as investigations continue to uncover potential negligence in product safety standards. Stay informed as this developing legal battle unfolds, with new claims and updates emerging daily."
            },
            {
                id: 2,
                title: "New Study Links Hair Relaxers to Additional Health Risks",
                category: "Hair Relaxer",
                date: "20/1/2024",
                time: "02:15pm",
                timezone: "EST",
                likes: "8k",
                shares: "4k",
                image: NU1,
                content: "A groundbreaking study released this week has identified additional health concerns associated with chemical hair relaxers. The research, conducted over a five-year period, suggests potential links between certain ingredients found in popular hair relaxer products and various health conditions. As this information becomes more widely circulated, legal experts anticipate an increase in cases filed against manufacturers. Consumers who have used these products are encouraged to consult with healthcare providers about potential risks and to stay informed about ongoing litigation in this rapidly evolving legal landscape."
            }
        ],
        "Roundup Lawsuit": [
            {
                id: 3,
                title: "Roundup Settlement Reaches Record Amounts in Recent Cases",
                category: "Roundup Lawsuit",
                date: "18/1/2024",
                time: "10:45am",
                timezone: "EST",
                likes: "15k",
                shares: "9k",
                image: NU12,
                content: "The ongoing litigation against the manufacturers of Roundup weed killer has resulted in substantial settlements for plaintiffs claiming health issues from exposure to the product. Recent court decisions have established precedents that could impact thousands of pending cases nationwide. Agricultural workers and home gardeners who have experienced health complications after using Roundup are reviewing their legal options as new evidence continues to emerge about the potential dangers of its active ingredients."
            }
        ],
        "Camp Lejeune": [
            {
                id: 4,
                title: "Camp Lejeune Water Contamination: New Compensation Program Announced",
                category: "Camp Lejeune",
                date: "15/1/2024",
                time: "01:30pm",
                timezone: "EST",
                likes: "20k",
                shares: "12k",
                image: NU12,
                content: "Veterans and families affected by water contamination at Camp Lejeune Marine Corps Base in North Carolina may be eligible for a newly expanded compensation program. The initiative addresses health conditions linked to exposure to contaminated water between 1953 and 1987. Officials are encouraging all who lived or worked at the base during this period to review the updated eligibility criteria, as many previously denied claims may now qualify for benefits under the revised guidelines."
            }
        ],
        "Talcum Powder": [
            {
                id: 5,
                title: "Major Talcum Powder Lawsuit Reaches Settlement After Years of Litigation",
                category: "Talcum Powder",
                date: "12/1/2024",
                time: "09:15am",
                timezone: "EST",
                likes: "18k",
                shares: "11k",
                image:NU12,
                content: "After years of intense legal battles, a significant settlement has been reached in the talcum powder litigation. The agreement provides compensation for individuals who developed certain health conditions allegedly linked to long-term use of talc-based products. This resolution marks a turning point in one of the most closely watched mass tort cases in recent history, potentially setting a precedent for similar claims still pending in courts across the country."
            }
        ],
        "Paraquat": [
            {
                id: 6,
                title: "Paraquat Exposure Linked to Neurological Disorders in New Research",
                category: "Paraquat",
                date: "10/1/2024",
                time: "03:45pm",
                timezone: "EST",
                likes: "14k",
                shares: "8k",
                image:NU12,
                content: "Recent scientific studies have strengthened the connection between exposure to the herbicide paraquat and the development of neurological disorders. Agricultural workers and others with occupational exposure to this chemical are particularly concerned about these findings. Legal advocates are using this new research to support ongoing litigation against manufacturers, arguing that proper warnings about these specific health risks were not adequately provided to users of the product."
            }
        ],
        "Zantac": [
            {
                id: 7,
                title: "FDA Updates Guidance on Zantac Cancer Risks",
                category: "Zantac",
                date: "08/1/2024",
                time: "11:20am",
                timezone: "EST",
                likes: "16k",
                shares: "10k",
                image: NU12,
                content: "The Food and Drug Administration has issued updated guidance regarding the potential cancer risks associated with ranitidine products, formerly sold under the brand name Zantac. This new information has implications for both consumers who used these medications and the ongoing legal proceedings against manufacturers. Those who regularly used Zantac or its generic equivalents are advised to consult with healthcare professionals about potential health monitoring and to stay informed about their legal rights as this situation continues to evolve."
            }
        ],
        "NEC (Baby Toxic Food)": [
            {
                id: 8,
                title: "Baby Formula Manufacturers Face Growing Litigation Over NEC Cases",
                category: "NEC (Baby Toxic Food)",
                date: "05/1/2024",
                time: "02:10pm",
                timezone: "EST",
                likes: "22k",
                shares: "14k",
                image: "main picture.png",
                content: "Parents of premature infants who developed necrotizing enterocolitis (NEC) after being fed certain cow's milk-based formulas are pursuing legal action against manufacturers. The lawsuits allege that companies failed to warn about the increased risk of this dangerous intestinal condition in premature babies. Medical experts supporting these cases point to studies suggesting that human milk alternatives may be safer options for vulnerable newborns, information that plaintiffs claim was not adequately communicated to healthcare providers or parents."
            }
        ],
    };
    
    // Related news data array
    const relatedNews = [
        {
            id: 1,
            title: "Alert: Drinking Water Contamination Risks Uncovered",
            category: "Hair Relaxer",
            image: NU12
        },
        {
            id: 2,
            title: "New Evidence in Roundup Cancer Lawsuit Cases",
            category: "Roundup",
            image: NU12
        },
        {
            id: 3,
            title: "Camp Lejeune Victims Receiving Compensation Updates",
            category: "Camp Lejeune",
            image: NU12
        },
        {
            id: 4,
            title: "Talcum Powder Cases: Major Settlement Announced",
            category: "Talcum Powder",
            image: NU12
        },
        {
            id: 5,
            title: "Paraquat Exposure Linked to Additional Health Issues",
            category: "Paraquat",
            image: NU12
        },
        {
            id: 6,
            title: "Zantac Cancer Risk: Latest Research Findings",
            category: "Zantac",
            image: NU12
        }
    ];

    // Handle category selection
    const handleCategoryClick = (categoryName) => {
        setSelectedCategory(categoryName);
        if (isMobile) {
            setIsDropdownOpen(false); // Close dropdown after selection on mobile
        }
    };

    // Handle carousel navigation
    const handlePrev = () => {
        setCurrentIndex(prevIndex => 
            prevIndex === 0 ? Math.max(0, relatedNews.length - 4) : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex(prevIndex => 
            prevIndex >= relatedNews.length - 4 ? 0 : prevIndex + 1
        );
    };

    // Visible items in carousel
    const visibleItems = relatedNews.slice(currentIndex, currentIndex + 4);
    
    // Get current articles based on selected category
    const currentArticles = articlesByCategory[selectedCategory] || [];
    
    // Mobile Component
    const MobileView = () => (
        <div className="flex flex-col w-full px-4">
            {/* Mobile Header */}
            <div className="flex flex-col items-center text-center my-6">
                <h1 className="text-3xl text-[#162766] mb-1">News Updates</h1>
                <p className="text-sm max-w-full">Your Guide to Recent Legal Headlines</p>
            </div>
            
            {/* Mobile Category Dropdown */}
            <div className="relative mb-6">
                <div 
                    className="flex justify-between items-center bg-[#162766] text-white p-3 rounded-lg cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <span>{selectedCategory}</span>
                    <span className="text-xl">{isDropdownOpen ? '▲' : '▼'}</span>
                </div>
                
                {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 z-50 bg-white border border-gray-200 rounded-b-lg shadow-lg max-h-60 overflow-y-auto">
                        {categories.map((category) => (
                            <div 
                                key={category.id}
                                className={`p-3 cursor-pointer flex items-center ${
                                    selectedCategory === category.name 
                                        ? 'bg-[#f0f0f0] text-[#162766] font-semibold' 
                                        : 'text-[#162766]'
                                }`}
                                onClick={() => handleCategoryClick(category.name)}
                            >
                                {category.isActive && (
                                    <div className="rounded-full bg-[#5eea63] w-[8px] h-[8px] mr-2" />
                                )}
                                <span>{category.name}</span>
                                {category.isNew && (
                                    <span className="ml-2 text-xs bg-[#f8d216] text-[#162766] px-2 py-0.5 rounded-full">
                                        New
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            {/* Mobile Articles */}
            <div className="flex flex-col gap-4">
                {currentArticles.map((article) => (
                    <div 
                        key={article.id}
                        className="rounded-lg bg-[#f9f9f9] overflow-hidden text-sm text-[#89898b]"
                    >
                        <div className="w-full h-[180px] overflow-hidden bg-cover bg-no-repeat bg-top text-[#f9f9f9] relative"
                            style={{ backgroundImage: `url('${article.image}')` }}
                        >
                            <div className="absolute top-0 left-0 bg-gradient-to-r from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)] w-full h-full" />
                            <div className="absolute top-[10px] right-[10px] backdrop-blur-[28px] rounded-[40px] bg-[#162766] flex flex-row items-center justify-center py-1 px-3">
                                <div className="relative text-xs font-medium">{article.category}</div>
                            </div>
                        </div>
                        
                        <div className="p-4">
                            <div className="text-lg font-semibold text-[#162766] mb-3">
                                {article.title}
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-3 text-xs">
                                <div className="font-medium">{article.date}</div>
                                <div className="font-medium">{article.time}</div>
                                <div className="font-medium">{article.timezone}</div>
                                
                                <div className="w-full flex items-center gap-4 mt-2">
                                    <div className="flex items-center gap-2">
                                        <img className="w-4 h-4" alt="" src={EyeVector} />
                                        <div className="font-medium">{article.likes}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img className="w-4 h-4" alt="" src={ShareVector} />
                                        <div className="font-medium">{article.shares}</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="text-sm leading-6 text-[#162766] whitespace-pre-wrap text-justify line-clamp-4 mb-2">
                                {article.content}
                            </div>
                            
                            <button className="text-sm text-[#162766] font-semibold underline">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Mobile Related News */}
            <div className="mt-6 mb-8">
                <div className="text-xl font-semibold text-[#162766] mb-4">
                    Related News
                </div>
                
                <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar">
                    {relatedNews.map((item) => (
                        <div 
                            key={item.id}
                            className="rounded-lg bg-white min-w-[180px] h-[200px] overflow-hidden relative shadow-md flex-shrink-0"
                            onClick={() => handleCategoryClick(item.category)}
                        >
                            <img 
                                className="w-full h-full object-cover" 
                                alt={item.title} 
                                src={item.image} 
                            />
                            <div className="absolute top-0 left-0 bg-gradient-to-b from-[rgba(5,11,119,0.2)] to-[rgba(5,11,119,0.3)] w-full h-full" />
                            <div className="absolute top-[5px] right-[5px] backdrop-blur-[17.76px] rounded-[25.37px] bg-[#162766] flex items-center py-[2px] px-[8px]">
                                <div className="font-medium text-white text-xs">
                                    {item.category}
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 backdrop-blur-[29.75px] rounded-t-[20px] bg-gradient-to-r from-[rgba(249,249,249,0.56)] to-[rgba(249,249,249,0)] w-full h-[70px]" />
                            <div className="absolute bottom-3 left-0 text-xs font-semibold text-[#162766] text-center w-full px-2">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
    // Desktop Component
    const DesktopView = () => (
        <div className="relative top-[90px] flex flex-col w-full max-w-[1600px] mx-auto px-10">
            <img 
                className="w-full h-full absolute top-0 left-0 object-cover opacity-50" 
                alt="Background pattern" 
                src={BannerImage2} 
            />
            {/* Header Section */}
            <div className="flex flex-col items-center text-center my-10 mb-[60px]">
                <h1 className="text-[75px] text-[#162766] mb-1">News Updates</h1>
                <p className="text-lg max-w-[435px]">Your Guide to Recent Legal Headlines</p>
            </div>

            {/* Content Section - with left sidebar and right content */}
            <div className="flex w-full relative gap-[30px]">
                {/* Left Sidebar */}
                <div className="relative rounded-[24.24px] bg-[#162766] w-[267px] h-[1386px] overflow-hidden text-lg text-white flex-none">
                    <div className="absolute top-[65.79px] left-[46.84px] text-[#f8d216]">Recent add-ons</div>
                    
                    {/* Render sidebar items dynamically */}
                    {categories.map((category, index) => (
                        <div key={category.id}>
                            <div 
                                className={`absolute cursor-pointer transition-colors duration-300 ease-in-out left-[36.84px]
                                    ${selectedCategory === category.name ? 'font-semibold text-[#f8d216]' : 'font-normal text-white'}`}
                                style={{ top: `${143.72 + (index * 77.92)}px` }}
                                onClick={() => handleCategoryClick(category.name)}
                            >
                                {category.name}
                            </div>
                            
                            {/* Render active indicators (green dots) */}
                            {category.isActive && (
                                <div 
                                    className="absolute rounded-full bg-[#5eea63] w-[11px] h-[11px]" 
                                    style={{ top: `${153 + (index * 77.92)}px`, left: "18px" }}
                                />
                            )}
                        </div>
                    ))}
                    
                    <div className="absolute top-[1341px] left-[23px] rounded-full bg-[#5eea63] w-2 h-2" />
                    <div className="absolute top-[1334px] left-[41px] text-sm">Active Lawsuits</div>
                    <div className="absolute top-[1311.5px] left-[calc(50%-111px)] border-t border-[rgba(112,150,209,0.32)] w-[223px] h-px" />
                </div>

                {/* Right Content Area */}
                <div className="flex-1 py-4 flex flex-col gap-[30px]">
                    {/* Dynamically render articles based on selected category */}
                    {currentArticles.map((article) => (
                        <div 
                            key={article.id}
                            className="rounded-[18px] bg-[#f9f9f9] overflow-hidden text-sm text-[#89898b] relative"
                        >
                            <div className="rounded-[18px] w-full h-[372px] overflow-hidden bg-cover bg-no-repeat bg-top text-[#f9f9f9] relative"
                                style={{ backgroundImage: `url('${article.image}')` }}
                            >
                                <div className="absolute top-0 left-0 bg-gradient-to-r from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)] w-full h-full" />
                                <div className="absolute top-[30px] right-[30px] backdrop-blur-[28px] rounded-[40px] bg-[#162766] flex flex-row items-center justify-center py-1 px-[18px]">
                                    <div className="relative font-medium">{article.category}</div>
                                </div>
                            </div>
                            
                            <div className="p-[20px_46px_40px_46px]">
                                <div className="text-2xl font-semibold text-[#162766] mb-5">
                                    {article.title}
                                </div>
                                
                                <div className="flex gap-[15px] mb-[30px]">
                                    <div className="font-medium">{article.date}</div>
                                    <div className="font-medium">{article.time}</div>
                                    <div className="font-medium">{article.timezone}</div>
                                    
                                    <div className="ml-auto flex items-center gap-[15px] text-[14.65px] text-black">
                                        <div className="flex items-center gap-[9px]">
                                            <img className="w-[19.5px] h-[19.5px]" alt="" src={EyeVector} />
                                            <div className="font-medium">{article.likes}</div>
                                        </div>
                                        <div className="flex items-center gap-[9px]">
                                            <img className="w-[19.5px] h-[19.5px]" alt="" src={ShareVector} />
                                            <div className="font-medium">{article.shares}</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="text-lg leading-[32px] text-[#162766] whitespace-pre-wrap text-justify">
                                    {article.content}
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Related News Section */}
                    <div className="mt-5 mb-10 relative">
                        {/* Section Title */}
                        <div className="text-2xl font-semibold text-[#162766] text-center mb-[30px]">
                            Related News
                        </div>
                        
                        {/* Carousel Container */}
                        <div className="flex justify-between items-center relative">
                            {/* Navigation Buttons */}
                            <button 
                                onClick={handlePrev}
                                className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-[#162766] text-white border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-xl"
                            >
                                ‹
                            </button>
                            
                            {/* Card Container */}
                            <div className="flex gap-5 overflow-x-hidden w-full justify-center">
                                {/* Map through visible items */}
                                {visibleItems.map((item) => (
                                    <div 
                                        key={item.id}
                                        className="rounded-[15.75px] bg-white w-[245px] h-[251.1px] overflow-hidden relative shadow-md cursor-pointer"
                                        onClick={() => handleCategoryClick(item.category)}
                                    >
                                        <img 
                                            className="w-[245px] h-[251.1px] object-cover" 
                                            alt={item.title} 
                                            src={item.image} 
                                        />
                                        <div className="absolute top-0 left-0 bg-gradient-to-b from-[rgba(5,11,119,0.2)] to-[rgba(5,11,119,0.3)] w-[245px] h-[251.1px]" />
                                        <div className="absolute top-[7px] right-[7px] backdrop-blur-[17.76px] rounded-[25.37px] bg-[#162766] flex items-center py-[2.5px] px-[11.4px]">
                                            <div className="font-medium text-white">
                                                {item.category}
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 backdrop-blur-[29.75px] rounded-t-[35px] bg-gradient-to-r from-[rgba(249,249,249,0.56)] to-[rgba(249,249,249,0)] w-[245px] h-[84.9px]" />
                                        <div className="absolute bottom-5 left-[20.13px] text-[12.81px] font-semibold text-[#162766] text-center w-[210px]">
                                            {item.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <button 
                                onClick={handleNext}
                                className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-[#162766] text-white border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-xl"
                            >
                                ›
                            </button>
                        </div>
                        
                        {/* Pagination Dots */}
                        <div className="flex justify-center gap-[10px] mt-5">
                            {Array.from({ length: Math.ceil(relatedNews.length / 4) }).map((_, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setCurrentIndex(index * 4)}
                                    className={`w-[10px] h-[10px] rounded-full cursor-pointer ${
                                        currentIndex / 4 === index ? 'bg-[#162766]' : 'bg-[#D9D9D9]'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Conditionally render mobile or desktop view
    return isMobile ? <MobileView /> : <DesktopView />;
}

export default NewUpdateNew
