import { useState, useCallback, useEffect, useRef } from 'react';
import Menu from "./Menu.jsx";
import PortalPopup from "./PortalPopup.jsx";
import Search from "../../assets/Search.jpg"
import MenuIcon from "../../assets/Menu.jpg"
import CallIcon from "../../assets/Call.jpg"
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [screenSize, setScreenSize] = useState('mobile');
    const [isCallHovered, setIsCallHovered] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    const openMenu = useCallback(() => {
        setMenuOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, []);

    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);

    const handleSearchSubmit = useCallback((e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate('/blog', { state: { searchTerm } });
            setSearchTerm("");
        }
    }, [searchTerm, navigate]);

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width <= 768) {
                setScreenSize('mobile');
            } else if (width <= 1280) {
                setScreenSize('tablet');
            } else if (width <= 1536) {
                setScreenSize('desktop');
            } else {
                setScreenSize('large');
            }
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const handleCallClick = useCallback(() => {
        window.location.href = "tel:8882021350";
    }, []);

    const getNavbarHeight = () => {
        switch(screenSize) {
            case 'mobile': return 'h-[80px]';
            case 'tablet': return 'h-[100px]';
            case 'desktop': return 'h-[120px]';
            case 'large': return 'h-[140px]';
            default: return 'h-[120px]';
        }
    };

    const getLogoStyles = () => {
        switch(screenSize) {
            case 'mobile': return 'top-[16px] left-[20px] w-[80px] h-[45px]';
            case 'tablet': return 'top-[24px] left-[40px] w-[100px] h-[55px]';
            case 'desktop': return 'top-[34px] left-[51px] w-[117px] h-[65.7px]';
            case 'large': return 'top-[40px] left-[60px] w-[130px] h-[75px]';
            default: return 'top-[34px] left-[51px] w-[117px] h-[65.7px]';
        }
    };

    const getLogoTextStyles = () => {
        switch(screenSize) {
            case 'mobile': return 'top-[25px] left-[45px] text-[12px]';
            case 'tablet': return 'top-[35px] left-[65px] text-[14px]';
            case 'desktop': return 'top-[56px] left-[91px] text-[14.94px]';
            case 'large': return 'top-[65px] left-[100px] text-[16px]';
            default: return 'top-[56px] left-[91px] text-[14.94px]';
        }
    };

    const getMenuStyles = () => {
        switch(screenSize) {
            case 'mobile': return 'top-[26px] right-[20px]';
            case 'tablet': return 'top-[36px] right-[30px]';
            case 'desktop': return 'top-[54px] right-[50px]';
            case 'large': return 'top-[60px] right-[60px]';
            default: return 'top-[54px] right-[50px]';
        }
    };

    const getSearchStyles = () => {
        switch(screenSize) {
            case 'tablet': return 'top-[34px] left-[180px] w-[400px]';
            case 'desktop': return 'top-[44px] left-[199px] w-[540px]';
            case 'large': return 'top-[50px] left-[220px] w-[600px]';
            default: return 'top-[44px] left-[199px] w-[540px]';
        }
    };

    const getCallStyles = () => {
        switch(screenSize) {
            case 'tablet': return 'top-[36px] left-[900px]';
            case 'desktop': return 'top-[46px] left-[1170px]';
            case 'large': return 'top-[50px] right-[160px]';
            default: return 'top-[46px] left-[1170px]';
        }
    };

    return (
        <>
            <div className={`w-full fixed top-0 z-50 bg-white ${getNavbarHeight()} overflow-x-hidden text-left text-lg text-black font-poppins transition-all duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div 
                    className={`absolute ${getLogoStyles()} bg-[#d9d9d9] cursor-pointer transition-all duration-300`}
                    onClick={() => window.location.href = '/'}
                    title="Go to homepage"
                />
                <div className={`absolute ${getLogoTextStyles()} font-medium transition-all duration-300`}>Logo</div>
                
                <div 
                    className={`absolute ${getMenuStyles()} w-[82px] h-[27px] cursor-pointer text-[#162766] transition-all duration-300 ${isMenuOpen ? 'opacity-70' : 'opacity-100'}`}
                    onClick={openMenu}
                    onMouseEnter={() => document.body.style.cursor = "pointer"}
                    onMouseLeave={() => document.body.style.cursor = "default"}
                    title="Open navigation menu"
                >
                    <img 
                        className="absolute h-[88.89%] w-[29.27%] top-[11.11%] right-[70.73%] bottom-0 left-0 max-w-full overflow-hidden"
                        alt="Menu" 
                        src={MenuIcon} 
                    />
                    <div className="absolute top-0 left-[36.59%] font-semibold">Menu</div>
                </div>
                
                {screenSize !== 'mobile' && (
                    <form onSubmit={handleSearchSubmit} ref={searchRef}>
                        <div 
                            className={`absolute ${getSearchStyles()} rounded-[10px]
                                border box-border flex flex-row items-center justify-start py-[10px] px-[31px] text-[#9f9f9f] transition-all duration-300 
                                ${isSearchFocused ? 'border-[#050b77] shadow-[0_0_5px_rgba(22,39,102,0.3)]' : 'border-[#162766]'}`}
                        >
                            <div className="w-full relative h-[27px] rounded-[30px]">
                                <img 
                                    className="absolute top-[2px] left-0 w-6 h-6 overflow-hidden"
                                    alt="Search" 
                                    src={Search} 
                                />
                                <input
                                    type="text"
                                    placeholder="Find what you need..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    onFocus={() => setIsSearchFocused(true)}
                                    onBlur={() => setIsSearchFocused(false)}
                                    className="absolute top-0 left-[32px] font-extralight font-poppins text-lg text-black bg-transparent border-none outline-none w-[calc(100%-32px)]"
                                    aria-label="Search input"
                                />
                            </div>
                        </div>
                    </form>
                )}
                
                {screenSize !== 'mobile' && (
                    <div 
                        className={`absolute ${getCallStyles()} w-[156px] h-[43px] text-center text-[13.06px] text-[#050b77] cursor-pointer transition-transform duration-200 ${isCallHovered ? 'scale-105' : 'scale-100'}`}
                        onClick={handleCallClick}
                        onMouseEnter={() => setIsCallHovered(true)}
                        onMouseLeave={() => setIsCallHovered(false)}
                        title="Call our toll-free number"
                    >
                        <div className="absolute top-[22.29px] left-[48.41px] font-medium">(888) 202-1350</div>
                        <div className="absolute top-0 left-[43.04px] text-[13.83px] font-extralight text-[#162766]">Toll Free Number</div>
                        <img className="absolute top-[4.61px] left-0 w-[38.4px] h-[38.4px] overflow-hidden" alt="Call icon" src={CallIcon} />
                    </div>
                )}
            </div>
            
            {isMenuOpen && (
                <PortalPopup
                    overlayColor="rgba(113, 113, 113, 0.3)"
                    placement={screenSize === 'mobile' ? "FullScreen" : "Centered"}
                    onOutsideClick={closeMenu}
                >
                    <Menu 
                        onClose={closeMenu} 
                        isMobile={screenSize === 'mobile'} 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm}
                        onSearchSubmit={handleSearchSubmit}
                    />
                </PortalPopup>
            )}

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            `}</style>
        </>
    );
};

export default NavBar;
