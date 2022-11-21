import React, { useState } from 'react';

const Onglet = ({categ}) => {
    const catego = ['All','Broche','Cafe','Dentifrice','Pommade']
    const [category,setCategory]=useState({categorie:""})
    const handleChange=(e)=>{
        const {name,value}=e.target
        setCategory({...category,[name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setCategory(category);
        categ(category)
        setCategory({categorie:''})

    }
    return (
        <>
            <div className='onglet'>
               {/* {category.map((cate)=>((<button className='btn btn-category'>{cate}</button>)))} */}
               <form onSubmit={(e)=>handleSubmit(e)}>
               <select className='catalogue' id='catalogue' name='categorie' value={category.categorie} onChange={(e)=>handleChange(e)}>
                <option value='' actived>Catalogue</option>
                  {catego.map((cat)=>((<option value={cat}>{cat}</option>)))}
               </select>
               </form>
            </div>
            
        </>
    );
};

export default Onglet;