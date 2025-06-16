import CU6 from "../../assets/CU6.svg"
import { useNavigate } from "react-router-dom";

const AboutUs6 = () => {
    const navigate = useNavigate();

    const handleCaseReview = () => {
        navigate('/contact');
    };

    return (
        <div className="w-full relative bg-[#d2d5ce] overflow-hidden text-left text-[#162766] font-poppins">
            <div className="relative min-h-[500px] md:min-h-[677px] w-full">
                {/* Background grid */}
                <img 
                    className="absolute top-[-40px] left-0 w-full h-full object-cover opacity-20" 
                    alt="" 
                    src="actual grid.svg" 
                />
                
                {/* Header Section */}
                <div className="relative w-full max-w-[894px] mx-auto mt-4 md:mt-8 px-4">
                    <div className="bg-[#d2d5ce] py-4 md:py-8 text-center">
                        <b className="block text-2xl sm:text-3xl md:text-4xl lg:text-[45px] mb-2 md:mb-4">Contact Us</b>
                        <div className="text-base sm:text-lg md:text-xl lg:text-[22px] text-[#5a5a5a]">
                            Ready to Get Started?
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="relative w-full max-w-[1248px] mx-auto mt-6 md:mt-12 px-4 md:px-8">
                    <div className="bg-[#d2d5ce] text-center text-[#050b77] py-6 md:py-12">
                        <div className="relative">
                            <img 
                                className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-20 lg:h-20" 
                                alt="" 
                                src={CU6} 
                            />
                            <div className="space-y-3 md:space-y-6">
                                <p className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-snug md:leading-tight">
                                    <span className="font-light">Don't wait to seek the</span>
                                    <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[48px]"> justice you deserve</span>.
                                </p>
                                <p className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] leading-snug md:leading-tight">
                                    <span className="font-extrabold">Contact us today</span>
                                    <span className="font-light"> to schedule your free case evaluation.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button Section */}
                <div className="relative w-full flex justify-center mt-6 md:mt-12 px-4">
                    <button 
                        onClick={handleCaseReview}
                        className="w-[280px] md:w-[320px] rounded-[12px] bg-[#f2c438] h-[50px] md:h-[62px] text-sm md:text-base lg:text-[20px] text-black hover:bg-[#e3b733] transition-colors uppercase font-semibold"
                    >
                        Get a Free Case Review
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs6;
