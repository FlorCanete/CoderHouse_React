import React from 'react';
import { useContext } from 'react';
import { CartContext } from './Cart.Context';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className="cart-widget text-light">
      <i className="fas fa-shopping-cart"></i>
      { totalQuantity }
    </Link>
  );
  console.log(totalQuantity);

};

export default CartWidget;
