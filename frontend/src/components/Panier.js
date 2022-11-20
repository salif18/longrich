import React from 'react';

const Panier = ({panier}) => {
    return (
        <>
            <div className='panier-message'>
               <h1>Mon Panier <i class="fa-solid fa-cart-shopping">{panier.length}</i></h1>
            </div>
        </>
    );
};

export default Panier;