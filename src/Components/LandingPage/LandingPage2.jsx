import { useState, useRef, useEffect } from 'react';
import LandingPageDesktop2 from './LandingPageDesktop2';
import LandingPageMobile2 from './LandingPageMobile2';

const LandingPage2 = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        category: '',
        concern: '',
        caseHistory: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showTermsStep, setShowTermsStep] = useState(false);
    const [termsAgreements, setTermsAgreements] = useState({
        contactConsent: false,
        privacyPolicy: false,
        termsOfService: false
    });
    const [termsError, setTermsError] = useState('');
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const categoryDropdownRef = useRef(null);
    const concernDropdownRef = useRef(null);
    const inputRefs = {
        name: useRef(null),
        phone: useRef(null),
        email: useRef(null),
        caseHistory: useRef(null)
    };

    const categoryOptions = [
        'Personal Injury',
        'Medical Malpractice',
        'Product Liability',
        'Workers Compensation',
        'Social Security Disability',
        'Other'
    ];

    const concernOptions = [
        'Car Accident',
        'Slip and Fall',
        'Medical Negligence',
        'Defective Product',
        'Workplace Injury',
        'Other'
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if click was outside both dropdowns
            if (
                (categoryDropdownRef.current && !categoryDropdownRef.current.contains(event.target)) &&
                (concernDropdownRef.current && !concernDropdownRef.current.contains(event.target))
            ) {
                setActiveDropdown(null);
            }
        };

        // Only add the listener if a dropdown is open
        if (activeDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [activeDropdown]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.category) newErrors.category = 'Category is required';
        if (!formData.concern) newErrors.concern = 'Concern is required';
        return newErrors;
    };

    const handleChange = (e, field) => {
        const value = e.target ? e.target.value : e;
        
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        // Clear any errors for this field
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }

        // Close dropdown after selection for category and concern fields
        if (field === 'category' || field === 'concern') {
            setActiveDropdown(null);
        }
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 10) {
            setFormData(prev => ({
                ...prev,
                phone: value
            }));
        if (errors.phone) {
                setErrors(prev => ({
                    ...prev,
                    phone: ''
            }));
        }
        }
    };

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdown);
            // Close any other dropdowns
            if (dropdown === 'category') {
                concernDropdownRef.current?.blur();
            } else if (dropdown === 'concern') {
                categoryDropdownRef.current?.blur();
            }
        }
    };

    const handleCheckboxChange = (checkbox) => {
        setTermsAgreements(prev => ({
            ...prev,
            [checkbox]: !prev[checkbox]
        }));
        if (termsError) {
            setTermsError('');
        }
    };

    const readTermsAloud = () => {
        const termsText = `
            Terms and Conditions:
            Please review and agree to the following terms before submitting your case information:
            1. I would be needing help to file a claim.
            2. I agree to the privacy policy and disclaimer and give my express written consent, affiliates and/or attorneys to contact you at the number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
            3. Please click this box so we know you're a person and not a computer.
        `;

        if ('speechSynthesis' in window) {
            if (isSpeaking) {
                window.speechSynthesis.cancel();
                setIsSpeaking(false);
                return;
            }

            // Cancel any ongoing speech
            window.speechSynthesis.cancel();

            const speech = new SpeechSynthesisUtterance(termsText);
            speech.rate = 0.9;
            speech.pitch = 1;
            speech.volume = 1;
            speech.lang = 'en-US';

            speech.onend = () => {
                setIsSpeaking(false);
            };

            speech.onerror = () => {
                setIsSpeaking(false);
            };

            setIsSpeaking(true);
            window.speechSynthesis.speak(speech);
        } else {
            alert('Text-to-speech is not supported in your browser.');
        }
    };

    const handleFileUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf,.doc,.docx,.txt';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                // Handle file upload logic here
                console.log('File selected:', file);
            }
        };
        input.click();
    };

    const startVoiceInput = (field) => {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new window.webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setFormData(prev => ({
                    ...prev,
                    [field]: prev[field] + ' ' + transcript
                }));
            };

            recognition.start();
        } else {
            alert('Speech recognition is not supported in this browser.');
        }
    };

    const handleSubmit = async () => {
        if (!showTermsStep) {
            const formErrors = validateForm();
            if (Object.keys(formErrors).length > 0) {
                setErrors(formErrors);
                return;
            }
            setShowTermsStep(true);
        } else {
            if (!termsAgreements.contactConsent || !termsAgreements.privacyPolicy || !termsAgreements.termsOfService) {
                setTermsError('Please agree to all terms and conditions');
                return;
            }

            setIsSubmitting(true);
            try {
                // Log all form data and checkbox data
                console.log('Form Data:', {
                    ...formData,
                    termsAgreements: {
                        contactConsent: termsAgreements.contactConsent,
                        privacyPolicy: termsAgreements.privacyPolicy,
                        termsOfService: termsAgreements.termsOfService
                    }
                });

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000));
                setIsSubmitted(true);
            } catch (error) {
                console.error('Error submitting form:', error);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const commonProps = {
        formData,
        errors,
        isSubmitting,
        showTermsStep,
        termsAgreements,
        termsError,
        activeDropdown,
        categoryDropdownRef,
        concernDropdownRef,
        inputRefs,
        handleChange,
        handlePhoneChange,
        toggleDropdown,
        handleCheckboxChange,
        readTermsAloud,
        handleSubmit,
        categoryOptions,
        concernOptions,
        startVoiceInput,
        handleFileUpload,
        isSubmitted,
        isSpeaking
    };

    return isMobile ? (
        <LandingPageMobile2 {...commonProps} />
    ) : (
        <LandingPageDesktop2 {...commonProps} />
    );
};

export default LandingPage2;
