import React from 'react';
import { useState } from 'react';
import Axios from 'axios'
import { useContext } from 'react';
import AuthContext from '../context/authContext';
import {useNavigate} from 'react-router-dom'

const Login = ({add}) => {
  const [dataLogin,setDataLogin]=useState({
    numero:'',password:''
  })

  const handleChange = (e)=>{
    const {name,value}=e.target;
    setDataLogin({...dataLogin,[name]:value})
  }

  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
  

  const handleSubmit = (e)=>{
    e.preventDefault()
    const potLogin = async()=>{
         try{
            const res = await Axios.post('http://localhost:3006/auth/login',dataLogin)
            if(res){
              const data = await res.data
              authCtx.login(data.token,data.userId)
              navigate('/')
              
            }
         }catch(e){
          console.log(e)
         }
    }
    potLogin()
    setDataLogin({
      numero:'',password:''
    })
  }
    
    return (
        <>
            <div className='login'>
            
               <form onSubmit={(e)=>handleSubmit(e)} className='form'>
                <h1>Se connecter</h1>
                 <div>
                   <label className='label-control'><i class="fa-solid fa-phone"></i></label>
                   <input type='number' id='numero' className='form-control' placeholder='Numero:'
                   name='numero' value={dataLogin.numero} onChange={(e)=>handleChange(e)}  />
                 </div>
                 <div>
                    <label className='label-control'><i class="fa-solid fa-key"></i></label>
                    <input type='password' id='password' className='form-control' placeholder='Password:'
                    name='password' value={dataLogin.password} onChange={(e)=>handleChange(e)} />
                 </div>
                 <div>
                    <button className='btn btn-login'>Login <i class="fa-solid fa-right-to-bracket"></i></button>
                 </div>
               </form>
            </div>
        </>
    );
};

export default Login;