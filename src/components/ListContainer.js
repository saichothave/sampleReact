import React from 'react';
import ListItem from './ListItem';

const ListContainer = ({
  listNumber,
  items,
  onMoveItem,
  arrowDirection,
  onMoveItemFromNewList,
  isNewList,
}) => {
  return (
    <div style={listContainerStyle}>
      <h3>List Number: {listNumber}</h3>
      <ul>
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onMoveItem={() => onMoveItem(item, listNumber)}
            onMoveItemFromNewList={(direction) => onMoveItemFromNewList(item, direction)}
            arrowDirection={arrowDirection}
            isNewList={isNewList}
          />
        ))}
      </ul>
    </div>
  );
};

const listContainerStyle = {
  backgroundColor: '#cceeff',
  padding: '10px',
  borderRadius: '8px',
  height: '800px',
  overflowY: 'auto',
};

export default ListContainer;
