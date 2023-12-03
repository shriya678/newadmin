import { Button } from '@tremor/react'
import React from 'react'
import { Card } from '@tremor/react'

const CancelAndRefund = () => {
  return (
    <div>
    <div className='flex flex-row justify-start items-start gap-4'>
    <Button className=' bg-green-400 border-none hover:bg-green-700'>Add</Button>
    <Button className=' bg-green-400 border-none hover:bg-green-700'>Modify</Button>
    <Button className=' bg-green-400 border-none hover:bg-green-700'>Delete</Button>
    </div>

    <Card className='mt-10'>
    Cancel and Refund
    </Card>
  </div>
  )
}

export default CancelAndRefund