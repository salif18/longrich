import React from 'react';
import { useState } from 'react';
import Axios from 'axios'

const Admin = () => {
  //state pour stoker les donnees produit
  const [dataProducts,setDataProducts]=useState({
    image:'',name:'',description:'',category:'',price:''
  })

  const handleChange = (e)=>{
    const {name,value}=e.target;
    setDataProducts({...dataProducts,[name]:value})
  }

const handleSubmit = (e) => {
    e.preventDefault()
    const postData = async()=>{
       try{
           const res = await Axios.post('http://localhost:3006/products',dataProducts)
           if(res){
            const data = await res.data
           }
       }catch(e){
        console.log(e)
       }
    }
    postData()
    setDataProducts({
    image:'',name:'',description:'',category:'',price:''
    })
}

const option = ['Choix-de-category',"Pommade",'Savon','Cafe','Dentifrice']
    return (
        <>
            <div className='admin'>
              <form onSubmit={(e)=>handleSubmit(e)} className='form'>
                <h1>Placer un produit</h1>
                <div>
                    <label className='label-control'>Image</label>
                    <input type='text' id='image' className='form-control' placeholder='Photo'
                      name='image' value={dataProducts.image} onChange={(e)=>handleChange(e)} />
                </div>
                <div>
                    <label className='label-control'>Name</label>
                    <input type='text' id='name' className='form-control' placeholder='Name'
                      name='name' value={dataProducts.name} onChange={(e)=>handleChange(e)}  />
                </div>
                <div>
                    <label className='label-control'>Description</label>
                    <input type='text' id='description' className='form-control' placeholder='description'
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
                    <input type='number' id='price' className='form-control' placeholder='Price'
                      name='price' value={dataProducts.price} onChange={(e)=>handleChange(e)}  />
                </div>
                <div>
                    <button className='btn btn-admin'>Ajouter produits</button>
                </div>
              </form>
            </div>
        </>
    );
};

export default Admin;