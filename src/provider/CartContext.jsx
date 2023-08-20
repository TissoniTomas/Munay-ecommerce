import { useContext, createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    console.log(item.title, quantity);
    const itemInCart = cartItems.find(cartItem => cartItem.id === item.id);
    if (itemInCart) {
      const updatedCart = cartItems.map(cartItem => (cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem));
      setCartItems(updatedCart);
    } else {
      console.log(item.title, quantity);
      const newItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category,
        quantity,
      };
      setCartItems(prevCartItems => [...prevCartItems, newItem]);
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter(cartItem => cartItem.id !== itemId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (itemId) => {
    return cartItems.some(cartItem => cartItem.id === itemId);
  };

  const contextValue = {
    cartItems,
    addItem,
    removeItem,
    clearCart,
    isInCart,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
