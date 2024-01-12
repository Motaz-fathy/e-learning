import {BrowserRouter  , Routes , Route } from 'react-router-dom'
import { Home } from './screens/Home';
import {Main} from './screens/dashboard/Main'
import { useState } from 'react';
import { Login } from './screens/login/Login';
import { Register } from './screens/register/Register';
import { useSelector } from 'react-redux';

const USER_TYPES = {
  PUBLIC : true ,
  PROTECT  : false ,
  ADMIN : false
}

function App() {
 const {data} = useSelector(state => state.LoginReducer) || undefined
 const success = data?.success
 console.log("roles of routes " , success)
  return (
    <div className='dark:bg-gray-800'>
      <BrowserRouter>


    

          <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>  
          <Route path="/"  element={ <Home /> }/>
          <Route path='/dashboard' element={<Main />}/>
          </Routes>


           
      </BrowserRouter>
    </div>
  );
}


// function Protect ({children}) {
  
//   return <>
//     {children}
//   </>
// }

// function PublicUser ({children}) {
//   return <>
//   {children}
//   </>
// }

// function AdminUser ({children}) {
//   return <>
//   {children}
//   </>
//}
export default App;
