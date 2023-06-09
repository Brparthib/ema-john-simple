import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const {cart} = props;

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for(const product of cart)
  {
    console.log(product.quantity);
    quantity = quantity + product.quantity;
    total = total + (product.price * product.quantity);
    shipping = shipping + (product.shipping * product.quantity);
  }

  const tax = (total * 0.1).toFixed(2);
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
    </div>
  );
};

export default Cart;
