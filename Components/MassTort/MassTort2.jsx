// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import MT from '../../assets/MT21.jpg';
// import MT2 from '../../assets/MT22.jpg';
// import MT3 from '../../assets/MT23.jpg';
// import MT4 from '../../assets/MT24.jpg';

// const MassTort2 = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     // Check on initial load
//     checkMobile();
    
//     // Add resize listener
//     window.addEventListener('resize', checkMobile);
    
//     // Cleanup
//     return () => window.removeEventListener('resize', checkMobile);
//   }, []);

//   const cards = [
//     {
//       id: 1,
//       title: "Product Liability",
//       description: "Representing victims harmed by defective products, medications, and medical devices.",
//       image: MT,
//     },
//     {
//       id: 2,
//       title: "Environmental Torts",
//       description: "Fighting for communities affected by toxic exposure and environmental contamination.",
//       image: MT2,
//     },
//     {
//       id: 3,
//       title: "Consumer Protection",
//       description: "Holding companies accountable for deceptive practices and consumer fraud.",
//       image: MT3,
//     },
//     {
//       id: 4,
//       title: "Pharmaceutical Litigation",
//       description: "Seeking justice for patients harmed by dangerous drugs and inadequate warnings.",
//       image: MT4,
//     },
//   ];

//   // Desktop version with animation effects
//   const DesktopVersion = () => (
//     <div className="flex justify-center gap-5 max-w-[1200px] mx-auto px-[10px] h-[550px]">
//       {cards.map((card) => (
//         <motion.div
//           key={card.id}
//           className="relative h-full rounded-xl overflow-hidden shadow-lg cursor-pointer"
//           onMouseEnter={() => setHoveredCard(card.id)}
//           onMouseLeave={() => setHoveredCard(null)}
//           initial={{ flex: 1 }}
//           animate={{
//             flex: hoveredCard === card.id ? 2.5 : hoveredCard ? 0.7 : 1,
//           }}
//           transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
//         >
//           <motion.div 
//             className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden"
//           >
//             <motion.img 
//               src={card.image} 
//               alt={card.title}
//               className="w-full h-full object-cover"
//               animate={{
//                 scale: hoveredCard === card.id ? 1.1 : 1,
//               }}
//               transition={{ duration: 0.7, ease: "easeOut" }}
//             />
//           </motion.div>

//           <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/85 via-black/60 to-black/0 z-20" />

//           <div className="absolute bottom-0 left-0 w-full p-[30px_20px] flex flex-col justify-end z-30">
//             <motion.h3 
//               className="m-0 mb-[10px] text-[22px] font-bold text-white drop-shadow-md"
//               animate={{
//                 fontSize: hoveredCard === card.id ? "24px" : "22px"
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               {card.title}
//             </motion.h3>
            
//             <motion.p 
//               className="m-0 mb-[15px] text-[15px] text-[#f0f0f0] leading-normal overflow-hidden drop-shadow-md"
//               animate={{
//                 height: hoveredCard === card.id ? "auto" : "45px",
//                 opacity: hoveredCard === card.id ? 1 : 0.9,
//               }}
//               transition={{ duration: 0.3 }}
//             >
//               {card.description}
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ 
//                 opacity: hoveredCard === card.id ? 1 : 0,
//                 y: hoveredCard === card.id ? 0 : 20,
//               }}
//               transition={{ duration: 0.3, delay: 0.1 }}
//             >
//               <button className="bg-[#f2c438] hover:bg-[#ffce45] text-[#333] border-none py-2 px-4 rounded font-medium cursor-pointer transition-all duration-200">
//                 Learn More
//               </button>
//             </motion.div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );

//   // Mobile version with a different layout
//   const MobileVersion = () => (
//     <div className="flex flex-col gap-6 max-w-[1200px] mx-auto px-[10px]">
//       {cards.map((card) => (
//         <div 
//           key={card.id}
//           className="relative h-[300px] rounded-xl overflow-hidden shadow-lg"
//         >
//           <div className="absolute top-0 left-0 w-full h-full z-10">
//             <img 
//               src={card.image} 
//               alt={card.title}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/85 via-black/60 to-black/0 z-20" />

//           <div className="absolute bottom-0 left-0 w-full p-[20px] flex flex-col justify-end z-30">
//             <h3 className="m-0 mb-[10px] text-[22px] font-bold text-white drop-shadow-md">
//               {card.title}
//             </h3>
            
//             <p className="m-0 mb-[15px] text-[15px] text-[#f0f0f0] leading-normal drop-shadow-md">
//               {card.description}
//             </p>

//             <button className="bg-[#f2c438] hover:bg-[#ffce45] text-[#333] border-none py-2 px-4 rounded font-medium cursor-pointer transition-all duration-200 w-full">
//               Learn More
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="bg-[#d2d5ce] min-h-screen px-5 pb-[60px]">
//       <div className="max-w-[800px] mx-auto mb-[60px] text-center text-[18px] leading-relaxed text-[#333]">
//         <p className="text-[18px]">
//           Securing justice for 14 mass tort cases.
//         </p>
//       </div>

//       <div className="flex justify-end max-w-[1200px] mx-auto mb-5 px-[10px]">
//         <button 
//           className="bg-[#162766] hover:bg-[#1e3385] text-white py-[10px] px-5 rounded flex items-center gap-[5px] font-medium transition-all duration-300"
//         >
//           View More
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//             <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
//           </svg>
//         </button>
//       </div>

//       {isMobile ? <MobileVersion /> : <DesktopVersion />}
//     </div>
//   );
// };

// export default MassTort2;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import images from assets
import MT from '../../assets/MT21.jpg';
import MT2 from '../../assets/MT22.jpg';
import MT3 from '../../assets/MT23.jpg';
import MT4 from '../../assets/MT24.jpg';

// Custom hook for media query
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const MassTort2 = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Card data using the imported images
  const cards = [
    {
      id: 1,
      title: "Product Liability",
      description: "Representing victims harmed by defective products, medications, and medical devices.",
      image: MT,
    },
    {
      id: 2,
      title: "Environmental Torts",
      description: "Fighting for communities affected by toxic exposure and environmental contamination.",
      image: MT2,
    },
    {
      id: 3,
      title: "Consumer Protection",
      description: "Holding companies accountable for deceptive practices and consumer fraud.",
      image: MT3,
    },
    {
      id: 4,
      title: "Pharmaceutical Litigation",
      description: "Seeking justice for patients harmed by dangerous drugs and inadequate warnings.",
      image: MT4,
    },
  ];

  const DesktopView = () => (
    <div className="cards-container" style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 10px",
      height: "550px",
    }}>
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className="card"
          onMouseEnter={() => setHoveredCard(card.id)}
          onMouseLeave={() => setHoveredCard(null)}
          initial={{ flex: 1 }}
          animate={{
            flex: hoveredCard === card.id ? 2.5 : hoveredCard ? 0.7 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          style={{
            position: "relative",
            height: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            cursor: "pointer",
          }}
        >
          <motion.div 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <motion.img 
              src={card.image} 
              alt={card.title}
              animate={{
                scale: hoveredCard === card.id ? 1.1 : 1,
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>

          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)",
            zIndex: 2,
          }} />

          <div className="card-content" style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            zIndex: 3,
          }}>
            <motion.h3 
              style={{ 
                margin: "0 0 10px 0",
                fontSize: "22px",
                fontWeight: "bold",
                color: "#fff",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
              }}
              animate={{
                fontSize: hoveredCard === card.id ? "24px" : "22px"
              }}
              transition={{ duration: 0.3 }}
            >
              {card.title}
            </motion.h3>
            
            <motion.p 
              style={{ 
                margin: "0 0 15px 0",
                fontSize: "15px",
                color: "#f0f0f0",
                lineHeight: "1.5",
                overflow: "hidden",
                textShadow: "0 1px 3px rgba(0,0,0,0.3)"
              }}
              animate={{
                height: hoveredCard === card.id ? "auto" : "45px",
                opacity: hoveredCard === card.id ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              {card.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: hoveredCard === card.id ? 1 : 0,
                y: hoveredCard === card.id ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <button style={{
                backgroundColor: "#f2c438",
                color: "#333",
                border: "none",
                padding: "8px 16px",
                borderRadius: "5px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#ffce45"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f2c438"}>
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const MobileView = () => (
    <div className="mobile-cards-container" style={{
      display: "flex",
      overflowX: "auto",
      gap: "10px",
      padding: "0 20px",
      scrollSnapType: "x mandatory",
      WebkitOverflowScrolling: "touch",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none"
      }
    }}>
      {cards.map((card) => (
        <div
          key={card.id}
          className="mobile-card"
          style={{
            position: "relative",
            height: "460px",
            minWidth: "85%",
            width: "85%",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            scrollSnapAlign: "start",
            flexShrink: 0
          }}
        >
          <img 
            src={card.image} 
            alt={card.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)",
          }} />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "20px",
            color: "white",
          }}>
            <h3 style={{ 
              margin: "0 0 10px 0",
              fontSize: "20px",
              fontWeight: "bold",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}>
              {card.title}
            </h3>
            <p style={{ 
              margin: "0 0 15px 0",
              fontSize: "14px",
              lineHeight: "1.5",
              textShadow: "0 1px 3px rgba(0,0,0,0.3)"
            }}>
              {card.description}
            </p>
            <button style={{
              backgroundColor: "#f2c438",
              color: "#333",
              border: "none",
              padding: "8px 16px",
              borderRadius: "5px",
              fontWeight: "500",
              cursor: "pointer",
            }}>
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mass-tort-container" style={{ 
      padding: "0px 20px 60px 20px",
      backgroundColor: "#d2d5ce",
      minHeight: "80vh",
    }}>
      <div className="central-paragraph" style={{
        maxWidth: "800px",
        margin: "0 auto 60px auto",
        textAlign: "center",
        fontSize: "18px",
        lineHeight: "1.6",
        color: "#333",
      }}>
        <p style={{ fontSize: "18px" }}>
          Securing justice for 14 mass tort cases.
        </p>
      </div>

      <div style={{ 
        display: "flex", 
        justifyContent: "flex-end",
        maxWidth: "1200px",
        margin: "0 auto 20px auto",
        padding: "0 10px",
      }}>
        <button style={{
          backgroundColor: "#162766",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "500",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1e3385"}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#162766"}>
          View More
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg> */}
        </button>
      </div>

      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default MassTort2;
