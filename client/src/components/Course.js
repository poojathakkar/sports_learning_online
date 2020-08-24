import React from 'react';
import './Course.css';
//import { use } from '../../../backend/app';
import { useStateValue } from './StateProvider';

function Course({id, title, description, price, thumbnail, content, user_id}) {

  const [ {}, dispatch] = useStateValue();

  const addToBasket = () => {
    //add item to basket
    dispatch({
      type:'ADD_TO_BASKET', 
      item: {
        id,
        title, 
        description, 
        price, 
        thumbnail, 
        content, 
        user_id

      },
    })
  };

  return (
    <div className="course">

      <div className="course__info">
        <p>{title}</p>
        <p className="course__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
        <img className="course__img" src={thumbnail} alt="" />
        <button onClick={addToBasket}>Add to cart</button>
     

    
    </div>
  )
}

export default Course
