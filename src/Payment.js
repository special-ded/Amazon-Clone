import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase';
import { doc, setDoc } from "firebase/firestore";

export default function Payment() {
  const [{ basket, user, userOrder }, dispatch] = useStateValue()
  console.log(basket, user)

  const stripe = useStripe()
  const element = useElements()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [clientSecret, setClientSecret] = useState(true)

  const [orders, setOrders] = useState([])
  const navigate = useNavigate();




  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    setTimeout(() => {
      dispatch({
        type: 'COPY_BASKET'
      })


      console.log(userOrder)
      setSucceeded(true)
      setError(null)
      setProcessing(true)

      dispatch({
        type: 'EMPTY_BASKET'
      })

      navigate('/orders')

    }, 3000)

  }

  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : "")
  }

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>Checkout(<Link className='payment__link' to="/checkout">
          {basket?.length} items
        </Link>)</h1>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address:</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>

        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>

            {basket.map((element) => (
              <CheckoutProduct
                id={element.id}
                title={element.title}
                image={element.image}
                price={element.price}
                rating={element.rating}
              />)
            )}
          </div>
        </div>

        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
            <form onClick={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled ||
                  succeeded}>
                  <span>{processing ? <p>Processing</p> :
                    "Buy Now"
                  }</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>


      </div>


    </div>
  )
}