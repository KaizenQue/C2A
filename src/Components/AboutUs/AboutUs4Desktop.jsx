import React from 'react';

const AboutUs4Desktop = () => {
    // Cards data for reusability
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

            <div className="absolute top-0 left-[2px] w-[1440px] h-[744px] overflow-hidden">
                <img className="absolute top-[-40px] left-0 w-[1449px] h-[4814.4px]" alt="" src="actual grid.svg" />
                <div className="absolute top-[27px] left-[calc(50%-447px)] bg-[#d2d5ce] w-[894px] h-[141px] text-[45px] text-[#162766]">
                    <div className="absolute top-[20px] left-[calc(50%-178px)] w-[357px] h-[101px]">
                        <b className="absolute top-0 left-[calc(50%-178.5px)]">Why Choose Us</b>
                        <div className="absolute top-[68px] left-[calc(50%-104.5px)] text-[22px] text-[#5a5a5a] text-center">What Sets Us Apart</div>
                    </div>
                </div>
                
                {/* Desktop cards layout */}
                <div className="absolute top-[218px] left-[174px]">
                    <Card title={cards[0].title} description={cards[0].description} className="w-[213px]" />
                </div>
                <div className="absolute top-[219px] left-[467px]">
                    <Card title={cards[1].title} description={cards[1].description} className="w-[213px]" />
                </div>
                <div className="absolute top-[219px] left-[760px]">
                    <Card title={cards[2].title} description={cards[2].description} className="w-[213px]" />
                </div>
                <div className="absolute top-[218px] left-[1053px]">
                    <Card title={cards[3].title} description={cards[3].description} className="w-[213px]" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs4Desktop; 