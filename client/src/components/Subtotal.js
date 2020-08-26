import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../pages/reducer';


function Subtotal(props) {
  // const [{ basket }] = useStateValue();
//console.log("From subtotal", props);

// export const getBasketTotal = (basket) => 
// basket?.reduce((amount, item) => Number(item.price) + amount, 0);


  return (
    <div className="subtotal">
      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Subtotal ({props.basket?.length} items): <strong>{` ${value} `} </strong></p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(props.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      
      />
      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;