import React from 'react'
import { Header_play } from './Header_play'
import { Bluring_effect } from '../../shared/Bluring_effect'
import { Video_content } from './Video_content'

export const Main_play = () => {
  return (
    <div className=' isolate w-full h-screen  py-32 border-b-[1px] border-gray-300  backdrop-blur-2xl flex items-center flex-col dark:bg-gray-800'>
      <Bluring_effect />  
      <Header_play />
       
       <Video_content />
      
    </div>
  )
}
