import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Axios from 'axios'
import Panier from '../components/Panier';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
import {ClipLoader} from 'react-spinners';



const Cart = () => {
//spinner
const [loading,setloading]=useState(false)
useEffect(()=>{
  setloading(true)
  setTimeout(()=>{
    setloading(false)
  },1000)
},[])

  const authCtx = useContext(AuthContext)
  const isLogin = authCtx.isLoggin
    //recuperation des produits du panier depuis le server
    const [panier , setPanier] = useState([])
    useEffect(()=>{
      const getPanie = async()=>{
          const res = await Axios.get('http://localhost:3006/panier')
        if(res){
          const data = await res.data
          setPanier(data)
        }
      }
      getPanie()
    },[])

    const supprimer = ()=>{
       const supP = async()=>{
        try{
         const res = await Axios.delete('http://localhost:3006/panier/:id')
         if(res){
          const data = await res.data
         }
        }catch(e){
         console.log(e)
        }
       } 
        supP()
    }
    return (
        <>
        {!isLogin && <Navigate to='/login' replace='true'/>}
        <Panier panier={panier}/>
         

            {loading? <ClipLoader className='clip'/>:
            <div className='pan'>
            <div className='cart'>
               {panier.map((prod,id)=>(
                  <div className='card'key={id}>
                    <img className='cart-img' src={prod.image} alt={prod.name} />
                     <div className='card-body'>
                        <h1 className='card-name'>{prod.name}</h1>
                        <p className='card-text'>{prod.description}</p>
                        <h3 className='card-price'>{prod.price*prod.qty} Fcfa</h3>
                        <button className='btn btn-cart-delete' onClick={()=>supprimer(prod.id)}><i class="fa-solid fa-trash"></i></button>
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
              
               </div>
              
                <div className='total'>
                   TOTAL = {panier.map((item)=> item.qty*item.price)
                   .reduce((x,y)=> x + y,0)} Fcfa
                   <button className='btn btn-success'>Commander -<i class="fa-solid fa-paper-plane"></i></button>

                  
              </div>
              </div>
              }
        </>
    );
};

export default Cart;