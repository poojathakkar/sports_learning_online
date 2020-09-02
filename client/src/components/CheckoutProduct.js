import React from 'react'
import './CheckoutProduct.css';

function CheckoutProduct(props) {

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={props.thumbnail} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <button onClick={props.onClick}>Remove from cart</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
