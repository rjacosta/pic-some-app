import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

const Image = ({ img, className = "img-grid" }) => {
  const { toggleFavorite, addCartItem, removeCartItem } = useContext(Context);
  const [hovering, hoverRef] = useHover();

  const getHeartClass = isImgFavorite => {
    return isImgFavorite ? "ri-heart-fill" : "ri-heart-line";
  };

  const [heartIconClass, setHeartIconClass] = useState(
    getHeartClass(img.isFavorite)
  );

  const toggleHeart = () => {
    toggleFavorite(img.id);
    setHeartIconClass(getHeartClass(img.isFavorite));
  };

  const heartIcon = (hovering || img.isFavorite) && (
    <i onClick={toggleHeart} className={`${heartIconClass} favorite`}></i>
  );

  const getCartClass = isImgInCart => {
    return isImgInCart ? "ri-shopping-cart-fill" : "ri-add-circle-line";
  };

  const [cartIconClass, setCartIconClass] = useState(getCartClass(img.inCart));

  const onCartIconClick = () => {
    !img.inCart ? addCartItem(img) : removeCartItem(img.id);
    setCartIconClass(getCartClass(img.inCart));
  };

  const cartIcon = (hovering || img.inCart) && (
    <i onClick={onCartIconClick} className={`${cartIconClass} cart`}></i>
  );

  return (
    <div className={`${className} image-container`} ref={hoverRef}>
      <img alt={img.id} src={img.url} className="image-grid" />
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
