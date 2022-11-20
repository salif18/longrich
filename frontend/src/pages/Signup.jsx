import React from 'react';
import { useState } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [dataSignup,setDataSignup]=useState({
     numero:'',password:''
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
             const res = await Axios.post('http://localhost:3006/auth/signup',dataSignup)
             if(res){
                const data = await res.data
                navigate('/')
             }
         }catch(e){
            console.log(e)
         }
        }
        postdataS()
        setDataSignup({
            numero:'',password:''
        })
    }
    return (
        <>
            <div className='signup'>
               
           
               <form onSubmit={(e)=>handleSubmit(e)} className='form'>
                 <h1>S'enregistrer</h1>
                 <div>
                   <label className='label-control'><i class="fa-solid fa-phone"></i></label>
                   <input type='number' id='numero' className='form-control' placeholder='Numero:'
                   name='numero' value={dataSignup.numero} onChange={(e)=>handleChange(e)}  />
                 </div>
                 <div>
                    <label className='label-control'><i class="fa-solid fa-key"></i></label>
                    <input type='password' id='password' className='form-control' placeholder='Password:'
                    name='password' value={dataSignup.password} onChange={(e)=>handleChange(e)} />
                 </div>
                 <div>
                    <button className='btn btn-signup'>Signup <i class="fa-solid fa-user-plus"></i></button>
                 </div>
               </form>

            </div>
        </>
    );
};

export default Signup;