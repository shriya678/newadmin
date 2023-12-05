import { Button, Card } from '@tremor/react';
import React from 'react'

const TermsAndCondition = () => {
  return (
    <div>
      <div className='flex flex-row justify-start items-start gap-4'>
      <Button className=' bg-green-400 border-none hover:bg-green-700'>Add</Button>
      <Button className=' bg-green-400 border-none hover:bg-green-700'>Modify</Button>
      <Button className=' bg-green-400 border-none hover:bg-green-700'>Delete</Button>
      </div>

      <Card className='mt-10'>
      Terms & Conditions
      </Card>
    </div>
  )
}

export default TermsAndCondition;