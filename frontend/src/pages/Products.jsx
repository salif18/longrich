import { useEffect} from 'react';
import Axios from 'axios'
import { useState } from 'react';
import Onglet from '../components/Onglet';
import Header from '../components/Header';
import Navbar from '../components/Navbar'
import { useContext } from 'react';
import AuthContext from '../context/authContext';
import {ClipLoader} from 'react-spinners';
import { Navigate, NavLink } from 'react-router-dom';
import Search from '../components/Search';

const Products = ({categ,categoryFilter}) => {
//spinner
const [loading,setloading]=useState(false)
useEffect(()=>{
  setloading(true)
  setTimeout(()=>{
    setloading(false)
  },1000)
},[])

    //context
    const authCtx = useContext(AuthContext)
    const isLogin = authCtx.isLoggin
  
    //state de produits
    const [products,setProducts]=useState([])
   
    //fonction recuperation de tous les produits du cote server
    useEffect(()=>{
        const getProd = async()=>{
            try{
               const res = await Axios.get('http://localhost:3006/products',
               { 
                'Content-Type':'application/json',
                headers:{
                  Authorization: `Bearer ${authCtx.token}`
              }
               }
               )
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
       
        const ajdata =async()=>{
              try{
                 const res = await Axios.post('http://localhost:3006/panier',{...prod, qty:1, userId:authCtx.userId},
                 {
                  'Content-Type':'application/json',
                  headers:{
                    Authorization: `Bearer ${authCtx.token}`
                  }
                })
                  if(res){
                  const data = await res.data
                  }
              }catch(e){
                console.log(e)
              }
        }
        ajdata()
    }

    //delete
    const supprimer = ()=>{
        const supp = async()=>{
           try{
              const res = await Axios.delete(`http://localhost:3006/products/:id`,
              {
                'Content-Type':'application/json',
              headers:{
                Authorization: `Bearer ${authCtx.token}`
              }
              })
              if(res){
                const data = await res.data
             }
           }catch(e){
            console.log(e)
           }
        }
         supp()
    }

    //modif
    const modify =()=>{
      const update =async()=>{
        try{
           const res = await Axios.put('http://localhost:3006/products/:id',
           { 
            'Content-Type':'application/json',
            headers:{
              Authorization: `Bearer ${authCtx.token}`
          }
           }
           )
           if(res){
            const data = await res.data
           }
        }catch(e){
          console.log(e)
        }
      }
        update();
    }

    //categori
    const [cate,setCate]=useState({category:''})
    const handleChange=(e)=>{
      const {name,value}=e.target;
      setCate({...cate,[name]:value})
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      setCate(cate)
      setCate({category:''})
    }
    console.log(cate)

    const [vaSearch,setValueSearch]=useState(false)

    console.log(vaSearch)
    const getSearch =(items)=>{
        setValueSearch(items)
    }
    return (
        <> 
        <Header/>
        <Search getSearch={getSearch}/>
          <Navbar/>
           <Onglet handleChange={handleChange} handleSubmit={handleSubmit} cate={cate}/>
           
            <div className='products' > 
            
              {vaSearch ?
              products.filter((a)=>a.name.toLowerCase().includes(vaSearch.name)||
               a.category.toLowerCase().includes(vaSearch.name)).map((prod,id)=>(
                 <div className='card'key={prod.id}>
                
                 {loading? <ClipLoader className='clip-card' size={'50px'}/> :
                 <><img  className='card-img' src={prod.image} alt={prod.name} />
                     <div className='card-body'>
                        <h1 className='card-name'>{prod.name}</h1>
                        <p className='card-text'>{prod.description}</p>
                        <h3 className='card-price'>{prod.price} Fcfa</h3>
                        
                    </div>
                    <div className='btn-products'>
                        {!isLogin?<button className='btn btn-prod-add'><NavLink to='/login'><i class="fa-solid fa-unlock-keyhole"></i></NavLink></button> :
                        <button className='btn btn-prod-add' onClick={()=>btnAjterPanier(prod)}><i className="fa-solid fa-cart-shopping"></i></button>}
                        {isLogin && <button className='btn btn-prod-delete' onClick={()=>supprimer(id)}><i className="fa-solid fa-trash"></i></button>}
                        {isLogin && <button className='btn btn-prod-share'><i className="fa-solid fa-share-nodes"></i></button>}
                        {isLogin && <button className='btn btn-prod-modif'onClick={()=>modify(prod)}><i className="fa-solid fa-pen-to-square"></i></button>}
                         <button className='btn btn-prod-view'><i className="fa-solid fa-eye"></i></button>
                    </div> 
                 </>    
                   }
                  
                 </div>
            
                ))
                  : 
                products.filter((a)=>(a.category).includes(cate.category)).map((prod,id)=>(
                 <div className='card'key={prod.id}>
                
                 {loading? <ClipLoader className='clip-card' size={'50px'}/> :
                 <><img  className='card-img' src={prod.image} alt={prod.name} />
                     <div className='card-body'>
                        <h1 className='card-name'>{prod.name}</h1>
                        <p className='card-text'>{prod.description}</p>
                        <h3 className='card-price'>{prod.price} Fcfa</h3>
                        
                    </div>
                    <div className='btn-products'>
                        {!isLogin?<button className='btn btn-prod-add'><NavLink to='/login'><i class="fa-solid fa-unlock-keyhole"></i></NavLink></button> :
                        <button className='btn btn-prod-add' onClick={()=>btnAjterPanier(prod)}><i className="fa-solid fa-cart-shopping"></i></button>}
                        {isLogin && <button className='btn btn-prod-delete' onClick={()=>supprimer(id)}><i className="fa-solid fa-trash"></i></button>}
                        {isLogin && <button className='btn btn-prod-share'><i className="fa-solid fa-share-nodes"></i></button>}
                        {isLogin && <button className='btn btn-prod-modif'onClick={()=>modify(prod)}><i className="fa-solid fa-pen-to-square"></i></button>}
                         <button className='btn btn-prod-view'><i className="fa-solid fa-eye"></i></button>
                    </div> 
                 </>    
                   }
                  
                 </div>
            
                ))
                }
                
              
            </div>
          
        </>
    );
};

export default Products;