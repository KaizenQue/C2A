import Search from "../../assets/Search.jpg"
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./BlogCarousel.css"; // Import custom CSS removed
import BlogImg1 from '../../assets/blog21.jpg';
import BlogImg2 from '../../assets/blog22.jpg';
import BlogImg3 from '../../assets/blog23.jpg';
import BlogImg4 from '../../assets/blog24.jpg';
import BlogMain from '../../assets/blog2main.jpg'
import BannerImg from '../../assets/BannerSVG.svg';
import BannerImage2 from "../../assets/BannerSVG.svg"

// Sample blog post data - replace with actual data from your backend
const blogPosts = [
    {
        id: 1,
        title: "Water Contamination",
        image: BlogImg1,
        description: "Learn about recent water contamination cases and your legal rights."
    },
    {
        id: 2,
        title: "Tesla Recall",
        image: BlogImg2,
        description: "Information regarding the recent Tesla recalls and potential legal actions."
    },
    {
        id: 3,
        title: "Baby Powder",
        image: BlogImg3,
        description: "Updates on baby powder litigation and consumer protection information."
    },
    {
        id: 4,
        title: "Medical Malpractice",
        image: BlogImg4,
        description: "Understanding your rights in medical malpractice situations."
    },
    {
        id: 5,
        title: "Product Liability",
        image: BlogImg1,
        description: "Overview of product liability cases and consumer rights."
    }
];

// Define CSS keyframes for scroll hint animation and slick carousel styles
const customStyles = `
@keyframes scrollHint {
  0% {
    transform: translateY(-65%);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  60% {
    transform: translateY(-35%);
    opacity: 1;
  }
  100% {
    transform: translateY(-35%);
    opacity: 0;
  }
}

.slick-prev, .slick-next {
  width: 40px;
  height: 40px;
  background-color: rgba(22, 39, 102, 0.8) !important;
  border-radius: 50%;
  z-index: 10;
}
.slick-prev {
  left: -10px;
}
.slick-next {
  right: -10px;
}
.slick-prev:hover, .slick-next:hover {
  background-color: rgba(22, 39, 102, 1) !important;
}
.slick-prev:before, .slick-next:before {
  font-size: 24px;
  color: white;
}
.slick-dots {
  bottom: -40px;
}
.slick-dots li button:before {
  font-size: 12px;
  color: #162766;
  opacity: 0.5;
}
.slick-dots li.slick-active button:before {
  opacity: 1;
  color: #162766;
}
.slick-center .blog-card {
  transform: scale(1.05);
  z-index: 1;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}
@media (max-width: 1400px) {
  .slick-prev {
    left: -5px;
  }
  .slick-next {
    right: -5px;
  }
}
@media (max-width: 768px) {
  .slick-dots {
    bottom: -30px;
  }
}
`;

// Blog Card Component
const BlogCard = ({ title, image, description }) => {
    const handleClick = () => {
        alert(`You clicked on "${title}" blog post. Full article will open here.`);
        // In a real application, you would navigate to the full blog post page
        // For example: navigate(`/blog/${title.toLowerCase().replace(/\s+/g, '-')}`)
    };

    return (
        <div 
            onClick={handleClick}
            className="rounded-[18px] w-[280px] h-[350px] sm:w-[300px] sm:h-[380px] md:w-[320px] md:h-[400px] lg:w-[350px] lg:h-[420px] xl:w-[377px] xl:h-[434px] overflow-hidden bg-cover bg-no-repeat bg-top mx-[15px] relative transition-all duration-300 ease-in-out shadow-md cursor-pointer"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)]" />
            <div className="absolute bottom-0 left-0 backdrop-blur-[26px] rounded-t-[30px] bg-gradient-to-r from-[rgba(38,40,40,0.7)] to-[rgba(38,40,40,0.07)] w-full h-[120px] sm:h-[130px] md:h-[140px] lg:h-[150px] xl:h-[154px]" />
            <div className="absolute bottom-[60px] sm:bottom-[65px] md:bottom-[70px] lg:bottom-[75px] xl:bottom-[80px] left-0 w-full text-center text-[#f9f9f9] text-xl sm:text-2xl font-medium">
                {title}
            </div>
        </div>
    );
};

// Mobile Blog Card Component
const MobileBlogCard = ({ title, image, description }) => {
    const handleClick = () => {
        alert(`You clicked on "${title}" blog post. Full article will open here.`);
    };

    return (
        <div 
            onClick={handleClick}
            className="rounded-[18px] w-full h-[400px] overflow-hidden bg-cover bg-no-repeat bg-center relative transition-all duration-300 ease-in-out shadow-md cursor-pointer mb-5"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(5,11,119,0.4)] to-[rgba(5,11,119,0.3)]" />
            <div className="absolute bottom-0 left-0 backdrop-blur-[26px] rounded-t-[20px] bg-gradient-to-r from-[rgba(38,40,40,0.7)] to-[rgba(38,40,40,0.07)] w-full h-[80px]" />
            <div className="absolute bottom-[30px] left-0 w-full text-center text-[#f9f9f9] text-xl font-medium">
                {title}
            </div>
        </div>
    );
};

const BlogPage = () => {
    // For responsive design
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);
    const location = useLocation();
    // Create a reference to the slider
    const sliderRef = useRef(null);
    // Create a reference to the carousel container
    const carouselContainerRef = useRef(null);
    // Create state for carousel container styles
    const [carouselStyles, setCarouselStyles] = useState({
        showScrollIndicator: true,
        padding: "0 20px"
    });
    // State to track if we're on mobile
    const [isMobile, setIsMobile] = useState(false);

    // Update styles based on window width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
                setCarouselStyles({
                    showScrollIndicator: false,
                    padding: "0 10px"
                });
                setIsMobile(true);
            } else if (window.innerWidth < 1000) {
                setSlidesToShow(2);
                setCarouselStyles({
                    showScrollIndicator: false,
                    padding: "0 20px"
                });
                setIsMobile(false);
            } else if (window.innerWidth < 1400) {
                setSlidesToShow(3);
                setCarouselStyles({
                    showScrollIndicator: true,
                    padding: "0 20px"
                });
                setIsMobile(false);
            } else if (window.innerWidth < 1600) {
                setSlidesToShow(4);
                setCarouselStyles({
                    showScrollIndicator: true,
                    padding: "0 20px"
                });
                setIsMobile(false);
            } else {
                setSlidesToShow(4);
                setCarouselStyles({
                    showScrollIndicator: true,
                    padding: "0 20px"
                });
                setIsMobile(false);
            }
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Add scroll wheel event handler
    useEffect(() => {
        const handleWheel = (e) => {
            // Check if the mouse is over the carousel container using the ref
            if (!carouselContainerRef.current || isMobile) return;
            
            const rect = carouselContainerRef.current.getBoundingClientRect();
            const isMouseOverCarousel = 
                e.clientX >= rect.left && 
                e.clientX <= rect.right && 
                e.clientY >= rect.top && 
                e.clientY <= rect.bottom;
            
            if (isMouseOverCarousel && sliderRef.current) {
                e.preventDefault();
                // Determine scroll direction
                if (e.deltaY > 0) {
                    // Scroll down/right - next slide
                    sliderRef.current.slickNext();
                } else {
                    // Scroll up/left - previous slide
                    sliderRef.current.slickPrev();
                }
            }
        };

        // Add wheel event listener to window
        window.addEventListener('wheel', handleWheel, { passive: false });

        // Clean up
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [isMobile]);

    // Add the custom styles to the document head
    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = customStyles;
        document.head.appendChild(styleElement);
        
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    // Handle search term from navigation
    useEffect(() => {
        if (location.state?.searchTerm) {
            setSearchTerm(location.state.searchTerm);
        }
    }, [location.state]);

    // Add search functionality
    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredPosts(blogPosts);
        } else {
            const filtered = blogPosts.filter(post => 
                post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredPosts(filtered);
        }
    }, [searchTerm]);

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    };

    // Mobile slider settings
    const mobileSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        centerPadding: '10px'
    };

    return (
        <div className="w-full relative top-[120px] bg-[#d2d5ce] min-h-screen overflow-hidden text-center text-[24.82px] text-[#f9f9f9] font-poppins flex flex-col items-center justify-center py-10">
            <img 
                className="w-full h-full absolute top-0 left-0 object-cover opacity-50" 
                alt="Background pattern" 
                src={BannerImage2} 
            />
            <div className="w-[90%] max-w-[1260px] flex flex-col items-center justify-center gap-6 mb-10 relative z-10">
                <b className="w-full relative inline-block text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px] text-[#162766] text-center leading-tight">
                    Blog Posts : Legal Clarity, Simplified
                </b>
                <div className="w-full relative text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] text-[#2a3f7e] text-center mb-5">
                    Insights That Matter
                </div>
            </div>
            
            <div className="rounded-[18px] border border-[#2a3f7e] box-border w-[90%] max-w-[614px] h-[67px] flex flex-row items-center justify-center px-5 gap-5 text-[18px] sm:text-[20px] md:text-[22px] text-[#89898b] mx-auto my-[30px]">
                <img 
                    className="w-5 relative h-5 overflow-hidden flex-shrink-0" 
                    alt="Search Icon" 
                    src={Search} 
                />
                <input
                    type="text"
                    placeholder="Find by Keywords or Hashtags"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent border-none outline-none text-[#89898b] placeholder-[#89898b]"
                />
            </div>
            
            <div className="rounded-[24px] w-[90%] max-w-[1250px] h-[500px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[806px] overflow-hidden bg-cover bg-no-repeat bg-top text-left text-[52px] relative mx-auto my-[30px]">
                <div 
                    className="w-full h-full absolute top-0 left-0 bg-cover bg-no-repeat bg-center"
                    style={{ backgroundImage: `linear-gradient(111.71deg, rgba(5, 11, 119, 0.6), rgba(5, 11, 119, 0.5)), url(${BlogMain})` }}
                />
                
                <div className="backdrop-blur-[34px] rounded-[30px] sm:rounded-[40px] bg-gradient-to-r from-[rgba(38,40,40,0.7)] to-[rgba(38,40,40,0.07)] w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[290px] xl:h-[314px] absolute bottom-0 left-0 px-[10%] sm:px-[15%] md:px-[20%] box-border flex flex-col justify-center items-start">
                    <b className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[52px] text-[#f9f9f9] font-bold mb-2 sm:mb-5 text-left">
                        Mass Tort
                    </b>
                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] font-light text-[#f9f9f9] text-left">
                        It is a legal action where multiple individuals harmed by the same product or event file separate cases handled together. It helps victims seek justice and compensation efficiently.
                    </div>
                </div>
            </div>
            
            {/* Recent Blog Posts Section */}
            <div className="w-[90%] max-w-[1250px] mt-[60px] mb-[60px]">
                <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[34px] font-semibold text-[#162766] text-left mb-10 relative  pb-[10px] after:content-[''] after:absolute after:w-[60px] after:h-[3px] after:bg-[#162766] after:bottom-0 after:left-0">
                    Recent Blog Posts
                </h2>
                
                {/* Desktop/Tablet Carousel */}
                {!isMobile && (
                    <>
                        {/* Scroll hint text */}
                        <div className="text-right text-[#162766] text-base font-medium mb-[15px] flex justify-end items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="5" y="2" width="14" height="20" rx="7" ry="7"></rect>
                                <path d="M12 6v4"></path>
                            </svg>
                            <span>Scroll to navigate</span>
                        </div>
                        
                        {/* Carousel Component */}
                        <div 
                            ref={carouselContainerRef}
                            className="w-[140%] relative mb-[60px] -right-[-40px] mx-auto"
                            style={{ padding: carouselStyles.padding }}
                        >
                            {carouselStyles.showScrollIndicator && (
                                <>
                                    <div className="absolute top-1/2 right-[15px] w-[30px] h-[50px] border-2 border-[rgba(22,39,102,0.7)] rounded-[20px] -translate-y-1/2 z-[5] pointer-events-none opacity-80" />
                                    <div className="absolute top-1/2 right-[29px] w-[4px] h-[10px] bg-[rgba(22,39,102,0.9)] rounded-[2px] -translate-y-1/2 z-[6] animate-[scrollHint_2s_infinite] pointer-events-none" />
                                </>
                            )}
                            <Slider ref={sliderRef} {...settings}>
                                {filteredPosts.map(post => (
                                    <div 
                                        key={post.id} 
                                        className="m-[10px] transition-transform duration-300 ease hover:-translate-y-[5px] hover:shadow-lg group"
                                    >
                                        <BlogCard 
                                            title={post.title}
                                            image={post.image}
                                            description={post.description}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </>
                )}
                
                {/* Mobile Blog Section */}
                {isMobile && (
                    <div className="w-full mb-[60px]">
                        {/* Mobile Slider */}
                        <div className="w-full px-2">
                            <Slider {...mobileSettings}>
                                {filteredPosts.map(post => (
                                    <div key={post.id} className="px-1">
                                        <MobileBlogCard 
                                            title={post.title}
                                            image={post.image}
                                            description={post.description}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        
                        {/* Mobile Grid View */}
                        {/* <div className="mt-10 px-4">
                            <h3 className="text-[22px] font-medium text-[#162766] text-left mb-5">
                                All Posts
                            </h3>
                            <div className="w-full flex flex-col gap-5">
                                {filteredPosts.map(post => (
                                    <MobileBlogCard 
                                        key={post.id}
                                        title={post.title}
                                        image={post.image}
                                        description={post.description}
                                    />
                                ))}
                            </div>
                        </div> */}
                    </div>
                )}
            </div>
            
            {/* Add no results message */}
            {filteredPosts.length === 0 && (
                <div className="w-full text-center text-[#162766] text-xl font-medium mt-10">
                    No blog posts found matching your search criteria.
                </div>
            )}
        </div>
    )
}

export default BlogPage