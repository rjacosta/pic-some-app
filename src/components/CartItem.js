import React, { useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover"

const CartItem = ({ item }) => {
  const { removeCartItem } = useContext(Context);

  const [hovering, hoverRef] = useHover();
  const trashIcon = hovering ? "ri-delete-bin-fill": "ri-delete-bin-line"

  return (
    <div className="cart-item">
      <i
        onClick={() => removeCartItem(item.id)}
        className={trashIcon}
        ref={hoverRef}
      ></i>
      <img alt={item.id} src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
};

export default CartItem;
