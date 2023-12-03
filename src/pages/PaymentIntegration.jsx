import { Switch } from '@headlessui/react';
import { Button, Card } from '@tremor/react'
import React from 'react'
import { useState } from 'react'

const PaymentIntegration = () => {

    const [value,setValue] = useState(true);

  return (
    <div>
        <Button className=' bg-green-500 mt-5'>Add Payment Method</Button>
        <Card className='mt-10'>
        <h1>UPI</h1>
            <div className='grid grid-cols-2 mt-5'>
            <h1>GooglePay</h1>
            <Switch
                onChange={setValue}
                className={`${
                  value ? " bg-green-500" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    value ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
            <div className='grid grid-cols-2 mt-5'>
            <h1>PhonePay</h1>
            <Switch
                onChange={setValue}
                className={`${
                  value ? " bg-green-500" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    value ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
            <div className='grid grid-cols-2 mt-5'>
            <h1>PayPal</h1>
            <Switch
                onChange={setValue}
                className={`${
                  value ? " bg-green-500" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    value ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
            <div className='grid grid-cols-2 mt-5'>
            <h1>Paytm</h1>
            <Switch
                onChange={setValue}
                className={`${
                  value ? " bg-green-500" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    value ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
        </Card>
    </div>
  )
}

export default PaymentIntegration