import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";
const Cart = () => {
  const { cartItems, emptyCart } = useContext(Context);
  const total = (cartItems.length * 5.99).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ));

  const [buttonText, setButtonText] = useState("Place Order");
  const placeOrder = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty, add some items to your cart and try again!");
      return;
    }
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      alert("Order placed!");
      emptyCart();
    }, 3000);
  };

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {total}</p>
      {cartItems.length !== 0 ? (<div className="order-button">
        <button onClick={placeOrder}>{buttonText}</button>
      </div>) 
      : <p>You have no items in your cart</p>}
    </main>
  );
};

export default Cart;
