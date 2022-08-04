import React from "react";
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

export default function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue()

  const navigate = useNavigate()

  return <div className="subtotal">
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            Subtotal ({basket?.length} items):
            <strong> {value} </strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />
            This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
    <button onClick={e =>
      basket?.length == 0 || !user ?
        alert("Please Sign In or fill Basket") :
        navigate('/payment')}>
      Proceed to checkout
    </button>
  </div>

}