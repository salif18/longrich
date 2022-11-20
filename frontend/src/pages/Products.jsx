import { useEffect} from 'react';
import Axios from 'axios'
import { useState } from 'react';
import Onglet from '../components/Onglet';
import Header from '../components/Header';
import Navbar from '../components/Navbar'
import { useContext } from 'react';
import AuthContext from '../context/authContext';


const Products = () => {
    //context
    const authCtx = useContext(AuthContext)
    const isLogin = authCtx.isLoggin
    //state de produits
    const [products,setProducts]=useState([])
   
    //fonction recuperation de tous les produits du cote server
    useEffect(()=>{
        const getProd = async()=>{
            try{
               const res = await Axios.get('http://localhost:3006/products')
                       if(res){
                          const data = res.data
                          setProducts(data)
                       }
            }catch(e){
                console.log(e)
            }           
        }
         getProd()
    },[])
    
    //boutton ajouter au panier
    const btnAjterPanier = (prod)=>{
        Axios.post('http://localhost:3006/panier',{...prod, qty:1})
        .then((res)=>res.data)
    }

    const supprimer = ()=>{
        Axios.delete(`http://localhost:3006/products/:id`)
        .then(res=>res.data)
    }
    return (
        <> 
        <Header/>
          <Navbar/>
           <Onglet/>
           
            <div className='products' > 
             
               {products.map((prod,id)=>(
        
                 <div className='card'key={id}>
                    <img  className='card-img' src={prod.image} alt={prod.name} />
                    <div className='card-body'>
                        <h1 className='card-name'>{prod.name}</h1>
                        <p className='card-text'>{prod.description}</p>
                        <h3 className='card-price'>{prod.price} Fcfa</h3>
                        
                    </div>
                    <div className='btn-products'>
                        <button className='btn btn-prod-add' onClick={()=>btnAjterPanier(prod)}><i class="fa-solid fa-cart-shopping"></i></button>
                        {isLogin && <button className='btn btn-prod-delete' onClick={()=>supprimer(id)}><i class="fa-solid fa-trash"></i></button>}
                        {isLogin && <button className='btn btn-prod-share'><i class="fa-solid fa-share-from-square"></i></button>}
                        {isLogin && <button className='btn btn-prod-modif'><i class="fa-solid fa-pen-to-square"></i></button>}
                         <button className='btn btn-prod-view'><i class="fa-solid fa-eye"></i></button>
                    </div>
                 </div>
               
                ))}
            </div>
          
        </>
    );
};

export default Products;