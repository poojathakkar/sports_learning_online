import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from '../pages/reducer';


function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      {/* Price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>Subtotal ({basket.length} items): <strong>{` ${value} `} </strong></p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      
      />
      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;