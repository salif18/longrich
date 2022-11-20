import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Onglet from '../components/Onglet';

const Home = () => {
    return (
       
        <>  <Header/>
            <Navbar/>
            <div className='home'>
                 <h1>Bienvenu A Longrich</h1>
            </div>
        </>
    );
};

export default Home;