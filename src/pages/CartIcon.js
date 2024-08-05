import React from 'react';
import { useSelector } from 'react-redux';
import './CartIcon.css';

function CartIcon() {
  const cartCount = useSelector(state => state.cart.cartCount);

  return (
    <div className="cart-icon">
      <i className="fa fa-shopping-cart"></i>
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
}

export default CartIcon;
