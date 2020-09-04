import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../pages/reducer';

function Subtotal(props) {

  return (
    <div className="subtotal">
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
      <button className="subtotal__Button mr-20" >Proceed to checkout</button>
    </div>
  )
}

export default Subtotal;