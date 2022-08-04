import React from "react";
import "./CheckoutProduct.css"
import StarIcon from '@mui/icons-material/Star';

import { useStateValue } from "./StateProvider";

export default function CheckoutProduct({ id, image, title, price, rating }) {

  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = () =>
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    })

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__image">
        <img src={image} />
      </div>

      <div className="checkoutProduct__info" >
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>{price}</small>
        </p>
        <div className="checkoutProduct__price">
          {Array(rating).
            fill().
            map((unused, i) => (
              <StarIcon className="checkoutProduct__star" />))}
        </div>
        <button
          onClick={removeFromBasket}
        >Remove from Basket</button>
      </div>
    </div>
  )
}