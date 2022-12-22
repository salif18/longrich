import React, { useContext } from 'react';
import AuthContext from '../context/authContext';

const Panier = ({panier}) => {
    const authCtx = useContext(AuthContext)
    return (
        <>
            <div className='panier-message'>
               <h1>Mon Panier <i className="fa-solid fa-cart-shopping"></i></h1><p>{panier.length}</p>
               <i className='fa-solid fa-user'></i> -{authCtx.userId}
            </div>
        </>
    );
};

export default Panier;