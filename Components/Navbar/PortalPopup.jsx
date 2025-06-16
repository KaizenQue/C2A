import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const PortalPopup = ({
  children,
  overlayColor,
  placement = "Centered",
  onOutsideClick,
  zIndex = 100,
}) => {
  const popupRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 50);
    
    const handleOutsideClick = (event) => {
      if (placement !== "FullScreen" && popupRef.current && !popupRef.current.contains(event.target)) {
        if (onOutsideClick) {
          setIsAnimating(true);
          setTimeout(() => {
            onOutsideClick();
          }, 200);
        }
      }
    };
    
    const handleEscKey = (event) => {
      if (event.key === "Escape" && onOutsideClick) {
        setIsAnimating(true);
        setTimeout(() => {
          onOutsideClick();
        }, 200);
      }
    };
    
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);
    
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = originalStyle;
      clearTimeout(timer);
    };
  }, [onOutsideClick, placement]);
  
  const getPopupClasses = () => {
    if (placement === "FullScreen") {
      return `fixed inset-0 z-[${zIndex}] transition-all duration-300 ease-in-out ${
        isAnimating ? 'opacity-0' : 'opacity-100'
      }`;
    }
    
    const baseClasses = `fixed z-[${zIndex}] transition-all duration-300 ease-in-out`;
    const isSmallScreen = window.innerWidth <= 768;
    
    const animationClass = isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100';
    
    let positionClass;
    
    switch (placement) {
      case "Centered":
        positionClass = `top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
        break;
      case "TopLeft":
        positionClass = `top-0 left-0`;
        break;
      case "TopRight":
        positionClass = `top-0 right-0`;
        break;
      case "BottomLeft":
        positionClass = `bottom-0 left-0`;
        break;
      case "BottomRight":
        positionClass = isSmallScreen 
          ? `bottom-0 left-0 right-0 mx-auto` 
          : `bottom-0 right-0`;
        break;
      default:
        positionClass = `top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`;
    }
    
    return `${baseClasses} ${positionClass} ${animationClass}`;
  };
  
  const overlayBgColor = overlayColor || "rgba(113, 113, 113, 0.3)";
  
  if (placement === "FullScreen") {
    return createPortal(
      <div 
        ref={popupRef} 
        className={getPopupClasses()}
        data-testid="popup"
        style={{ backgroundColor: placement === "FullScreen" ? overlayBgColor : undefined }}
      >
        {children}
      </div>,
      document.body
    );
  }
  
  const overlayClasses = `fixed top-0 left-0 w-full h-full z-[${zIndex - 1}] transition-opacity duration-300 ${
    isAnimating ? 'opacity-0' : 'opacity-100'
  }`;
  
  return createPortal(
    <div 
      className={overlayClasses}
      style={{ backgroundColor: overlayBgColor }}
      data-testid="overlay"
    >
      <div 
        ref={popupRef} 
        className={getPopupClasses()}
        data-testid="popup"
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

PortalPopup.propTypes = {
  children: PropTypes.node,
  overlayColor: PropTypes.string,
  placement: PropTypes.oneOf(["Centered", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "FullScreen"]),
  onOutsideClick: PropTypes.func,
  zIndex: PropTypes.number,
};

export default PortalPopup;
