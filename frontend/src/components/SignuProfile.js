import React, { useState } from 'react';
import Axios from 'axios'
import AuthContext from '../context/authContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const SignuProfile = () => {
   const authCtx = useContext(AuthContext)
   const navigate = useNavigate()
   const [dataProfil,setDataProfil]=useState({
      prenom:'',nom:'',address:'',userId:authCtx.userId
   })
   const handleChange = (e) => {
      const {name,value}=e.target;
      setDataProfil({...dataProfil,[name]:value})
   }
   

   const handleSubmit = (e)=>{
      e.preventDefault()
      const postProfil = async()=>{
         const res = await Axios.post('http://localhost:3006/profile',dataProfil)
         if(res){
            const data = await res.data
            authCtx.login(data.token, data.userId)
           
            navigate('/')
         }
      }
      postProfil()
      setDataProfil({
         prenom:'',nom:'',address:'',userId:''
      })
   }
    return (
        <div className='signup-profile '>
            <h1>Profile</h1>
            
               <form onSubmit={(e)=>handleSubmit(e)} className='form'>
                 <div>
                   <label className='label-control'>Prenom</label>
                   <input type='text' id='prenom' className='form-control' placeholder='Prenom:'
                   name='prenom' value={dataProfil.prenom} onChange={(e)=>handleChange(e)} />
                 </div>
                 <div>
                    <label className='label-control'>Nom</label>
                    <input type='text' id='nom' className='form-control' placeholder='Nom:'
                    name='nom' value={dataProfil.nom} onChange={(e)=>handleChange(e)} />
                 </div>
                 <div>
                    <label className='label-control'>Address</label>
                    <input type='text' id='address' className='form-control' placeholder='Address:'
                    name='address' value={dataProfil.address} onChange={(e)=>handleChange(e)} />
                 </div>
                 <div>
                    <button className='btn btn-signup-profile' >Save <i className="fa-solid fa-floppy-disk"></i></button>
                 </div>
               </form>
        </div>
    );
};

export default SignuProfile;