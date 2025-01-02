import React from 'react';

const ListItem = ({
  item,
  onMoveItem,
  onMoveItemFromNewList,
  arrowDirection,
  isNewList,
}) => {
  return (
    <li style={listItemStyle}>
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
    </li>
  );
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  borderBottom: '1px solid #ccc',
};

const arrowContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

export default ListItem;
