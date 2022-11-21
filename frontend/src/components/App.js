
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Products from '../pages/Products';
import{Route ,Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Admin from '../pages/Admin'
import SignuProfile from './SignuProfile';
import Profile from './Profile';
import { useState } from 'react';



function App() {
 const [categoryFilter,setCategoryFilter]=useState('')
 
const categ = (category)=>{
  setCategoryFilter(category)
}

  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<Products categoryFilter={categoryFilter} categ={categ}/>}/>
          <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<Login  />}/>
            <Route path='/signup' element={<Signup/>}/>
             <Route path='/admin' element={<Admin/>}/>
             <Route path='/signprofile' element={<SignuProfile/>}/>
             <Route path='/profile' element={<Profile />} />
    </Routes>
    </>
  );
}

export default App;
