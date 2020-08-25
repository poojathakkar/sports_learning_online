import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout(props) {

  console.log("1, From remove", props.basket);

  // const[{ basket }] = useStateValue();
  function removeFromBasket(item) {
    //console.log("obj", obj);
  
    const newItems = props.basket.filter(basketItem => basketItem.id !== item.id);

    props.setBasket(newItems);
    console.log("2, From remove", props.basket);
  }
  
  // function addToBasket(obj) {
  //   props.setBasket(prev => [...prev, obj])
  // }

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
          {/* List out all checkout products */}
          {props.basket.map((item) => (
            // console.log("Item from checkout", item);
           
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
