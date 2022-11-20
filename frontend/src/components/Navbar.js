import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
               <NavLink to='/'><i class="fa-solid fa-house"></i></NavLink>
               <NavLink to='/products'><i class="fa-brands fa-product-hunt"></i></NavLink>
               <NavLink to='/cart'><i class="fa-solid fa-cart-shopping"></i></NavLink>
               <NavLink to='/admin'><i class="fa-brands fa-sellsy"></i></NavLink>
            </div>
        </>
    );
};

export default Navbar;