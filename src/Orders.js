import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

export default function Orders() {
  const [{ basket, user, userOrder }, dispatch] = useStateValue()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    console.log(userOrder)
    setOrders(userOrder)
    console.log(orders)
  }, [userOrder])



  return (
    <div className="orders">
      <h1>Your Last Order</h1>

      {orders.map(element =>

        < CheckoutProduct
          key={element.id}
          id={element.id}
          title={element.title}
          image={element.image}
          price={element.price}
          rating={element.rating}
        />
      )}
    </div>
  )
}