import React, { useEffect, useState } from 'react'
import {Popover} from '../../../../shared/Popover'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Loading } from '../../../../shared/Loading'
import { Itme_permission } from './Itme_permission'
export const MainFormpermission = () => {
  const {data} = useSelector(state => state.LoginReducer) 
  const token = data?.data?.access
  const [premission , set_permission] = useState([])
  const [loading , set_loading] = useState(false)
  const [isChecked, setIsChecked] = useState([]);
  const filter_name = ["parent" , "student" , "teacher"]

  const handleCheckboxChange = (id) => {
    setIsChecked(prev => [...prev , id]);
  };

  useEffect(() => {
    handel_permission()
  } , [])
  const handel_permission = async () => {
    set_loading(true)
    try {
      const  config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      }
       const {data} = await axios.get('https://hamdyadam.pythonanywhere.com/users/permissions/?page=1' , config)
      set_permission(data?.data?.results)
      set_loading(false)
    } catch (error) {
       console.log(error)
    }
  }
 const handel_update_permission =async (id) => {
  try {
    const  config = {
      headers: {
        'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`     
        }
    }
    const {data} = await axios.put(`https://hamdyadam.pythonanywhere.com/users/groups/${id}/permissions/` , {"user_permissions": isChecked} , config)
    console.log(data?.data)  
  } catch (error) {
    console.log(error)  
  }
 }
  return (
    <div className='container w-full  flex flex-col items-start gap-10 dark:bg-gray-600 '>
      {loading === true ? <Loading /> :   <>
      {/* Parent setting  */}
       {filter_name?.map((filter) => {
        return <>
    <div className='w-full text-md font-bold   bg-sky-500 p-2 dark:bg-gray-800 rounded-md dark:shadow-md text-white'>{filter} setting </div>
    <div className='w-full flex justify-center items-center m-auto  max-sm:h-[60vh]  p-2 dark:bg-gray-600 '>
    <Itme_permission  premission={premission} handleCheckboxChange={handleCheckboxChange} filter_name={filter}/>
    </div>   
        </>
       })}


     {/* buttons  */}
    <div className='w-full flex justify-center items-center gap-2'>
        <button onClick={() => handel_update_permission(1)}
        className=" w-1/3 p-2 bg-transparent transition ease-in-out duration-300 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent rounded">
          save
        </button>
        {/* <button 
        onClick={() => setIsChecked([])}
        className=" w-40 p-2 bg-transparent transition ease-in-out duration-300 hover:bg-red-500 text-red-700 font-semibold hover:text-white  border border-red-500 hover:border-transparent rounded">
          clear all checked 
        </button> */}
    </div>

     </>}
   
    </div>
  )
}
