import React from 'react'
import { Main } from '../Containers/Main'
import { MainFormpermission } from '../Containers/Form_permisions/MainFormpermission'

export const Container = ({toggle_content}) => {
  return (
    <div className="flex-grow bg-white p-4 dark:bg-gray-600">
       {toggle_content === 0 && <Main />}
       {toggle_content === 1 && <MainFormpermission />}
    </div>
  )
}
