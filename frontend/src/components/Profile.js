import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/authContext';

const Profile = () => {
    const authCtx = useContext(AuthContext)
    const isLogin = authCtx.isLoggin
    
    return (
        <>
        {!isLogin && <Navigate to='/login' replace='true'/>}
        
           <div className='profile'>
               <div className='photo'>
                  <img src='ddd' alt='nom' />
               </div>
               <div className='body-profile'>
                 <div className='prenom'>
                    <h1>Prenom:</h1>
                    {authCtx.userId}
                    </div>
                 <div className='nom'>
                    <h1>Nom:</h1> 
                  {authCtx.userId}
                 </div>
                 <div className='address'>
                    <h1>Address:</h1>
                     {authCtx.userId}
                 </div>
               </div>
           </div>
        </>
    );
};

export default Profile;