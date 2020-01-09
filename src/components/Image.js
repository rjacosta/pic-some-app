import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

const Image = ({ img, className = "img-grid" }) => {

  const { toggleFavorite, addCartItem, removeCartItem } = useContext(Context);
  const [hovering, hoverRef] = useHover();

  const [heartIconClass, setHeartIconClass] = useState("ri-heart-line");

  const toggleHeart = () => {
    setHeartIconClass(img.isFavorite ? "ri-heart-line" : "ri-heart-fill")
    toggleFavorite(img.id);
  }

  const heartIcon = (hovering || img.isFavorite) && <i onClick={toggleHeart} className={`${heartIconClass} favorite`}></i>
 
  const [cartIconClass, setCartIconClass] = useState(
    img.inCart ? "ri-shopping-cart-fill" : "ri-add-circle-line"
  );

  const onCartIconClick = () => {
    if (!img.inCart) {
      addCartItem(img);
      setCartIconClass("ri-shopping-cart-fill");
    } else {
      removeCartItem(img.id);
      setCartIconClass("ri-add-circle-line");
    }
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
