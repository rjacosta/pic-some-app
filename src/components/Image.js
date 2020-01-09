import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";

const Image = ({ img, className = "img-grid" }) => {
  const { toggleFavorite, addCartItem, removeCartItem } = useContext(Context);

  const [hovering, setHovering] = useState(false);
  const onHoverEnter = () => setHovering(true);
  const onHoverLeave = () => setHovering(false);

  const [heartClassName, setHeartClassName] = useState(
    img.isFavorite ? "ri-heart-fill" : "ri-heart-line"
  );

  const onHeartClick = () => {
    !img.isFavorite
      ? setHeartClassName("ri-heart-fill")
      : setHeartClassName("ri-heart-line");
    toggleFavorite(img.id);
  };

  const heartIcon = (hovering || img.isFavorite) && (
    <i
      onMouseEnter={onHoverEnter}
      onClick={onHeartClick}
      className={`${heartClassName} favorite`}
    ></i>
  );

<<<<<<< HEAD
  const [cartIconClass, setCartIconClass] = useState(
    img.inCart ? "ri-shopping-cart-fill" : "ri-add-circle-line");

  const onCartIconClick = () => {
    if (!img.inCart) {
      addCartItem(img);
      setCartIconClass("ri-shopping-cart-fill");
=======
  const [cartState, setCartState] = useState({
    inCart: false,
    cartIconClass: "ri-add-circle-line cart"
  });

  const onCartIconClick = () => {
    if (!cartState.inCart) {
      addCartItem(img);
      setCartIconClass("ri-shopping-cart-fill cart")
>>>>>>> b573150d0133d967736ff64ae1f94eea1c52fa1e
    } else {
      removeCartItem(img.id);
      setCartIconClass("ri-add-circle-line");
    }
<<<<<<< HEAD
  };

  const cartIcon = (hovering || img.inCart) && (
    <i
      onMouseEnter={onHoverEnter}
      onClick={onCartIconClick}
      className={`${cartIconClass} cart`}
=======
    setCartState(prevCartState => {
      return {
        inCart: !prevCartState.inCart,
        cartIconClass: prevCartState.cartIconClass
      }
    })
  };

  const setCartIconClass = (cartIconClass) => {
    setCartState(prevCartState => {
      return {
        inCart: prevCartState.inCart,
        cartIconClass: cartIconClass
      };
    });
  }

  const cartIcon = (hovering || cartState.inCart) && (
    <i
      onMouseEnter={onHoverEnter}
      onClick={onCartIconClick}
      className={cartState.cartIconClass}
>>>>>>> b573150d0133d967736ff64ae1f94eea1c52fa1e
    ></i>
  );

  return (
    <div className={`${className} image-container`}>
      <img
        onMouseEnter={onHoverEnter}
        onMouseLeave={onHoverLeave}
        alt={img.id}
        src={img.url}
        className="image-grid"
      />
      {heartIcon}
      {cartIcon}
    </div>
  );
};

Image.propTypes = {
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  }).isRequired,
  className: PropTypes.string
};

export default Image;
