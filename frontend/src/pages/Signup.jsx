import React from 'react';
import { useState } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
import { useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/authContext';

const Signup = () => {
  const authCtx = useContext(AuthContext) 
  //spinner
  const [loading,setloading]=useState(false)
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },1000)
  },[])

    const [dataSignup,setDataSignup]=useState({
     prenom:'',nom:'',address:'', numero:'',password:''
    })
    const handleChange = (e)=>{
        const {name,value}=e.target;
        setDataSignup({...dataSignup,[name]:value})
    }
const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const postdataS = async()=>{
         try{
             const res = await Axios.post('http://localhost:3006/auth/signup',{...dataSignup},{
               'Content-Type':'application/json',
               headers:{
                Authorization:` Bearer ${authCtx.token}`
               }
             })
             if(res){
                const data = await res.data
                navigate('/login')
             }
         }catch(e){
            console.log(e)
         }
        }
        postdataS()
        setDataSignup({
          prenom:'',nom:'',address:"",  numero:'',password:''
        })
    }
    return (
        <>
            <div className='signup'>
               
           
            {loading? <ClipLoader className='clip' size={'50px'}/>:<form onSubmit={(e)=>handleSubmit(e)} className='form'>
                 <h1>S'enregistrer</h1>
                 <div>
                 <label className='label-control'>Prenom <i className="fa-solid fa-user"></i></label>
                   <input type='text' id='prenom' className='form-control'
                   name='prenom' value={dataSignup.prenom} onChange={(e)=>handleChange(e)}  />
                 </div>
                 <div>
                 <label className='label-control'>Nom <i className="fa-solid fa-user"></i></label>
                   <input type='text' id='nom' className='form-control' 
                   name='nom' value={dataSignup.nom} onChange={(e)=>handleChange(e)}  />
                 </div>
                 <div>
                 <label className='label-control'>Address <i class="fa-solid fa-location-dot"></i></label>
                   <input type='text' id='address' className='form-control'
                   name='address' value={dataSignup.address} onChange={(e)=>handleChange(e)}  />
                 </div>
                 <div>
                   <label className='label-control'>Numero <i className="fa-solid fa-phone"></i></label>
                   <input type='number' id='numero' className='form-control'
                   name='numero' value={dataSignup.numero} onChange={(e)=>handleChange(e)}  />
                 </div>
                 <div>
                    <label className='label-control'>Password <i className="fa-solid fa-key"></i></label>
                    <input type='password' id='password' className='form-control'
                    name='password' value={dataSignup.password} onChange={(e)=>handleChange(e)} />
                 </div>
                 <div>
                    <button className='btn btn-signup'>Signup <i className="fa-solid fa-user-plus"></i></button>
                 </div>
               </form>
            }
            </div>
        </>
    );
};

export default Signup;