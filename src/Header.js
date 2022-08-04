import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue()

  function signAuthentication() {
    if (user) {
      auth.signOut()
    }
  }


  return (
    <div className='header'>
      <Link to="/">
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      </Link>


      <div className='header__search'>
        <input
          className='header__searchInput'
          type="text"
        />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className='header__nav'>
        <div onClick={signAuthentication} className='header__option'>
          <span className='header__optionLineOne'>
            {user ?
              `Hi, ${user.email.split("@").shift()}` :
              'Hello Guest'}
            {/* Hello Guest */}
          </span>
          <Link className='link' to={!user && '/login'}>
            <span className='header__optionLineTwo'>
              {user ? 'Sign out' : 'Sign in'}
            </span>
          </Link>

        </div>
        <Link className='link' to={user ? '/orders' : '/'}>
          <div className='header__option'>
            <span className='header__optionLineOne'>
              Returns
            </span>
            <span className='header__optionLineTwo'>
              & Order
            </span>
          </div>
        </Link>
        <div className='header__option header__yoursPrime'>
          <span className='header__optionLineOne'>
            Yours
          </span>
          <span className='header__optionLineTwo'>
            Prime
          </span>
        </div>
        <Link className='link' to="/checkout">
          <div className='header__optionBasket'>

            <ShoppingBasketIcon className='header__optionBasketImg' />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>

          </div>
        </Link>

      </div>

    </div>
  )
}
