import React, { useState, useEffect } from "react";
const Context = React.createContext();
const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

  const toggleFavorite = id => {
    setPhotos(prevPhotos => {
      const photoToToggle = prevPhotos.find(photo => photo.id === id);
      photoToToggle.isFavorite = !photoToToggle.isFavorite;
      return prevPhotos;
    });
  };

  const addCartItem = img => {
    img.inCart = true;
    setCartItems(prevCartItems => [...prevCartItems, img]);
  };

  const removeCartItem = id => {
    setCartItems(prevCartItems => {
      const itemToRemove = prevCartItems.find(item => item.id === id)
      itemToRemove.inCart = false;
      return prevCartItems.filter(item => item.id !== id)
    })
  };

  const isItemInCart = id => {
    return cartItems.includes(item => parseInt(item.id) === id)
  }

  return (
    <Context.Provider value={{ photos, toggleFavorite, cartItems, addCartItem, removeCartItem, isItemInCart }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
