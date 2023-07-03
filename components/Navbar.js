
import React, { useState } from "react"
import { TfiShoppingCart } from "react-icons/tfi"
import {GoSearch} from 'react-icons/go'
import { HiShoppingBag } from "react-icons/hi"
import {IoIosClose} from "react-icons/io";
import {FaFacebook} from 'react-icons/fa'
import Link from "next/link";
const Navbar = () => {
  return (
   <div className='container__navbar'>
     <div className='top__bar'>
       <div className='top__offer'>
         <HiShoppingBag className='top__icon' /> FREE GIFT <span>OVER $99</span>
       </div>
       <div className='top__offer'>
         <TfiShoppingCart className='top__icon'/> FREE SHIPPING <span>OVER $129</span>
       </div>
       <div className='top__offer'>
         $5 OFF FOR NEW <span style={{background:'#f4ff9ae6', color:'black', fontWeight:'bold',padding:'2px',marginLeft:'2px'}}>CODE:NEWS</span>
       </div>
     </div>
       <div className='bottom__bar'>
           <img src='https://stylewe.com/image/catalog/activity/43uevo51aF1657690968.png' alt='logo' />
           <div className='proporties__bar'>
            <div className='search__bar'>
              <div className='input__bar'>
                 <input placeholder='Search'/>
                  <IoIosClose size={20}/>
              </div>
              <div className='search__icon'>
                  <GoSearch size={20}/>
              </div>
            </div>
              <div className='world__user__shopping'>
                  <ul>
                      <li> <img src='/world.png'/>
                          <div className='dropdown__list__world'>
                              <h5>Langauge</h5>
                              <div className=''>
                                  <img src='/ksa.png' alt='' style={{marginLeft:'4px'}} /><span className='text-center'>Arabic</span>
                                   <img src='/usa.png' alt='' style={{marginLeft:'4px'}}/><span>English</span>
                              </div>
                              <select>
                                  <option>Arabic</option>
                                  <option>English</option>
                              </select>
                              <h5>Currency</h5>
                              <select>
                                  <option>USD</option>
                                  <option>LIRA</option>
                                  <option>EURO</option>
                              </select>

                          </div>
                      </li>
                      <li>
                          <img src='/user.png'/>
                          <div className='dropdown__list__user'>
                              <div className='register__here'>
                                <Link href={`/register/signup`}> Sign Up</Link>
                                <span> / </span>
                                <Link href={`/register/login`}> Login </Link>
                              </div>
                              <div className='social__icon'><span>Sign Up with</span> <FaFacebook size={30} color='blue'/></div>
                              <div className='orders__coupons'>
                                  <span>My Orders</span>
                                  <span>My Coupons</span>
                              </div>
                          </div>
                      </li>
                      <li>
                          <span className='circle_of_cart'>1</span>
                          <img src='/shopping-bag.png'/>

                      </li>
                  </ul>
              </div>
           </div>
       </div>
   </div>
  )
}

export default Navbar
