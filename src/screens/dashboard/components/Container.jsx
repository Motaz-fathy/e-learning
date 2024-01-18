import React from 'react'
import { Main } from '../Containers/Main'
import { MainFormpermission } from '../Containers/Form_permisions/MainFormpermission'

export const Container = ({toggle_content}) => {
  return (
    <div className="flex-grow bg-white p-4 bg-opacity-0 h-full ">
       {toggle_content === 0 && <Main />}
       {toggle_content === 11 && <MainFormpermission />}
    </div>
  )
}
