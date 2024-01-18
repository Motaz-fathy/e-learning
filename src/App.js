import {BrowserRouter  , Routes , Route , redirect} from 'react-router-dom'
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
 
  return (
    <div className='dark:bg-gray-800 rtl:font-sans' >
      <BrowserRouter>

          <Routes>
          
            
           <Route path="/"  element={ <Home /> }/>
           {success === true && <Route path='/dashboard' element={<Main />}/>}
           {success === false || success === undefined ? <Route path='/login' element={<Login />}/> : () => { return redirect("/")} }
           {success === false || success === undefined ? <Route path='/register' element={<Register />}/> :  () => { return redirect("/")} }
           <Route path="/*"  element={ <Home /> }/>
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
