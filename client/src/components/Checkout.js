import React, {useContext} from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import axios from 'axios';
import { AuthContext } from './AuthProvider';

function Checkout(props) {
  
  const auth = useContext(AuthContext);
  console.log("1, From remove", props.basket);

  function removeFromBasket(item) {

    const user_id = Number(auth.user.id);
    const course_id = Number(item.id);
    console.log("remove_user", user_id)
    console.log("remove course", course_id);

    const newItems = props.basket.filter(basketItem => basketItem.id !== item.id);
     

    axios.delete(`/api/removeFromCart/${course_id}`)
    .then(res => {
      console.log("removeCart", res.data);
      props.setBasket(newItems);
      console.log(newItems);
    })
    .catch(error => {
      console.log(error);
    })

    //props.setBasket(newItems);
    console.log("2, From remove", props.basket);
  }

  // axios
  // .get('api/courseForUser')
  
  // .then(res => {
  //   console.log("courseForUser", res.data);

  //   setBasket(res.data);
  // })

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
