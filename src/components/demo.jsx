import React from 'react'

const demo = () => {
  return (
    <div className="justify-center flex items-center">
    <Card className=" h-auto w-full  mt-5 dark:bg-red-500">
      <div className=" flex justify-end items-end">
        <XCircleIcon className=" cursor-pointer" width={35} color="#00FF00"  onClick={()=>handleEdit(null)} />
      </div>

      <div className="  mt-5 border border-gray-300 rounded-lg block w-full p-2.5">
        <h1 className=" text-center text-green-400 text-2xl font-medium">
          {name}
        </h1>
      </div>

      <div className=" grid grid-cols-3 mt-5 gap-4">

     

      <Card>
          <div className="flex justify-center items-center">
            <div className="flex justify-between align-middle">
              <h1 className="mr-4">Customer</h1>
              <Switch
              onChange={setCustomerCheck}
                className={`${
                  customerCheck ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    customerCheck ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>

          <div className="grid grid-rows-3 gap-2 mt-5">
            <div className="grid grid-cols-2 ">
            <h4>Create</h4>
            {customerCheck ? <input type="checkbox" name="create" value={(e)=>e.target.checked} onChange={(e)=>console.log("value:",e.target.checked)} /> : <input type="checkbox" disabled/>} 
            </div>
            <div className="grid grid-cols-2">
              <h4>Delete</h4>
              {customerCheck ? <input type="checkbox"/> : <input type="checkbox" disabled/>} 
            </div>
            <div className="grid grid-cols-2">
              <h4>Modify</h4> 

              {customerCheck ? <input type="checkbox"/> : <input type="checkbox" disabled/>} 

            </div>
          </div>
        </Card>
  

      
        <Card>
          <div className="flex justify-center items-center">
            <div className="flex justify-between align-middle">
              <h1 className="mr-4">Service Provider</h1>
              <Switch
                onChange={setServiceProviderCheck}
                className={`${
                  serviceProviderCheck ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    serviceProviderCheck ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>

          <div className="grid grid-rows-3 gap-2 mt-5">
            <div className="grid grid-cols-2 ">
              <h4>Create</h4> <input type="checkbox" disabled/>
            </div>
            <div className="grid grid-cols-2">
              <h4>Delete</h4> <input type="checkbox" disabled/>
            </div>
            <div className="grid grid-cols-2">
              <h4>Modify</h4> <input type="checkbox" disabled/>
            </div>
          </div>
        </Card>

        

        <Card>
          <div className="flex justify-center items-center">
            <div className="flex justify-between align-middle">
              <h1 className="mr-4">Service Order</h1>
              <Switch
                onChange={setServiceOrderCheck}
                className={`${
                  serviceOrderCheck ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    serviceOrderCheck ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div>

          <div className="grid grid-rows-3 gap-2 mt-5">
            <div className="grid grid-cols-2 ">
              <h4>Create</h4> <input type="checkbox" disabled/>
            </div>
            <div className="grid grid-cols-2">
              <h4>Delete</h4> <input type="checkbox" disabled/>
            </div>
            <div className="grid grid-cols-2">
              <h4>Modify</h4> <input type="checkbox" disabled/>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-5 flex justify-center items-center">
      <Button >Update Permission</Button>
      </div>
    </Card>
  </div>
  )
}

export default demo