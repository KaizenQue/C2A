import { memo } from 'react';

const LandingPageMobile2 = memo(({ 
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
    isSpeaking
}) => {
    return (
        <div className="w-full min-h-screen bg-[#162766] px-4 py-6 overflow-x-hidden text-left text-[18px] text-[rgba(141,142,158,0.7)] font-poppins">
            <div className="w-full max-w-[500px] mx-auto">
                <div className="text-center mb-8">
                    <b className="text-[32px] text-[#f9f9f9] block mb-2">Get a Free Case Review</b>
                    <div className="text-[18px] text-[#9193a7]">Get the Answers You Need, Absolutely Free!</div>
                </div>

                {!showTermsStep ? (
                    <div className="space-y-4">
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange(e, 'name')}
                            placeholder="Name"
                            className={`w-full bg-transparent rounded-[15px] border ${errors.name ? 'border-[#ff4d4f]' : 'border-[#f9f9f9]'} p-3 text-[#d8d8d8] outline-none`}
                            ref={inputRefs.name}
                        />
                        {errors.name && <div className="text-[#ff4d4f] text-[14px]">{errors.name}</div>}

                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            placeholder="Phone Number"
                            className={`w-full bg-transparent rounded-[15px] border ${errors.phone ? 'border-[#ff4d4f]' : 'border-[#8d8e9e]'} p-3 text-white outline-none placeholder-white`}
                            ref={inputRefs.phone}
                        />
                        {errors.phone && <div className="text-[#ff4d4f] text-[14px]">{errors.phone}</div>}

                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange(e, 'email')}
                            placeholder="E-Mail Id"
                            className={`w-full bg-transparent rounded-[15px] border ${errors.email ? 'border-[#ff4d4f]' : 'border-[#8d8e9e]'} p-3 text-white outline-none placeholder-white`}
                            ref={inputRefs.email}
                        />
                        {errors.email && <div className="text-[#ff4d4f] text-[14px]">{errors.email}</div>}

                        <div
                            ref={categoryDropdownRef}
                            className={`relative w-full bg-transparent rounded-[15px] border ${errors.category ? 'border-[#ff4d4f]' : 'border-[#8d8e9e]'} p-3`}
                        >
                            <div
                                onClick={() => toggleDropdown('category')}
                                className="flex flex-row items-center justify-between cursor-pointer"
                            >
                                <div className="text-white">
                                    {formData.category || "Select the category"}
                                </div>
                                <svg
                                    width="21.3"
                                    height="21.3"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`transform transition-transform duration-200 ${activeDropdown === 'category' ? 'rotate-180' : ''}`}
                                >
                                    <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {activeDropdown === 'category' && (
                                <div className="absolute left-0 right-0 top-full mt-1 bg-[#162766] rounded-[15px] border border-[#8d8e9e] max-h-[200px] overflow-y-auto z-50">
                                    {categoryOptions.map((option, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                handleChange({ target: { value: option } }, 'category');
                                                toggleDropdown(null);
                                            }}
                                            className="px-4 py-3 cursor-pointer text-white hover:bg-[#1f3580] transition-colors"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {errors.category && <div className="text-[#ff4d4f] text-[14px] mt-1">{errors.category}</div>}
                        </div>

                        <div
                            ref={concernDropdownRef}
                            className={`relative w-full bg-transparent rounded-[15px] border ${errors.concern ? 'border-[#ff4d4f]' : 'border-[#8d8e9e]'} p-3`}
                        >
                            <div
                                onClick={() => toggleDropdown('concern')}
                                className="flex flex-row items-center justify-between cursor-pointer"
                            >
                                <div className="text-white">
                                    {formData.concern || "Select Your Concern"}
                                </div>
                                <svg
                                    width="21.3"
                                    height="21.3"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`transform transition-transform duration-200 ${activeDropdown === 'concern' ? 'rotate-180' : ''}`}
                                >
                                    <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            {activeDropdown === 'concern' && (
                                <div className="absolute left-0 right-0 top-full mt-1 bg-[#162766] rounded-[15px] border border-[#8d8e9e] max-h-[200px] overflow-y-auto z-50">
                                    {concernOptions.map((option, index) => (
                                        <div
                                            key={index}
                                            onClick={() => {
                                                handleChange({ target: { value: option } }, 'concern');
                                                toggleDropdown(null);
                                            }}
                                            className="px-4 py-3 cursor-pointer text-white hover:bg-[#1f3580] transition-colors"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {errors.concern && <div className="text-[#ff4d4f] text-[14px] mt-1">{errors.concern}</div>}
                        </div>

                        <div className="w-full bg-transparent rounded-[15px] border border-[#8d8e9e] border-[0.9px] box-border p-3 h-[146.5px] overflow-hidden relative">
                            <textarea
                                value={formData.caseHistory}
                                onChange={(e) => handleChange(e, 'caseHistory')}
                                placeholder="Brief Case History"
                                className="w-full h-full bg-transparent border-none outline-none text-white text-[22px] font-poppins resize-none placeholder-white"
                                ref={inputRefs.caseHistory}
                            />
                            <div className="absolute bottom-3 right-3 flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => startVoiceInput('caseHistory')}
                                    className="w-[26px] h-[26px] cursor-pointer hover:opacity-80"
                                    aria-label="Record voice input"
                                >
                                    <svg
                                        className="w-full h-full"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1Z" stroke="rgba(141, 142, 158, 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10" stroke="rgba(141, 142, 158, 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 19V23" stroke="rgba(141, 142, 158, 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 23H16" stroke="rgba(141, 142, 158, 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    onClick={handleFileUpload}
                                    className="w-[26px] h-[26px] cursor-pointer hover:opacity-80"
                                    aria-label="Attach file"
                                >
                                    <svg
                                        className="w-full h-full"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59723 21.9983 8.005 21.9983C6.41277 21.9983 4.88584 21.3658 3.76 20.24C2.63416 19.1142 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63416 12.8758 3.76 11.75L12.67 2.84C13.5286 1.98136 14.6955 1.49875 15.91 1.49875C17.1245 1.49875 18.2914 1.98136 19.15 2.84C20.0086 3.69864 20.4912 4.86553 20.4912 6.08C20.4912 7.29447 20.0086 8.46136 19.15 9.32L10.23 18.24C9.80096 18.669 9.21822 18.9084 8.61 18.9084C8.00178 18.9084 7.41904 18.669 6.99 18.24C6.56096 17.811 6.32158 17.2282 6.32158 16.62C6.32158 16.0118 6.56096 15.429 6.99 15L15.42 6.56"
                                            stroke="rgba(141, 142, 158, 0.7)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <div className="text-[24px] text-[#f9f9f9] font-medium">Terms & Conditions</div>
                        <div className="text-[18px] text-[#d8d8d8] mb-[30px]">
                            Please review and agree to the following terms before submitting your case information:
                        </div>

                        <div className="mb-[20px] flex items-start">
                            <div
                                className="flex items-center justify-center min-w-[24px] min-h-[24px] w-[24px] h-[24px] mr-[15px] border border-[#8d8e9e] rounded-[4px] cursor-pointer flex-shrink-0"
                                onClick={() => handleCheckboxChange('contactConsent')}
                            >
                                {termsAgreements.contactConsent && (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#f2c438" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <div className="text-[16px] text-[#d8d8d8]">
                                I would be needing help to file a claim?
                            </div>
                        </div>

                        <div className="mb-[20px] flex items-start">
                            <div
                                className="flex items-center justify-center min-w-[24px] min-h-[24px] w-[24px] h-[24px] mr-[15px] border border-[#8d8e9e] rounded-[4px] cursor-pointer flex-shrink-0"
                                onClick={() => handleCheckboxChange('privacyPolicy')}
                            >
                                {termsAgreements.privacyPolicy && (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#f2c438" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <div className="text-[16px] text-[#d8d8d8]">
                                I agree to the privacy policy and disclaimer and give my express written consent, affiliates and/or attorneys to contact you atthe number provided above, even if this number is a wireless number or if I am presently listed on a Do Not Call list. I understand that I may be contacted by telephone, email, text message or mail regarding case options and that I may be called using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.
                            </div>
                        </div>

                        <div className="mb-[20px] flex items-start">
                            <div
                                className="flex items-center justify-center min-w-[24px] min-h-[24px] w-[24px] h-[24px] mr-[15px] border border-[#8d8e9e] rounded-[4px] cursor-pointer flex-shrink-0"
                                onClick={() => handleCheckboxChange('termsOfService')}
                            >
                                {termsAgreements.termsOfService && (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17L4 12" stroke="#f2c438" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <div className="text-[16px] text-[#d8d8d8]">
                                Please click this box so we know you're a person and not a computer.
                            </div>
                        </div>

                        {termsError && (
                            <div className="text-[#ff4d4f] text-[16px] mb-[20px]">
                                {termsError}
                            </div>
                        )}

                        <div className="mt-[30px] mb-[20px] flex items-center">
                            <div className="text-[16px] text-[#d8d8d8] mr-[15px]">
                                Click the speaker to hear the terms read aloud:
                            </div>
                            <button
                                type="button"
                                onClick={readTermsAloud}
                                className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#f2c438] cursor-pointer hover:bg-[#e0b32e] transition-colors relative"
                                aria-label={isSpeaking ? "Stop reading terms" : "Read terms aloud"}
                            >
                                {isSpeaking ? (
                                    <svg
                                        className="w-[24px] h-[24px]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect x="6" y="6" width="12" height="12" fill="#162766" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-[24px] h-[24px]"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#162766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" stroke="#162766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.07 5.93C20.9447 7.80528 21.9979 10.3447 21.9979 13C21.9979 15.6553 20.9447 18.1947 19.07 20.07" stroke="#162766" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                )}
                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full mt-[15px] rounded-xl bg-[#f2c438] p-4 text-black font-semibold text-center ${isSubmitting ? 'opacity-70' : 'hover:bg-[#e0b32e]'}`}
                >
                    {isSubmitting ? "PROCESSING" : "SUBMIT"}
                </button>
            </div>
        </div>
    );
});

export default LandingPageMobile2; 