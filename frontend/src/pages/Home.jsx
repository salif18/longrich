import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import {ClipLoader} from 'react-spinners'
import Footer from '../components/Footer';

const log ='https://i0.wp.com/www.longrich-guinee.com/wp-content/uploads/2021/05/cropped-logo2.png?fit=512%2C512&ssl=1';
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
                <> <h1>Bienvenue à </h1>
                 <img src={log} alt='pp' className='log'/>
              </>  } 
                
            </div>
            <Footer/>
        </>
    );
};

export default Home;