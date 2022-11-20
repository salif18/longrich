import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/authContext';

const Profile = () => {
    const authCtx = useContext(AuthContext)
    const isLogin = authCtx.isLoggin
    
    return (
        <>
        {!isLogin && <Navigate to='/signprofile' replace='true'/>}
        
           <div className='profile'>
               <div className='photo'>
                  <img src='ddd' alt='nom' />
               </div>
               <div className='body-profile'>
                 <h1>Prenom:{authCtx.token}</h1>
                 <h1>Nom:{authCtx.userId}</h1> 
                 <h1>Address:{authCtx.userId}</h1>
               </div>
           </div>
        </>
    );
};

export default Profile;