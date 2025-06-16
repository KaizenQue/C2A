import Map from '../../assets/Map.svg'
import CU1 from '../../assets/CU1.svg'
import CU2 from '../../assets/CU2.svg'
import CU3 from '../../assets/CU3.svg'
import { useState, useEffect } from 'react'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        handleResize();
        
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };
    
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            setSubmitted(true);
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                setSubmitStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                
                setTimeout(() => {
                    setSubmitted(false);
                    setSubmitStatus(null);
                }, 5000);
                
            } catch (error) {
                setSubmitStatus('error');
                
                setTimeout(() => {
                    setSubmitted(false);
                    setSubmitStatus(null);
                }, 5000);
            }
        }
    };
    
    const getResponsiveStyles = (defaultStyles) => {
        if (!isMobile) return defaultStyles;
        
        return {
            ...defaultStyles,
            width: defaultStyles.width ? "90%" : defaultStyles.width,
            left: defaultStyles.left === "calc(50% - 287px)" ? "5%" : defaultStyles.left,
            
            top: defaultStyles.top && typeof defaultStyles.top === 'string' && defaultStyles.top.includes('px') ? 
               
                `${parseInt(defaultStyles.top) * 0.9}px` : defaultStyles.top
        };
    };
    
    const getFormContainerStyles = () => {
        const defaultStyles = {
            position: "absolute", 
            top: "219px", 
            left: "calc(50% - 397px)", 
            backdropFilter: "blur(36.76px)", 
            borderRadius: "22.06px", 
            background: "linear-gradient(180deg, rgba(12, 24, 65, 0.49), rgba(10, 18, 49, 0))", 
            width: "794px", 
            height: "750px",
            overflow: "hidden", 
            fontSize: "18px", 
            color: "#686b9a"
        };
        
        if (!isMobile) return defaultStyles;
        
        return {
            ...defaultStyles,
            width: "90%",
            left: "5%",
            top: "130px",
            height: "auto",
            minHeight: "700px",
            padding: "20px 0"
        };
    };
    
    const getContactCardStyles = (index) => {
        const baseLeft = index === 0 ? "101px" : index === 1 ? "531px" : "961px";
        const defaultStyles = {
            position: "absolute", 
            top: "1075px",
            left: baseLeft, 
            borderRadius: "12px", 
            border: "1px solid rgba(112, 150, 209, 0.22)", 
            boxSizing: "border-box", 
            width: "378px", 
            height: "349px"
        };
        
        if (!isMobile) return defaultStyles;
        
        return {
            ...defaultStyles,
            left: "calc(50% - 180px)",
            top: `${950 + (index * 350)}px`,
            width: "360px",
            height: "320px"
        };
    };
    
    return (
        <div style={{
            width: "100%", 
            position: "relative", 
            backgroundColor: "#162766", 
            height: isMobile ? "2000px" : "1545px",
            overflow: "hidden", 
            textAlign: "left", 
            fontSize: "28px", 
            color: "#f9f9f9", 
            fontFamily: "Poppins"
        }}>
            <img 
                style={{
                    position: "absolute", 
                    height: isMobile ? "20%" : "33.2%", 
                    top: "10.38%", 
                    bottom: "56.42%", 
                    left: isMobile ? "0" : "calc(50% - 702px)", 
                    maxHeight: "100%", 
                    width: isMobile ? "100%" : "1405px"
                }} 
                alt="Map background" 
                src={Map} 
            />
            
            <div style={{
                position: "absolute", 
                top: isMobile ? "50px" : "calc(50% - 1222px)",
                left: isMobile ? "5%" : "calc(50% - 640px)", 
                lineHeight: isMobile ? "60px" : "85.61px",
                textAlign: "center", 
                display: "inline-block", 
                width: isMobile ? "90%" : "829px", 
                fontSize: isMobile ? "80px" : "132px"
            }}>
                {/* <b>
                    <span>Get in touch</span>
                    <span style={{fontSize: isMobile ? "70px" : "112.5px"}}>{` `}</span>
                </b> */}
                {/* <span style={{fontSize: isMobile ? "36px" : "56px", fontWeight: "500"}}>with our team</span> */}
            </div>
            
            <form onSubmit={handleSubmit} style={getFormContainerStyles()}>
                <div style={{position: "absolute", top: isMobile ? "50px" : "85.77px", left: isMobile ? "calc(50% - 100px)" : "calc(50% - 107px)", fontSize: isMobile ? "32px" : "38.3px", fontWeight: "600", color: "#f9f9f9"}}>
                    Contact us
                </div>
                
                {submitted && submitStatus === 'success' && (
                    <div style={{
                        position: "absolute",
                        top: isMobile ? "100px" : "140px",
                        left: isMobile ? "5%" : "calc(50% - 287px)",
                        width: isMobile ? "90%" : "573.2px",
                        padding: "10px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(75, 181, 67, 0.2)",
                        color: "#4BB543",
                        textAlign: "center"
                    }}>
                        Thank you for your message! We'll get back to you soon.
                    </div>
                )}
                
                {submitted && submitStatus === 'error' && (
                    <div style={{
                        position: "absolute",
                        top: isMobile ? "100px" : "140px",
                        left: isMobile ? "5%" : "calc(50% - 287px)",
                        width: isMobile ? "90%" : "573.2px",
                        padding: "10px",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255, 0, 0, 0.2)",
                        color: "#ff0000",
                        textAlign: "center"
                    }}>
                        Something went wrong. Please try again later.
                    </div>
                )}
                
                <div style={getResponsiveStyles({
                    position: "absolute", 
                    top: "166.64px", 
                    left: "calc(50% - 287px)", 
                    borderRadius: "17.15px", 
                    border: errors.firstName ? "1.1px solid #ff0000" : "1.1px solid #f9f9f9", 
                    boxSizing: "border-box", 
                    width: "573.2px", 
                    height: "47.8px", 
                    display: "flex", 
                    flexDirection: "column", 
                    padding: "0",
                    color: "#d8d8d8"
                })}>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: "#d8d8d8",
                            padding: "10.9px 10.9px 10.9px 33.7px",
                            fontSize: "18px",
                            fontFamily: "Poppins"
                        }}
                    />
                    {errors.firstName && (
                        <div style={{
                            color: "#ff0000",
                            fontSize: "12px",
                            position: "absolute",
                            bottom: "-20px",
                            left: "33.7px"
                        }}>
                            {errors.firstName}
                        </div>
                    )}
                </div>
                
                <div style={getResponsiveStyles({
                    position: "absolute", 
                    top: "225px",
                    left: "calc(50% - 287px)", 
                    borderRadius: "17.15px", 
                    border: errors.lastName ? "1px solid #ff0000" : "1px solid #686b9a", 
                    boxSizing: "border-box", 
                    width: "573.2px", 
                    height: "47.8px", 
                    display: "flex", 
                    flexDirection: "column", 
                    padding: "0"
                })}>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: "#686b9a",
                            padding: "8.6px 8.6px 8.6px 34px",
                            fontSize: "18px",
                            fontFamily: "Poppins"
                        }}
                    />
                    {errors.lastName && (
                        <div style={{
                            color: "#ff0000",
                            fontSize: "12px",
                            position: "absolute",
                            bottom: "-20px",
                            left: "34px"
                        }}>
                            {errors.lastName}
                        </div>
                    )}
                </div>
                
                <div style={getResponsiveStyles({
                    position: "absolute", 
                    top: "285px",
                    left: "calc(50% - 287px)", 
                    borderRadius: "17.15px", 
                    border: errors.email ? "1px solid #ff0000" : "1px solid #686b9a", 
                    boxSizing: "border-box", 
                    width: "573.2px", 
                    height: "46.6px", 
                    display: "flex", 
                    flexDirection: "column", 
                    padding: "0"
                })}>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: "#686b9a",
                            padding: "9.7px 9.7px 9.7px 34px",
                            fontSize: "18px",
                            fontFamily: "Poppins"
                        }}
                    />
                    {errors.email && (
                        <div style={{
                            color: "#ff0000",
                            fontSize: "12px",
                            position: "absolute",
                            bottom: "-20px",
                            left: "34px"
                        }}>
                            {errors.email}
                        </div>
                    )}
                </div>
                
                <div style={getResponsiveStyles({
                    position: "absolute", 
                    top: "345px",
                    left: "calc(50% - 287px)", 
                    borderRadius: "17.15px", 
                    border: errors.phone ? "1px solid #ff0000" : "1px solid #686b9a", 
                    boxSizing: "border-box", 
                    width: "573.2px", 
                    height: "46.6px", 
                    display: "flex", 
                    flexDirection: "column", 
                    padding: "0"
                })}>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: "#686b9a",
                            padding: "9.7px 9.7px 9.7px 34px",
                            fontSize: "18px",
                            fontFamily: "Poppins"
                        }}
                    />
                    {errors.phone && (
                        <div style={{
                            color: "#ff0000",
                            fontSize: "12px",
                            position: "absolute",
                            bottom: "-20px",
                            left: "34px"
                        }}>
                            {errors.phone}
                        </div>
                    )}
                </div>
                
                <div style={getResponsiveStyles({
                    position: "absolute", 
                    top: "405px",
                    left: "calc(50% - 287px)", 
                    borderRadius: "17.15px", 
                    border: errors.message ? "1px solid #ff0000" : "1px solid #686b9a", 
                    boxSizing: "border-box", 
                    width: "573.2px", 
                    height: "182.6px", 
                    padding: "0"
                })}>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "transparent",
                            border: "none",
                            outline: "none",
                            color: "#686b9a",
                            padding: "22px 15px 15px 34px",
                            fontSize: "17.15px",
                            fontFamily: "Poppins",
                            resize: "none"
                        }}
                    />
                    {errors.message && (
                        <div style={{
                            color: "#ff0000",
                            fontSize: "12px",
                            position: "absolute",
                            bottom: "-20px",
                            left: "34px"
                        }}>
                            {errors.message}
                        </div>
                    )}
                </div>
                
                <button 
                    type="submit"
                    style={{
                        position: "absolute", 
                        top: isMobile ? "600px" : "650px", 
                        left: isMobile ? "calc(50% - 106px)" : "calc(50% - 106px)", 
                        borderRadius: "10.21px", 
                        backgroundColor: submitted ? "#cccccc" : "#f2c438", 
                        width: "212.8px", 
                        height: "46.8px", 
                        display: "flex", 
                        flexDirection: "row", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        padding: "16.2px 59.6px", 
                        boxSizing: "border-box", 
                        fontSize: "17.02px", 
                        color: "#0d0d0d",
                        border: "none",
                        cursor: submitted ? "default" : "pointer",
                        opacity: submitted ? 0.7 : 1
                    }}
                    disabled={submitted}
                >
                    <div style={{position: "relative", textTransform: "uppercase", fontWeight: "600"}}>
                        {submitted ? "Sending..." : "Submit"}
                    </div>
                </button>
            </form>
            <div style={{position: "relative", left: "0px", bottom: "50px"}}>
            <div style={getContactCardStyles(0)}>
                <img style={{position: "absolute", top: "40px", left: "27px", width: isMobile ? "75px" : "94px", height: isMobile ? "75px" : "94px"}} alt="Phone icon" src={CU1} />
                <div style={{position: "absolute", top: isMobile ? "150px" : "169px", left: "27px", fontWeight: "600"}}>+1 (555) 000-0000</div>
                <div style={{position: "absolute", top: isMobile ? "220px" : "246px", left: "27px", fontSize: isMobile ? "22px" : "26px", fontWeight: "300", color: "#fff"}}>Give us a Call</div>
            </div>
            <div style={getContactCardStyles(1)}>
                <img style={{position: "absolute", top: "40px", left: "27px", width: isMobile ? "75px" : "94px", height: isMobile ? "75px" : "94px"}} alt="Email icon" src={CU2} />
                <div style={{position: "absolute", top: isMobile ? "150px" : "168px", left: "27px", fontWeight: "600"}}>support@domain.com</div>
                <div style={{position: "absolute", top: isMobile ? "220px" : "245px", left: "27px", fontSize: isMobile ? "22px" : "26px", fontWeight: "300", color: "#fff"}}>Send an Email</div>
            </div>
            <div style={getContactCardStyles(2)}>
                <img style={{position: "absolute", top: "40px", left: "27px", width: isMobile ? "75px" : "94px", height: isMobile ? "75px" : "94px"}} alt="Chat icon" src={CU3} />
                <div style={{position: "absolute", top: isMobile ? "150px" : "168px", left: "27px", fontWeight: "600"}}>Hi There!</div>
                <div style={{position: "absolute", top: isMobile ? "220px" : "245px", left: "27px", fontSize: isMobile ? "22px" : "26px", fontWeight: "300", color: "#fff"}}>Live Chat Support</div>
            </div>
            </div>
        </div>
    );
};

export default ContactUs;
