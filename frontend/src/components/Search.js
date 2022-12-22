import React, { useState } from 'react'

const Search = ({getSearch}) => {
    const [valueSearch,setValueSearch]=useState({name:''})

    const handleChange =(e)=>{
       const {name,value}=e.target
       setValueSearch({...valueSearch,[name]:value})
    }
       const handleSubmit=(e)=>{
        e.preventDefault();
        getSearch(valueSearch)
        setValueSearch({search:''})
       }
    
    return (
        <div className='search'>
            <form onSubmit={(e)=>handleSubmit(e)}>
             <input className='form-control' type='text'
              name='name' value={valueSearch.search} 
              onChange={(e)=>handleChange(e)} placeholder='Search'/>
             <button className='btn btn-dark'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    );
};

export default Search;