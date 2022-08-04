import React, { useState } from 'react';
import './Login.css';
import logo from "./images/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import {
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = e => {
    e.preventDefault()

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate('/')
        }
      })
      .catch(err => alert(err.message))
  }

  const register = e => {
    e.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate('/')
        }
      })
      .catch(err => alert(err.message))
  }

  return (
    <div className='login'>
      <Link to="/">
        <img
          className='login__logo'
          src={logo} />
      </Link>
      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type='text' value={email}
            onChange={ev => setEmail(ev.target.value)}
          />

          <h5>Password</h5>
          <input type='password' value={password}
            onChange={ev => setPassword(ev.target.value)}
          />

          <button
            type='submit'
            onClick={signIn}
            className='login__signinButton'>Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale.
          Please see our Privacy Notice,
          our Cookies Notice and our Interest-Based Ads
        </p>
        <button
          onClick={register}
          className='login__registerButton'>
          Create your Amazon account
        </button>

      </div>
    </div>
  )
}