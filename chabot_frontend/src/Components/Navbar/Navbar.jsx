import React from 'react'
import './Navbar.css'
import "@fontsource/montserrat"
import sang_logo from '../../assets/Vector.png'
import favorite_logo from '../../assets/favorite.png'
import shopping_logo from '../../assets/shopping.png'
import search_icon from '../../assets/search.png'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <img src={sang_logo} alt='' className='logo'/>

        <ul>
          <li><Link to="/">Cửa hàng</Link></li>
          <li>Bộ sưu tập</li>
          <li>Hàng mới</li>
          <li>Sale</li>
          <li><Link to="/upload">Upload</Link></li>
        </ul>

        <div className='right-item'>
          <div className='search-box'>
            <img src={search_icon} alt="" className='search-icon'/>
            <input type="text" placeholder='Tìm kiếm'/>
          </div>

          <img src={favorite_logo} alt='' className='love-icon'/>

          <img src={shopping_logo} alt='' className='shopping-icon'/>

        </div>

      </div>
    </div>
  )
}

export default Navbar
