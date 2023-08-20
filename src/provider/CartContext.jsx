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
        description: item.description,
        category: item.category,
        img: item.img,
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

  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const totalProducts = cartItems.reduce((total, item) => total + (item.quantity), 0);

  const contextValue = {
    cartItems,
    addItem,
    removeItem,
    clearCart,
    isInCart,
    totalPrice,
    totalProducts,
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
