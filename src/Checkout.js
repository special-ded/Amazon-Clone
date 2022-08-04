import React from "react";
import audi from "./images/audi.jpg"
import "./Checkout.css"
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


export default function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <div className="checkout">

      <div className="checkout__left">
        <img className="checkout__ad" src={audi} />
        <div>

          <h2 className="checkout__title">
            <h4>Hi, {user ?
              ` ${user.email.split("@").shift()}`
              : "Guest"} !</h4>
            Your shopping Basket</h2>

          {basket.map(element =>
            <CheckoutProduct
              id={element.id}
              title={element.title}
              image={element.image}
              price={element.price}
              rating={element.rating}
            />)}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  )
}