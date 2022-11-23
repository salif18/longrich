import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import AuthContext from '../context/authContext';
const Header = () => {
    const authCtx = useContext(AuthContext)
    const isLogin = authCtx.isLoggin 


    return (
        <>
            <div className='header'>
               <h1 className='h1'>Longrich</h1>
               <img className='logo' src={logo} alt='logo'/>
             
               <div className='authentification'>
                 {!isLogin && <button className='btn btn-log'><NavLink to='/login'>Login <i className="fa-solid fa-right-to-bracket"></i></NavLink></button>}
                 {!isLogin && <button className='btn btn-sign'> <NavLink to='/signup'>Signup <i className="fa-solid fa-user-plus"></i></NavLink></button>}
                 {isLogin && <button className='btn btn-logout' onClick={()=>authCtx.logout()}>Logout <i className="fa-solid fa-right-from-bracket"></i></button>}
               </div>
            </div>
        </>
    );
};

export default Header;