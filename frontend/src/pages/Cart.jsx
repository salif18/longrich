import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios'
import Panier from '../components/Panier';
const Cart = () => {
    //recuperation des produits du panier depuis le server
    const [panier , setPanier] = useState([])
    useEffect(()=>{
       Axios.get('http://localhost:3006/panier')
       .then((res)=>setPanier(res.data))
    },[])

    const supprimer = (id)=>{
        Axios.delete(`http://localhost:3006/panier/:${id}`)
        .then((res)=>res.data)
    }
    return (
        <>
        <Panier panier={panier}/>
           <div className='pan'>
            <div className='cart'>
              
                {panier.map((prod,id)=>(
                  <div className='card'key={id}>
                    <img className='cart-img' src={prod.image} alt={prod.name} />
                     <div className='card-body'>
                        <h1 className='card-name'>{prod.name}</h1>
                        <p className='card-text'>{prod.description}</p>
                        <h3 className='card-price'>{prod.price*prod.qty} Fcfa</h3>
                        <button className='btn btn-cart-delete' onClick={()=>supprimer(prod)}><i class="fa-solid fa-trash"></i></button>
                        <div className='btn'>
                        <button className='btn btn-cart-plus' onClick={()=>{
                          const PANIER = panier.map((item , item_id)=> item_id === id ?
                            {...item, qty: item.qty +1}: item)
                              setPanier(PANIER)}}><i class="fa-solid fa-cart-plus"></i></button>
                              {prod.qty}
                        <button className='btn btn-cart-minus' onClick={()=>{
                          const PANIER = panier.map((item , item_id)=> item_id === id ?
                            {...item, qty: item.qty -1}: item) 
                              setPanier(PANIER)
                        }}><i class="fa-solid fa-minus"></i></button>
                     </div> 
                     </div>
                 </div>   
               ))}
             
               </div> <div className='total'>
                   TOTAL = {panier.map((item)=> item.qty*item.price)
                   .reduce((x,y)=> x + y,0)} Fcfa
                   <button className='btn btn-success'>Commander -<i class="fa-solid fa-paper-plane"></i></button>

                  
              </div>
              </div>
             
        </>
    );
};

export default Cart;