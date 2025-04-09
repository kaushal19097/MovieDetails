import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [shoppingList, setShoppingList] = useState([]);

  const handleAddItem = () => {
    if (!item.trim() || quantity < 1) {
      alert('Please enter a valid item and quantity greater than 0.');
      return;
    }
    const newItem = `${item} - ${quantity}`;
    setShoppingList([...shoppingList, newItem]);
    setItem('');
    setQuantity(1);
  };

  const handleRemoveItem = (index) => {
    const updatedList = shoppingList.filter((_, i) => i !== index);
    setShoppingList(updatedList);
  };

  const handleClearAll = () => {
    setShoppingList([]);
  };

  return (
    <div className="app">
      <h1>Shopping List</h1>
      <div className="input-container">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Item name"
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          placeholder="Quantity"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul className="shopping-list">
        {shoppingList.map((listItem, index) => (
          <li key={index}>
            {listItem}
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      {shoppingList.length > 0 && (
        <button className="clear-all" onClick={handleClearAll}>
          Clear All
        </button>
      )}
    </div>
  );
};

export default App;
