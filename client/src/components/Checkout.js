import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import axios from 'axios';

function Checkout(props) {
  
  function removeFromBasket(item) {
    const course_id = item.id;
    const newItems = props.basket.filter(basketItem => basketItem.id !== item.id);

    axios.delete(`/api/removeFromCart/${course_id}`)
    .then(res => {
      props.setBasket(newItems);
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="checkout">
      <div className="checkout__left">
      {props.basket?.length === 0 ? (
        <div>
          <h2>Your shopping cart is Empty !! Checkout our latest courses !!</h2>
          <p>You have no items in the cart. Click "Add to cart" next to the courses </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your shopping cart</h2>
          {props.basket.map((item) => (
            <CheckoutProduct
              key={item.id} {...item}
              onClick={() => removeFromBasket(item)}
            />
          ))}
        </div>
        )
      }
      </div>
      {props.basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal basket={props.basket} />
        </div>
      )}  
    </div>
  );
}

export default Checkout
