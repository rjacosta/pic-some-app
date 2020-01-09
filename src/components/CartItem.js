import React, { useContext } from "react";
import { Context } from "../Context";
const CartItem = ({ item }) => {
  const { removeCartItem } = useContext(Context);

  return (
    <div className="cart-item">
      <i
        onClick={() => removeCartItem(item.id)}
        className="ri-delete-bin-line"
      ></i>
      <img alt={item.id} src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
};

export default CartItem;
