import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Onglet from '../components/Onglet';
import {ClipLoader} from 'react-spinners'

const Home = () => {
    //spinner
  const [loading,setloading]=useState(false)
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },1000)
  },[])

    return (
       
        <>  <Header/>
            <Navbar/>
            <div className='home'>
                {loading? <ClipLoader className='clip-home'/>:
                 <h1>Bienvenu A Longrich</h1>
                } 
            </div>
        </>
    );
};

export default Home;