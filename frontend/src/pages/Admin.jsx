import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import AuthContext from '../context/authContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import {ClipLoader} from 'react-spinners'

const Admin = () => {

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
  //state pour stoker les donnees produit
  const [dataProducts,setDataProducts]=useState({
    image:'',name:'',description:'',category:'',price:'',userId:authCtx.userId
  })

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setDataProducts({...dataProducts,[name]:value})
  }

const handleSubmit = (e) => {
    e.preventDefault()
    const postData = async()=>{
       try{
           const res = await axios.post('http://localhost:3006/products',{...dataProducts},
          { 
           headers:{
            'Content-Type':'application/json',
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
    postData()
    setDataProducts({
    image:'',name:'',description:'',category:'',price:'',userId:''
    })
}

const option = ['Choix-de-category','Broche',"Pommade",'Savon','Cafe','Dentifrice','Calment']
    return (
        <>
        {!isLogin && <Navigate to='/login' replace='true'/>}
            <div className='admin'>
             {loading ? <ClipLoader className='clip'/>: <form onSubmit={(e)=>handleSubmit(e)} className='form'>
                <h1>Placer un produit</h1>
                <div>
                    <label className='label-control'>Image</label>
                    <input type='text' id='image' className='form-control'
                      name='image' value={dataProducts.image} onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                    <label className='label-control'>Name</label>
                    <input type='text' id='name' className='form-control' 
                      name='name' value={dataProducts.name} onChange={(e)=>handleChange(e)}  />
                </div>
                <div>
                    <label className='label-control'>Description</label>
                    <input type='text' id='description' className='form-control' 
                      name='description' value={dataProducts.description} onChange={(e)=>handleChange(e)}  />
                </div>
                <div>
                    <label className='label-control'>Category</label>
                    <select   className='form-control' placeholder='Category-select'
                      name='category' value={dataProducts.category} onChange={(e)=>handleChange(e)}>
                       {option.map((opt)=>(<option value={opt}>{opt}</option>))} 
                      </select>
                </div>
                <div>
                    <label className='label-control'>Price</label>
                    <input type='number' id='price' className='form-control' 
                      name='price' value={dataProducts.price} onChange={(e)=>handleChange(e)}  />
                </div>
                <div>
                    <button className='btn btn-admin'>Ajouter produits</button>
                </div>
             
              </form>
              }
            </div>
        </>
    );
};

export default Admin;