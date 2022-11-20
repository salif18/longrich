import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <>
            <div className='header'>
               <h1 className='h1'>Longrich</h1>
               <img className='logo' src={logo} alt='logo'/>
               <div className='authentification'>
                 <button className='btn btn-log'><NavLink to='/login'><a>Login <i class="fa-solid fa-right-to-bracket"></i></a></NavLink></button>
                <button className='btn btn-sign'> <NavLink to='/signup'><a>Signup <i class="fa-solid fa-user-plus"></i></a></NavLink></button>
               </div>
            </div>
        </>
    );
};

export default Header;