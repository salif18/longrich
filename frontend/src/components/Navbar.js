import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/authContext'
import BtnTheme from './BtnTheme';

const Navbar = () => {
    // const authCtx = useContext(AuthContext)
    
  const authCtx = useContext(AuthContext)
  const isLogin = authCtx.isLoggin

//
    return (
        <>
            <div className='navbar'>
           
               <NavLink to='/'><i className="fa-solid fa-house"></i></NavLink>
               <NavLink to='/products'><i className="fa-brands fa-product-hunt"></i></NavLink>
               <NavLink to='/cart'><i className="fa-solid fa-cart-shopping"></i></NavLink>
               <NavLink to='/admin'><i className="fa-brands fa-sellsy"></i></NavLink>
               <NavLink to='/profile'><i className="fa-solid fa-user"></i> {authCtx.userId}</NavLink>
               <BtnTheme/>
            </div>
        </>
    );
};

export default Navbar;