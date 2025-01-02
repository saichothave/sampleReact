import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';


const ListItem = ({
    item,
    onMoveItem,
    onMoveItemFromNewList,
    arrowDirection,
    isNewList,
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleHover = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    const currentArrowStyle = {
        ...arrowButtonStyle,
        ...(isHovered ? arrowButtonHoverStyle : {}),
        ...(isActive ? arrowButtonActiveStyle : {}),
    };

    return (
        <div style={listItemStyle}>
          <div style={arrowContainerStyle}>
            {isNewList && (
              <>
                <button
                  onClick={() => onMoveItemFromNewList('left')}
                  style={currentArrowStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  <i className="fa fa-arrow-left"></i>
                </button>
              </>
            )}
          </div>
      
          <div>
            <p><strong>{item.name}</strong></p>
            <p>{item.description}</p>
          </div>
      
          <div style={arrowContainerStyle}>
            {arrowDirection === 'right' && (
              <button
                onClick={onMoveItem}
                style={currentArrowStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                <i className="fa fa-arrow-right"></i>
              </button>
            )}
            {arrowDirection === 'left' && (
              <button
                onClick={onMoveItem}
                style={currentArrowStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                <i className="fa fa-arrow-left"></i>
              </button>
            )}
      
            {isNewList && (
              <>
                <button
                  onClick={() => onMoveItemFromNewList('right')}
                  style={currentArrowStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                >
                  <i className="fa fa-arrow-right"></i>
                </button>
              </>
            )}
          </div>
        </div>
      );
      
};

const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid #ddd',
    marginBottom: '10px',
    transition: 'transform 0.2s ease',
};

const arrowContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px', // Space between buttons
};

const arrowButtonStyle = {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
};

const arrowButtonHoverStyle = {
    backgroundColor: '#2980b9',
    transform: 'scale(1.1)', // Slightly enlarge button on hover
};

const arrowButtonActiveStyle = {
    backgroundColor: '#1c6ea4',
    transform: 'scale(0.9)', // Slightly shrink button on click
};


export default ListItem;
