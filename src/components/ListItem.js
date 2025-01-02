import React from 'react';

const ListItem = ({
  item,
  onMoveItem,
  onMoveItemFromNewList,
  arrowDirection,
  isNewList,
}) => {
  return (
    <div style={listItemStyle}>
      <div>
        <p><strong>{item.name}</strong></p>
        <p>{item.description}</p>
      </div>
      <div style={arrowContainerStyle}>
        {arrowDirection === 'right' && (
          <button onClick={onMoveItem}>
            &rarr; {/* Right arrow */}
          </button>
        )}
        {arrowDirection === 'left' && (
          <button onClick={onMoveItem}>
            &larr; {/* Left arrow */}
          </button>
        )}
        {isNewList && (
          <>
            <button onClick={() => onMoveItemFromNewList('left')}>
              &larr; {/* Left arrow */}
            </button>
            <button onClick={() => onMoveItemFromNewList('right')}>
              &rarr; {/* Right arrow */}
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
};

export default ListItem;
