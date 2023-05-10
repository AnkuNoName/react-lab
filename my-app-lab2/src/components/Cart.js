import React, { useState } from 'react';

const Cart = ({ items }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    let newCartItems = [...cartItems];
    let foundItem = newCartItems.find((cartItem) => cartItem.name === item.name);
    if (foundItem) {
      foundItem.quantity++;
    } else {
      newCartItems.push({ ...item, quantity: 1 });
    }
    setCartItems(newCartItems);
  };

  const handleRemoveFromCart = (item) => {
    let newCartItems = [...cartItems];
    let foundItem = newCartItems.find((cartItem) => cartItem.name === item.name);
    if (foundItem.quantity > 1) {
      foundItem.quantity--;
    } else {
      newCartItems = newCartItems.filter((cartItem) => cartItem.name !== item.name);
    }
    setCartItems(newCartItems);
  };

  const getTotalQuantity = () => {
    let totalQuantity = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.quantity;
    });
    return totalQuantity;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const renderCartItems = () => {
    return items.map((item) => {
      const cartItem = cartItems.find((cartItem) => cartItem.name === item.name);
      const quantity = cartItem ? cartItem.quantity : 0;
      const itemTotalPrice = item.price * quantity;

      return (
        <div key={item.name}>
          <span>{item.name}</span>
          <span>{item.price}$</span>
          <button onClick={() => handleRemoveFromCart(item)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleAddToCart(item)}>+</button>
          <span>{itemTotalPrice}$</span>
        </div>
      );
    });
  };

  return (
    <div>
      <h2>Cart</h2>
      {renderCartItems()}
      <div>
        <span>Кількість: {getTotalQuantity()}</span>
        <span>Сума: {getTotalPrice()}$</span>
      </div>
    </div>
  );
};

export default Cart;