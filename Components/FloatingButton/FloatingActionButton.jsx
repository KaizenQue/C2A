import React, { useState } from 'react';
import './FloatingActionButton.css';

const FloatingActionButton = ({ 
  buttons = [
    { icon: 'phone', label: 'Call Us', action: () => window.location.href = 'tel:+1234567890' },
    { icon: 'edit_note', label: 'Note', action: () => window.location.href = '/note' },
    { icon: 'chat', label: 'Message', action: () => window.location.href = '/message' }
  ],
  mainColor = '#f2c438',
  secondaryColor = '#162766'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const buttonStyle = {
    backgroundColor: mainColor
  };

  const activeButtonStyle = {
    backgroundColor: secondaryColor
  };

  const labelStyle = {
    backgroundColor: secondaryColor
  };

  return (
    <div className="floating-container">
      <div className={`floating-menu ${isOpen ? 'active' : ''}`}>
        <div 
          className="floating-button" 
          onClick={toggleMenu}
          style={isOpen ? activeButtonStyle : buttonStyle}
        >
          {!isOpen && <div className="wave-decoration"></div>}
          <div className={`three-dots ${isOpen ? 'horizontal' : 'vertical'}`}>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
        
        {buttons.map((button, index) => (
          <div className="menu-item" key={index} onClick={button.action}>
            {/* <span className="menu-item-label" style={labelStyle}>{button.label}</span> */}
            <i className="material-icons" style={buttonStyle}>{button.icon}</i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingActionButton; 