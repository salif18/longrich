import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/authContext'

const Navbar = () => {
    const authCtx = useContext(AuthContext)
    const isLogin = authCtx.isLoggin 
    
    return (
        <>
            <div className='navbar'>
               <NavLink to='/'><i class="fa-solid fa-house"></i></NavLink>
               <NavLink to='/products'><i class="fa-brands fa-product-hunt"></i></NavLink>
               <NavLink to='/cart'><i class="fa-solid fa-cart-shopping"></i></NavLink>
               <NavLink to='/admin'><i class="fa-brands fa-sellsy"></i></NavLink>
               <NavLink to='/profile'><i class="fa-solid fa-user"></i> {authCtx.userId}</NavLink>
            </div>
        </>
    );
};

export default Navbar;