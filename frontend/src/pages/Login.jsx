import React from 'react';
import { useState } from 'react';
import Axios from 'axios'
import { useContext } from 'react';
import AuthContext from '../context/authContext';
import {useNavigate} from 'react-router-dom'
import {ClipLoader} from 'react-spinners';
import { useEffect } from 'react';


const Login = ({add}) => {
  //spinner
  const [loading,setloading]=useState(false)
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },1000)
  },[])

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
              console.log(data)
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
  // const isLogin = authCtx.isLoggin
// const [profil,setProfil]=useState('')

//   const getProfile =async()=>{
//     try{
//        const res = await Axios.get(`http://localhost:3006/auth/${authCtx.userId}`)
//     if(res){
//       const data = await res.data
//       console.log(data)
//       setProfil(data.prenom)
//     }
//     }catch(e){
//       console.log(e)
//     }
//   }
   
    return (
        <>
            <div className='login'>
            
              {loading? <ClipLoader className='clip' size={'50px'}/> :<form onSubmit={(e)=>handleSubmit(e)} className='form'>
                <h1>Se connecter</h1>
                 <div>
                   <label className='label-control'><i className="fa-solid fa-phone"></i></label>
                   <input type='number' id='numero' className='form-control' placeholder='Numero:'
                   name='numero' value={dataLogin.numero} onChange={(e)=>handleChange(e)}  />
                 </div>
                 <div>
                    <label className='label-control'><i className="fa-solid fa-key"></i></label>
                    <input type='password' id='password' className='form-control' placeholder='Password:'
                    name='password' value={dataLogin.password} onChange={(e)=>handleChange(e)} />
                 </div>
                
                 <div>
                    <button className='btn btn-login'>Login <i className="fa-solid fa-right-to-bracket"></i></button>
                 </div>
               </form>
              }
            </div>
        </>
    );
};

export default Login;