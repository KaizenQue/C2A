import React from 'react';

const AboutUs4Mobile = () => {
    // Cards data
    const cards = [
        { id: 1, title: "Loreum Ipsum", description: "Loreum ipsum iri doleum maza" },
        { id: 2, title: "Loreum Ipsum", description: "Loreum ipsum iri doleum maza" },
        { id: 3, title: "Loreum Ipsum", description: "Loreum ipsum iri doleum maza" },
        { id: 4, title: "Loreum Ipsum", description: "Loreum ipsum iri doleum maza" },
    ];

    // Card component for reuse
    const Card = ({ title, description, className = "" }) => (
        <div className={`bg-[#cfd3ce] h-[390px] relative ${className}`}>
            <div className="absolute top-[244px] left-[26px] font-semibold">{title}</div>
            <div className="absolute top-[48px] left-[22px] rounded-[15.91px] bg-[#162766] border-[0.7px] border-[#162766] box-border w-[169px] h-[164.4px]" />
            <div className="absolute top-[309px] left-[28px] text-[18px] inline-block w-[156px]">{description}</div>
        </div>
    );

    return (
        <div className="w-full relative bg-[#d2d5ce] min-h-[699px] overflow-hidden text-left text-[22px] text-black font-poppins">
            {/* Common title section */}
            <div className="w-full pt-8 pb-4 mb-8 bg-[#d2d5ce] text-center text-[#162766]">
                <h2 className="text-3xl md:text-[45px] font-bold">Why Choose Us</h2>
                <p className="text-lg md:text-[22px] text-[#5a5a5a] mt-2">What Sets Us Apart</p>
            </div>

            {/* Scrollable cards container */}
            <div className="relative w-full">
                <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar">
                    {cards.map((card) => (
                        <div 
                            key={card.id} 
                            className="snap-start flex-shrink-0 w-[70%] first:ml-4 last:mr-4"
                        >
                            <Card
                                title={card.title}
                                description={card.description}
                                className="w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default AboutUs4Mobile; 