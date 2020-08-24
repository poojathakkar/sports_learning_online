import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
  const[{ basket }] = useStateValue();
  
  return (
    <div className="checkout">
      <div className="checkout__left">
      {basket?.length === 0 ? (
        <div>
          <h2>Your shopping cart is Empty !! Checkout our latest courses !!</h2>
          <p>You have no items in the cart. Click "Add to cart" next to the courses </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your shopping cart</h2>
          {/* List out all checkout products */}
          {basket.map((item) => (
            // console.log("Item from checkout", item);
           
            <CheckoutProduct
              id={item.id}
              title={item.title} 
              description={item.description} 
              price={item.price} 
              thumbnail={item.thumbnail} 
              content={item.content}
              user_id={item.user_id}          
            />
          ))}
        </div>
        )
      }
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
   
    </div>
  );
}

export default Checkout
