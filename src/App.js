import {BrowserRouter  , Routes , Route } from 'react-router-dom'
import { Home } from './screens/Home';
import {Main} from './screens/dashboard/Main'
import { useState } from 'react';
import { Login } from './screens/login/Login';
import { Register } from './screens/register/Register';

const USER_TYPES = {
  PUBLIC : "public" ,
  USER  : "normal" ,
  ADMIN : "admin"
}

function App() {

  return (
    <div>
      <BrowserRouter>
      
          <Routes>
            <Route path="/"  element={ <Home /> }/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
           
      </BrowserRouter>
    </div>
  );
}


// function User () {
//   return <div>
//     user pages 
//   </div>
// }

// function PublicUser ({children}) {
//   return <>
//   {children}
//   </>
// }

// function AdminUser ({children}) {
//    if(Athu === USER_TYPES.ADMIN){
//     return <>
//     {children}
//     </>
//    } else {
//     return <div> you do not have access this page !! </div>
//    }
// }
export default App;
