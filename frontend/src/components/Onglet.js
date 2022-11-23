import React from 'react';

const Onglet = ({handleChange,handleSubmit,cate}) => {
    const catego = ['Broche','Cafe','Dentifrice','Pommade','Calment',]
   
    return (
        <>
            <div className='onglet'>
               {/* {category.map((cate)=>((<button className='btn btn-category'>{cate}</button>)))} */}
               <form onSubmit={(e)=>handleSubmit(e)}>
               <select className='catalogue' id='catalogue' name='category' value={cate.category} onChange={(e)=>handleChange(e)}>
                <option value=''>Catalogue</option>
                  {catego.map((cat)=>((<option value={cat}>{cat}</option>)))}
               </select>
               </form>
            </div>
            
        </>
    );
};

export default Onglet;