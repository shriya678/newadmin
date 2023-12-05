import React from 'react'
import { Card } from '@tremor/react'

const CardLoader = () => {
  return (
    <Card className="border border-blue-300 shadow rounded-md p-4 w-full mx-auto">
    <div className="animate-pulse space-x-4">
    <div className='flex justify-between items-center'>
        <div className='rounded h-5 w-20 bg-slate-200'></div>
        <div className='flex justify-between items-center'>
            <div className=' rounded h-5 w-10 mr-4 bg-slate-200'></div>
            <div className=' rounded h-5 w-10 mr-4 bg-slate-200'></div>
            <div className=' rounded h-5 w-10 mr-4 bg-slate-200'></div>
        </div>
    </div>
    <div className=' mt-10'>
    <div className='mt-5 rounded w-full h-10 bg-slate-200'></div>
    <div className='mt-5 rounded w-full h-10 bg-slate-200'></div>
    <div className='mt-5 rounded w-full h-10 bg-slate-200'></div>
    <div className='mt-5 rounded w-full h-10 bg-slate-200'></div>
    <div className='mt-5 rounded w-full h-10 bg-slate-200'></div>
    </div>
    
      </div>
    
  </Card>
  )
}

export default CardLoader