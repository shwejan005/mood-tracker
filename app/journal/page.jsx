import { Calendar } from '@/components/ui/calendar'
import React from 'react'

export const metadata = {
  title : "Zen ⋅ Journal"
}

const Journal = () => {
  return (
    <div className='flex'>
      <Calendar className='' />  
      
    </div>
  )
}

export default Journal