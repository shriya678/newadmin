import React, { useState } from 'react'
import { Button,Card, Text } from '@tremor/react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

const FAQ = () => {

  const [change,setChange]= useState(true);

  return (
    <div>
      <div className='flex flex-row justify-start items-start gap-4'>
      <Button className=' bg-emerald-400 border-none hover:bg-emerald-700' onClick={()=>setChange(!change)}>Add</Button>
      <Button className=' bg-emerald-400 border-none hover:bg-emerald-700'>Modify</Button>
      <Button className=' bg-emerald-400 border-none hover:bg-emerald-700'>Delete</Button>
      </div>

      {/* <Card className='mt-10'> */}

      <div className="w-full px-4 pt-5">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              {change ? <Text> If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
                </Text>

                :

                <input placeholder='eneter something'/>

              }

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>

      {/* </Card> */}
    </div>
  )
}

export default FAQ