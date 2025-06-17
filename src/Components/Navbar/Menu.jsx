import PropTypes from "prop-types";
import { useCallback, useState, useEffect } from "react";
import Menu1 from '../../assets/menu1.svg';
import Menu2 from '../../assets/menu2.svg';
import Menu3 from '../../assets/menu3.svg';
import Menu4 from '../../assets/menu4.svg';
import Menu5 from '../../assets/menu5.svg';
import Menu6 from '../../assets/menu6.svg';
import Menu7 from '../../assets/menu7.svg';
import Search from "../../assets/Search.jpg";
import CallIcon from "../../assets/Call.jpg";
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = ({ onClose, isMobile = false, searchTerm = "", setSearchTerm = () => {} }) => {
    const [activeItem, setActiveItem] = useState(null);
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setLocalSearchTerm(searchTerm);
    }, [searchTerm]);

    const getCurrentRouteIndex = () => {
        const path = location.pathname;
        switch(path) {
            case '/':
                return 0;
            case '/about':
                return 1;
            case '/mass-tort':
                return 2;
            case '/class-action':
                return 3;
            case '/blog':
                return 4;
            case '/contact':
                return 5;
            case '/news':
                return 6;
            default:
                return null;
        }
    };

    useEffect(() => {
        setActiveItem(getCurrentRouteIndex());
    }, [location.pathname]);

    const handleMouseLeave = () => {
        setActiveItem(getCurrentRouteIndex());
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setLocalSearchTerm(value);
        setSearchTerm(value); 
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (localSearchTerm.trim()) {
            if (onClose) onClose();
            navigate('/blog', { state: { searchTerm: localSearchTerm } });
        }
    };

    const handleNavigation = useCallback((path, index) => {
        setActiveItem(index);
        if (onClose) onClose();
        navigate(path);
    }, [onClose, navigate]);

    const handleConsultation = useCallback((e) => {
        e.stopPropagation();
        if (onClose) onClose();
        navigate('/consultation');
    }, [onClose, navigate]);

    const handleTeamUp = useCallback((e) => {
        e.stopPropagation();
        if (onClose) onClose();
        navigate('/careers');
    }, [onClose, navigate]);

    const handleCall = useCallback((e) => {
        e.stopPropagation();
        window.location.href = "tel:8882021350";
    }, []);

    const getMenuItemClasses = (index) => {
        return `absolute ${isMobile ? 'left-[25px]' : 'left-[45px]'} cursor-pointer transition-all duration-300 
                ${activeItem === index ? 'text-white' : 'text-[#7096d1]'} 
                hover:text-white`;
    };

    const getIconClasses = (index) => {
        return `absolute top-[2px] left-0 w-6 h-6 overflow-hidden transition-transform duration-200 
                ${activeItem === index ? 'filter brightness-0 invert' : ''} 
                hover:scale-110`;
    };

    if (!isMobile) {
        return (
            <div className="w-[573px] h-[738px] left-[85%] relative rounded-lg bg-[#162766] overflow-hidden max-w-full max-h-full text-left text-lg text-[#7096d1] font-poppins transition-all duration-300">
                <div 
                    className="absolute top-[20px] right-[20px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[#f9f9f9] cursor-pointer text-[22px] font-light bg-[rgba(249,249,249,0.1)] hover:bg-[rgba(249,249,249,0.2)] transition-colors duration-300 z-10"
                    onClick={onClose}
                    title="Close menu"
                >
                    ✕
                </div>

                <div>
                    <div 
                        className={`${getMenuItemClasses(0)} top-[46px] w-[99px] h-[27px]`}
                        onClick={() => handleNavigation("/", 0)}
                        onMouseEnter={() => setActiveItem(0)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="absolute top-0 left-[45px] font-medium">Home</div>
                        <img 
                            className={getIconClasses(0)}
                            alt="Home" 
                            src={Menu1} 
                        />
                    </div>

                    <div 
                        className={`${getMenuItemClasses(1)} top-[113px] w-[126px] h-[30px]`}
                        onClick={() => handleNavigation("/about", 1)}
                        onMouseEnter={() => setActiveItem(1)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="absolute top-[2px] left-[45px] font-medium">About us</div>
                        <div className="absolute top-0 left-0 w-6 h-[30px] overflow-hidden text-[5px] font-inter">
                            <img 
                                className={getIconClasses(1)}
                                alt="About" 
                                src={Menu2} 
                            />
                        </div>
                    </div>

                    <div 
                        className={`${getMenuItemClasses(2)} top-[183px] w-[133px] h-[27px]`}
                        onClick={() => handleNavigation("/mass-tort", 2)}
                        onMouseEnter={() => setActiveItem(2)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="absolute top-0 left-[45px] font-medium">Mass Tort</div>
                        <img 
                            className={getIconClasses(2)}
                            alt="Mass Tort" 
                            src={Menu3} 
                        />
                    </div>

                    <div 
                        className={`${getMenuItemClasses(3)} top-[250px] w-[156px] h-[27px]`}
                        onClick={() => handleNavigation("/class-action", 3)}
                        onMouseEnter={() => setActiveItem(3)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="absolute top-0 left-[43px] font-medium">Class Action</div>
                        <img 
                            className={getIconClasses(3)}
                            alt="Class Action" 
                            src={Menu4} 
                        />
                    </div>

                    <div 
                        className={`${getMenuItemClasses(4)} top-[317px] w-[85px] h-[27px]`}
                        onClick={() => handleNavigation("/blog", 4)}
                        onMouseEnter={() => setActiveItem(4)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="absolute top-0 left-[45px] font-medium">Blog</div>
                        <img 
                            className={getIconClasses(4)}
                            alt="Blog" 
                            src={Menu5} 
                        />
                    </div>

                    <div 
                        className={`${getMenuItemClasses(5)} top-[384px] w-[117px] h-[27px]`}
                        onClick={() => handleNavigation("/contact", 5)}
                        onMouseEnter={() => setActiveItem(5)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="absolute top-0 left-[43px] font-medium">Contact</div>
                        <img 
                            className={getIconClasses(5)}
                            alt="Contact" 
                            src={Menu6} 
                        />
                    </div>

                    <div 
                        className={`${getMenuItemClasses(6)} top-[451px] w-[173px] h-[27px]`}
                        onClick={() => handleNavigation("/news", 6)}
                        onMouseEnter={() => setActiveItem(6)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="absolute top-0 left-[43px] font-medium">News Updates</div>
                        <img 
                            className={getIconClasses(6)}
                            alt="News" 
                            src={Menu7} 
                        />
                    </div>
                </div>

                <div className="absolute top-[527px] left-[46px]">
                    <div 
                        className="absolute left-0 rounded-md bg-[#f9f9f9] border border-[#f9f9f9] flex flex-row items-center justify-center p-[10px] text-[#050b77] cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                        onClick={handleConsultation}
                    >
                        <div className="relative font-medium">Get a Free Consultation</div>
                    </div>

                    <div 
                        className="absolute left-[274px] rounded-md border border-[#f9f9f9] flex flex-row items-center justify-center p-[10px] text-[#f9f9f9] cursor-pointer hover:bg-[rgba(249,249,249,0.1)] transition-colors duration-300"
                        onClick={handleTeamUp}
                    >
                        <div className="relative w-[200px] font-medium">Team up with us?</div>
                    </div>
                </div>

                <div className="absolute top-[602px] left-[45px] w-[484px] h-[90px] text-[#f9f9f9]">
                    <div className="absolute top-[63px] left-0 font-light">
                        Toll Free Number
                    </div>
                    <div 
                        className="absolute top-[26px] left-0 font-semibold cursor-pointer hover:underline"
                        onClick={handleCall}
                    >
                        (888) 202-1350
                    </div>
                    <div className="absolute top-[63px] left-[275px] font-light">Opening Hours</div>
                    <div className="absolute top-[26px] left-[275px] font-semibold whitespace-pre-wrap">Mon. – Fri.   9:00 - 19:00</div>
                    <div className="absolute top-0 left-[383px] bg-[#f9f9f9] w-0 h-[22px]" />
                </div>
            </div>
        );
    }

    return (
        <div className="w-full h-full relative bg-[#162766] overflow-hidden max-w-full max-h-full text-left text-lg text-[#7096d1] font-poppins transition-all duration-300">
            <div 
                className="absolute top-[20px] right-[15px] w-[25px] h-[25px] rounded-full flex items-center justify-center text-[#f9f9f9] cursor-pointer text-[18px] font-light bg-[rgba(249,249,249,0.1)] hover:bg-[rgba(249,249,249,0.2)] transition-colors duration-300 z-10"
                onClick={onClose}
                title="Close menu"
            >
                ✕
            </div>

            <div className="transition-all duration-300">
                <div 
                    className={`${getMenuItemClasses(0)} top-[50px] w-[99px] h-[27px]`}
                    onClick={() => handleNavigation("/", 0)}
                    onMouseEnter={() => setActiveItem(0)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute top-0 left-[45px] font-medium">Home</div>
                    <img 
                        className={getIconClasses(0)}
                        alt="Home" 
                        src={Menu1} 
                    />
                </div>

                <div 
                    className={`${getMenuItemClasses(1)} top-[100px] w-[126px] h-[30px]`}
                    onClick={() => handleNavigation("/about", 1)}
                    onMouseEnter={() => setActiveItem(1)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute top-[2px] left-[45px] font-medium">About us</div>
                    <div className="absolute top-0 left-0 w-6 h-[30px] overflow-hidden text-[5px] font-inter">
                        <img 
                            className={getIconClasses(1)}
                            alt="About" 
                            src={Menu2} 
                        />
                    </div>
                </div>

                <div 
                    className={`${getMenuItemClasses(2)} top-[150px] w-[133px] h-[27px]`}
                    onClick={() => handleNavigation("/mass-tort", 2)}
                    onMouseEnter={() => setActiveItem(2)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute top-0 left-[45px] font-medium">Mass Tort</div>
                    <img 
                        className={getIconClasses(2)}
                        alt="Mass Tort" 
                        src={Menu3} 
                    />
                </div>

                <div 
                    className={`${getMenuItemClasses(3)} top-[200px] w-[156px] h-[27px]`}
                    onClick={() => handleNavigation("/class-action", 3)}
                    onMouseEnter={() => setActiveItem(3)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute top-0 left-[43px] font-medium">Class Action</div>
                    <img 
                        className={getIconClasses(3)}
                        alt="Class Action" 
                        src={Menu4} 
                    />
                </div>

                <div 
                    className={`${getMenuItemClasses(4)} top-[250px] w-[85px] h-[27px]`}
                    onClick={() => handleNavigation("/blog", 4)}
                    onMouseEnter={() => setActiveItem(4)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute top-0 left-[45px] font-medium">Blog</div>
                    <img 
                        className={getIconClasses(4)}
                        alt="Blog" 
                        src={Menu5} 
                    />
                </div>

                <div 
                    className={`${getMenuItemClasses(5)} top-[300px] w-[117px] h-[27px]`}
                    onClick={() => handleNavigation("/contact", 5)}
                    onMouseEnter={() => setActiveItem(5)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute top-0 left-[43px] font-medium">Contact</div>
                    <img 
                        className={getIconClasses(5)}
                        alt="Contact" 
                        src={Menu6} 
                    />
                </div>

                <div 
                    className={`${getMenuItemClasses(6)} top-[350px] w-[173px] h-[27px]`}
                    onClick={() => handleNavigation("/news", 6)}
                    onMouseEnter={() => setActiveItem(6)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="absolute top-0 left-[43px] font-medium">News Updates</div>
                    <img 
                        className={getIconClasses(6)}
                        alt="News" 
                        src={Menu7} 
                    />
                </div>
            </div>

            <div className="absolute top-[400px] left-0 right-0 mx-auto w-[90%] px-4">
                <form onSubmit={handleSearchSubmit}>
                    <div 
                        className={`border ${isSearchFocused ? 'border-[#f9f9f9] shadow-[0_0_5px_rgba(249,249,249,0.3)]' : 'border-[#7096d1]'} 
                            rounded-md box-border flex flex-row items-center justify-start py-[10px] px-[15px] 
                            text-[#9f9f9f] transition-all duration-300 bg-[rgba(249,249,249,0.05)]`}
                    >
                        <div className="w-full relative h-[27px] flex items-center">
                            <img 
                                className="h-[20px] w-[20px] mr-3"
                                alt="Search" 
                                src={Search} 
                            />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={localSearchTerm}
                                onChange={handleSearchChange}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                className="font-light font-poppins text-base text-[#f9f9f9] bg-transparent border-none outline-none w-full placeholder:text-[#7096d1]"
                                aria-label="Search input"
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div 
                className="absolute top-[460px] left-0 right-0 mx-auto flex items-center justify-center cursor-pointer"
                onClick={handleCall}
            >
                <div className="flex items-center text-white bg-[rgba(249,249,249,0.05)] rounded-md px-4 py-2 transition-all duration-200 hover:bg-[rgba(249,249,249,0.1)]">
                    <img className="w-5 h-5 mr-2" alt="Call icon" src={CallIcon} />
                    <span className="font-medium">(888) 202-1350</span>
                </div>
            </div>

            <div className="absolute bottom-[100px] left-0 right-0 flex flex-col items-center w-full gap-3">
                <div 
                    className="w-[80%] mx-auto rounded-md bg-[#f9f9f9] border border-[#f9f9f9] flex flex-row items-center justify-center p-[10px] text-[#050b77] cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
                    onClick={handleConsultation}
                >
                    <div className="relative font-medium text-sm">Get a Free Consultation</div>
                </div>

                <div 
                    className="w-[80%] mx-auto rounded-md border border-[#f9f9f9] flex flex-row items-center justify-center p-[10px] text-[#f9f9f9] cursor-pointer hover:bg-[rgba(249,249,249,0.1)] transition-colors duration-300"
                    onClick={handleTeamUp}
                >
                    <div className="relative font-medium text-sm">Team up with us?</div>
                </div>
            </div>

            <div className="absolute bottom-[30px] left-0 right-0 text-center text-[#f9f9f9] text-xs">
                <div className="font-light">Opening Hours: Mon. – Fri. 9:00 - 19:00</div>
            </div>
        </div>
    );
};

Menu.propTypes = {
    onClose: PropTypes.func,
    isMobile: PropTypes.bool,
    searchTerm: PropTypes.string,
    setSearchTerm: PropTypes.func
};

export default Menu;

