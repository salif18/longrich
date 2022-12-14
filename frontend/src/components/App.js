
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Products from '../pages/Products';
import{Route ,Routes} from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Admin from '../pages/Admin'



function App() {
     
  return (
    <>
    
     <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<Login  />}/>
            <Route path='/signup' element={<Signup/>}/>
             <Route path='/admin' element={<Admin/>}/>
            
    </Routes>

    </>
  );
}

export default App;
