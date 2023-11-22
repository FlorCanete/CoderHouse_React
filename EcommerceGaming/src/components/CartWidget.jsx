import React from 'react';
import cart from '/images/cart.svg';
const CartWidget = () => {
  return (
    <div className="cart-widget text-light">
      <img src={cart} alt="CartWidget" />
      0
    </div>
  );
};

export default CartWidget;
