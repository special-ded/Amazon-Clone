
import './App.css';
import Header from './Header'
import Home from './Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import Login from "./Login"
import { useEffect } from 'react';
import { Auth } from 'firebase/auth';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe('pk_test_51LSPmRLoipuCwnFqKHhmubBGXKTfXoOuJGu2Y5NHn3fMJ1KZNhgJeYTYObXxcWFjJ1FInDl7D7x9KFJiu7rDggF300XAQ82FUH')


function App() {
  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" exact element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={[<Header />, <Orders />]} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
