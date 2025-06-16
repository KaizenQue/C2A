import { useState, useEffect } from 'react';
import BannerImg from '../../assets/BannerSVG.svg';
import LP2 from '../../assets/LP2.svg';
import Footer1 from '../../assets/footer1.svg';
import Footer2 from '../../assets/footer2.svg';
import Footer3 from '../../assets/footer3.svg';
import Footer4 from '../../assets/footer4.svg';
import Footer5 from '../../assets/footer5.svg';
import Footer6 from '../../assets/footer6.svg'

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();

        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (formErrors[name]) {
            setFormErrors({
                ...formErrors,
                [name]: ''
            });
        }
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) {
            errors.phone = 'Please enter a valid phone number';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
            setSubmitSuccess(true);

            setTimeout(() => {
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                });
                setSubmitSuccess(false);
            }, 3000);
        }, 1000);
    };

    const handleNavigation = (path) => {
        window.location.href = path;
    };

    const socialLinks = {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        instagram: "https://instagram.com"
    };

    const DesktopFooter = () => (
        <div className="w-full relative bg-[#162766] h-[1022px] overflow-hidden text-left text-[28.38px] text-[#f9f9f9] font-poppins">
            <img
                className="absolute top-0 left-0 w-full h-[1017px] object-cover overflow-hidden"
                alt="Background pattern"
                src={BannerImg}
            />
            <div className="absolute top-[47px] left-[60px] w-[1330px] h-[930px]">
                <div className="absolute top-0 left-0 bg-[#162766] w-[1330px] h-[930px]" />
                <div className="absolute top-[36px] left-[40px] w-[336.5px] h-[265px] text-[32px] text-black font-['Playfair_Display']">
                    <div className="absolute top-0 left-0 bg-[#d9d9d9] w-[336.5px] h-[265px]" />
                    <div
                        className="absolute top-[106px] left-[133px] cursor-pointer"
                        onClick={() => window.location.href = "/"}
                    >
                        Logo
                    </div>
                </div>
                <img className="absolute top-[701px] left-[40px] w-6 h-6 overflow-hidden" alt="Location icon" src={Footer1} />
                <div className="absolute top-[396px] left-[43px] text-[20px] leading-[38px] inline-block w-[414px]">
                    Connect2Attorney supports consumers harmed by prescription drugs or medical devices. We offer updates on current recalls and lawsuits and can connect you with one of our specialized legal partners if you need assistance finding an attorney.
                </div>
                <div
                    className="absolute top-[696px] left-[84px] text-[18px] leading-[34px] cursor-pointer hover:underline"
                    onClick={() => window.open("https://maps.google.com?q=123+Legal+Street,+New+York,+NY", "_blank")}
                >
                    Get Directions
                </div>
                <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-[799px] left-[calc(50%-642px)] rounded-[60.82px] w-[60.8px] h-[60.8px] text-center text-[#b1b1b2] font-['Font_Awesome_5_Brands'] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <img src={Footer3} alt="Facebook" className="w-full h-full object-contain" />
                </a>
                <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-[799px] left-[calc(50%-565px)] rounded-[60.82px] w-[60.8px] h-[60.8px] text-center text-[#b1b1b2] font-['Font_Awesome_5_Brands'] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <img src={Footer4} alt="Twitter" className="w-full h-full object-contain" />
                </a>
                <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-[799px] left-[calc(50%-488px)] rounded-[60.82px] w-[60.8px] h-[60.8px] text-center text-[#b1b1b2] font-['Font_Awesome_5_Brands'] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <img src={Footer5} alt="LinkedIn" className="w-full h-full object-contain" />
                </a>
                <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-[799px] left-[calc(50%-411px)] rounded-[60.82px] w-[60.8px] h-[60.8px] text-center text-[#b1b1b2] font-['Font_Awesome_5_Brands'] flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                    <img src={Footer6} alt="Instagram" className="w-full h-full object-contain" />
                </a>
                <div className="absolute top-[40px] left-[695px] w-[519.3px] h-[217.5px] text-[20px]">
                    <div className="absolute top-0 left-0 w-[198.3px] flex flex-col items-start justify-start gap-[23px]">
                        <div className="self-stretch relative underline leading-[30px] font-semibold flex items-center h-[34.2px] flex-shrink-0">Company</div>
                        <div className="w-[198.3px] relative h-[160.3px] text-[17px]">
                            <div
                                className="absolute top-0 left-0 leading-[30px] font-light flex items-center w-[155px] h-[34.2px] cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/about")}
                            >
                                About Company
                            </div>
                            <div
                                className="absolute top-[42.18px] left-0 leading-[30px] font-light flex items-center w-[102.6px] h-[34.2px] cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/contact")}
                            >
                                Contact us
                            </div>
                            <div
                                className="absolute top-[83.89px] left-0 leading-[30px] font-light flex items-center w-[198.3px] h-[34.2px] cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/terms")}
                            >
                                Terms and Conditions
                            </div>
                            <div
                                className="absolute top-[126.06px] left-0 leading-[30px] font-light flex items-center w-[158.5px] h-[34.2px] cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/privacy")}
                            >
                                Privacy Policy
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 left-[321px] w-[198.3px] flex flex-col items-start justify-start gap-[23px]">
                        <div className="self-stretch relative underline leading-[30px] font-semibold flex items-center h-[34.2px] flex-shrink-0">Our Expertise</div>
                        <div className="w-[155px] relative h-[76.8px] text-[17px]">
                            <div
                                className="absolute top-0 left-0 leading-[30px] font-light flex items-center w-[155px] h-[34.2px] cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/mass-tort")}
                            >
                                Mass Tort
                            </div>
                            <div
                                className="absolute top-[41.8px] left-0 leading-[30px] font-light flex items-center w-[112px] h-[35px] cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/class-action")}
                            >
                                Class Action
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[110.5px] left-[571.5px] border-r border-[rgba(140,140,140,0.5)] box-border w-[1px] h-[784px]" />
                <img className="absolute top-[754px] left-[43px] w-6 h-6 overflow-hidden" alt="Email icon" src={Footer2} />
                <a
                    className="absolute top-[747.58px] left-[84px] text-[18px] underline leading-[34px] text-inherit hover:text-[#f2c438] transition-colors"
                    href="mailto:info@connect2attorney.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    info@connect2attorney.com
                </a>
                <form
                    onSubmit={handleSubmit}
                    className="absolute top-[342px] left-[694px] rounded-lg border border-[#4b4e8a] box-border w-[552px] h-[509px] overflow-hidden text-[16px] text-[#686b9a]"
                >
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`absolute top-[417px] left-[calc(50%-125px)] rounded-xl bg-[#f2c438] w-[250px] h-[55px] flex flex-row items-center justify-center p-[19px_70px] box-border text-[20px] text-[#0d0d0d] transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#e0b32e] cursor-pointer'}`}
                    >
                        <div className="relative uppercase font-semibold">
                            {isSubmitting ? 'Submitting...' : submitSuccess ? 'Submitted!' : 'Submit'}
                        </div>
                    </button>
                    <div className="absolute top-[24px] left-[calc(50%-138px)] leading-[28px] text-center text-[20px] text-[#f9f9f9]">
                        <p className="m-0">
                            <span>
                                <span className="font-semibold font-poppins">General Inquiries?</span>
                            </span>
                            <span>
                                <span>{` `}</span>
                            </span>
                        </p>
                        <p className="m-0 text-[18px] text-[#a7a7a7]">
                            <span>
                                <span>{submitSuccess ? 'Thank you! We\'ll be in touch soon.' : 'This form has got you covered.'}</span>
                            </span>
                        </p>
                    </div>
                    <div className={`absolute top-[117px] left-[65px] filter drop-shadow-[0px_4px_4px_rgba(154,194,255,0.29)] rounded-2xl border ${formErrors.name ? 'border-red-400' : 'border-[#f9f9f9]'} box-border w-[423px] h-[42px] flex flex-row items-center justify-start p-[8.9px_8.9px_8.9px_27.5px] text-[#d8d8d8]`}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="relative w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[#d8d8d8]"
                        />
                    </div>
                    <div className={`absolute top-[190px] left-[65px] rounded-2xl border ${formErrors.phone ? 'border-red-400' : 'border-[#89898b]'} box-border w-[423px] flex flex-row items-center justify-start p-[8.9px_8.9px_8.9px_27.5px] text-[rgba(104,107,154,0.7)]`}>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="relative w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[rgba(104,107,154,0.7)]"
                        />
                    </div>
                    <div className={`absolute top-[263px] left-[65px] rounded-[11.99px] border-[0.7px] ${formErrors.email ? 'border-red-400' : 'border-[#b9b9b9]'} box-border w-[423px] h-[43px] flex flex-row items-center justify-start p-[6.7px_6.7px_6.7px_20.7px]`}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="E-Mail Id"
                            className="relative w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[#686b9a]"
                        />
                    </div>
                    <div className={`absolute top-[336px] left-[65px] rounded-[11.99px] border-[0.7px] ${formErrors.message ? 'border-red-400' : 'border-[#89898b]'} box-border w-[423px] h-[43px] flex flex-row items-center justify-start p-[6.7px_20.7px_6.7px_20.7px]`}>
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="How can we provide clarity for you?"
                            className="relative w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[#686b9a]"
                        />
                    </div>
                </form>
                <img
                    className="absolute top-[307px] left-[1237px] w-[51.2px] h-[52.5px] overflow-hidden object-contain"
                    alt="Decoration"
                    src={LP2}
                />
            </div>
        </div>
    );

    const MobileFooter = () => (
        <div className="w-full relative bg-[#162766] overflow-hidden text-left text-[20px] text-[#f9f9f9] font-poppins">
            <img
                className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
                alt="Background pattern"
                src={BannerImg}
            />
            <div className="relative w-full px-4 py-5">
                <div className="absolute top-0 left-0 bg-[#162766] w-full h-full" />

                <form
                    onSubmit={handleSubmit}
                    className="relative rounded-lg border box-border w-full mb-8 p-4 overflow-hidden text-[16px] text-[#686b9a]"
                >
                    <div className="text-left mb-5 text-[18px] text-[#f9f9f9]">
                        <p className="m-0 font-semibold">General Inquiries?</p>
                        <p className="m-0 text-[16px] text-[#a7a7a7]">
                            {submitSuccess ? 'Thank you! We\'ll be in touch soon.' : 'This form has got you covered.'}
                        </p>
                    </div>

                    <div className={`mb-3 filter drop-shadow-[0px_4px_4px_rgba(154,194,255,0.29)] rounded-2xl border ${formErrors.name ? 'border-red-400' : 'border-[#f9f9f9]'} box-border w-full h-[42px] flex flex-row items-center justify-start p-[8.9px_8.9px_8.9px_15px] text-[#d8d8d8]`}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="relative w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[#d8d8d8]"
                        />
                    </div>

                    <div className={`mb-3 rounded-2xl border ${formErrors.phone ? 'border-red-400' : 'border-[#89898b]'} box-border w-full h-[42px] flex flex-row items-center justify-start p-[8.9px_8.9px_8.9px_15px] text-[rgba(104,107,154,0.7)]`}>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            className="relative w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[rgba(104,107,154,0.7)]"
                        />
                    </div>

                    <div className={`mb-3 rounded-[11.99px] border-[0.7px] ${formErrors.email ? 'border-red-400' : 'border-[#b9b9b9]'} box-border w-full h-[42px] flex flex-row items-center justify-start p-[8.9px_8.9px_8.9px_15px]`}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="E-Mail Id"
                            className="relative w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[#686b9a]"
                        />
                    </div>

                    <div className={`mb-5 rounded-[11.99px] border-[0.7px] ${formErrors.message ? 'border-red-400' : 'border-[#89898b]'} box-border w-full h-[42px] flex flex-row items-center justify-start p-[8.9px_15px]`}>
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="How can we provide clarity for you?"
                            className="relative w-full bg-transparent outline-none text-[#f9f9f9] placeholder-[#686b9a]"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full rounded-xl bg-[#f2c438] h-[50px] flex flex-row items-center justify-center text-[18px] text-[#0d0d0d] transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#e0b32e] cursor-pointer'}`}
                    >
                        <div className="uppercase font-semibold">
                            {isSubmitting ? 'Submitting...' : submitSuccess ? 'Submitted!' : 'Submit'}
                        </div>
                    </button>
                </form>

                <div className="relative w-[180px] h-[140px] text-[28px] text-black font-['Playfair_Display'] mb-6">
                    <div className="absolute top-0 left-0 bg-[#d9d9d9] w-full h-full" />
                    <div
                        className="absolute top-[50px] left-0 w-full text-center cursor-pointer"
                        onClick={() => window.location.href = "/"}
                    >
                        Logo
                    </div>
                </div>

                <div className="relative text-[16px] leading-[26px] text-left mb-8 max-w-full">
                    Connect2Attorney supports consumers harmed by prescription drugs or medical devices. We offer updates on current recalls and lawsuits and can connect you with one of our specialized legal partners if you need assistance finding an attorney.
                </div>

                <div className="relative w-full flex flex-col items-start mb-8">
                    <div className="mb-6 text-left">
                        <div className="underline leading-[30px] font-semibold mb-3">Company</div>
                        <div className="flex flex-col gap-2 text-[16px]">
                            <div
                                className="font-light cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/about")}
                            >
                                About Company
                            </div>
                            <div
                                className="font-light cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/contact")}
                            >
                                Contact us
                            </div>
                            <div
                                className="font-light cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/terms")}
                            >
                                Terms and Conditions
                            </div>
                            <div
                                className="font-light cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/privacy")}
                            >
                                Privacy Policy
                            </div>
                        </div>
                    </div>

                    <div className="text-left">
                        <div className="underline leading-[30px] font-semibold mb-3">Our Expertise</div>
                        <div className="flex flex-col gap-2 text-[16px]">
                            <div
                                className="font-light cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/mass-tort")}
                            >
                                Mass Tort
                            </div>
                            <div
                                className="font-light cursor-pointer hover:underline"
                                onClick={() => handleNavigation("/class-action")}
                            >
                                Class Action
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col items-start gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <img className="w-6 h-6 overflow-hidden" alt="Location icon" src={Footer1} />
                        <div
                            className="text-[16px] cursor-pointer hover:underline"
                            onClick={() => window.open("https://maps.google.com?q=123+Legal+Street,+New+York,+NY", "_blank")}
                        >
                            Get Directions
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <img className="w-6 h-6 overflow-hidden" alt="Email icon" src={Footer2} />
                        <a
                            className="text-[16px] underline text-inherit hover:text-[#f2c438] transition-colors"
                            href="mailto:info@connect2attorney.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            info@connect2attorney.com
                        </a>
                    </div>
                </div>

                <div className="relative flex gap-4 mb-6">
                    <a
                        href={socialLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-[60.82px] w-[45px] h-[45px] flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                        <img src={Footer3} alt="Facebook" className="w-full h-full object-contain" />
                    </a>
                    <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-[60.82px] w-[45px] h-[45px] flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                        <img src={Footer4} alt="Twitter" className="w-full h-full object-contain" />
                    </a>
                    <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-[60.82px] w-[45px] h-[45px] flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                        <img src={Footer5} alt="LinkedIn" className="w-full h-full object-contain" />
                    </a>
                    <a
                        href={socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-[60.82px] w-[45px] h-[45px] flex items-center justify-center hover:opacity-80 transition-opacity"
                    >
                        <img src={Footer6} alt="Instagram" className="w-full h-full object-contain" />
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {isMobile ? <MobileFooter /> : <DesktopFooter />}
        </>
    );
};

export default Footer;

