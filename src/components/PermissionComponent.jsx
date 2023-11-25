import { Switch } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/solid'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card } from '@tremor/react'
import axios from 'axios'

const PermissionComponent = ({permissionData,editId,handleEdit}) => {


  console.log("permissionData",permissionData);

    const [customerCheck,setCustomerCheck] = useState(permissionData?.permissions?.customerCheck);
    const [serviceProviderCheck,setServiceProviderCheck] = useState(permissionData?.permissions?.serviceProviderCheck);
    const [serviceOrderCheck,setServiceOrderCheck] = useState(permissionData?.permissions?.serviceOrderCheck);

    console.log("CustomCheck: ",customerCheck);


    const [customerPermission,setCustomerPermission] = useState({
      create:permissionData?.permissions?.customer?.create,
      delete:permissionData?.permissions?.customer?.delete,
      modify:permissionData?.permissions?.customer?.modify,
    });

    const [serviceProviderPermission,setServiceProviderPermission] = useState({
      create:permissionData?.permissions?.serviceProvider?.create,
      delete:permissionData?.permissions?.serviceProvider?.delete,
      modify:permissionData?.permissions?.serviceProvider?.modify,
    });

    const [serviceOrderPermission,setServiceOrderPermission] = useState({
      create:permissionData?.permissions?.serviceOrder?.create,
      delete:permissionData?.permissions?.serviceOrder?.delete,
      modify:permissionData?.permissions?.serviceOrder?.modify,
    });

  


    const customerInputEvent = (event)=>{
      const value = event.target.checked;
      const name = event.target.name;

      setCustomerPermission((pre)=>{
        // console.log("PreValue: ",pre);

        return {
          ...pre,
          [name]:value
        }
      })
    }

    // console.log("Customer Permission: ",customerPermission);

    const serviceProviderInputEvent = (event)=>{
      const value = event.target.checked;
      const name = event.target.name;

      setServiceProviderPermission((pre)=>{
        // console.log("PreValue: ",pre);

        return {
          ...pre,
          [name]:value
        }
      })
    }

    // console.log("ServicePermission: ",serviceProviderPermission);


    const serviceOrderInputEvent = (event)=>{
      const value = event.target.checked;
      const name = event.target.name;

      setServiceOrderPermission((pre)=>{
        // console.log("PreValue: ",pre);

        return {
          ...pre,
          [name]:value
        }
      })
    }

    // console.log("ServicePermission: ",serviceOrderPermission);


     const handleUpdate = () => {
    

    const API = axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
      withCredentials: true,
    });

    API.put(`/api/v1/superadmin/` + editId, {
      _id: editId,
      name:permissionData?.name,
      email:permissionData?.email,
      phoneNo:permissionData?.phoneNo,
      role:permissionData?.role,
      permissionCheck:true,
      permissions:{
        customerCheck:customerCheck,
        customer:customerPermission,
        serviceProviderCheck:serviceProviderCheck,
        serviceProvider:serviceProviderPermission,
        serviceOrderCheck:serviceOrderCheck,
        serviceOrder:serviceOrderPermission
      }
    })
      .then((res) => {
       console.log("ResPermission: ",res); 
        // setEditID(false);
        location.reload();
      })
      .catch((error) => {

        console.log("eror: ", error);
        // setEditID(false);
      });
  };

  


  return (
    <div className="justify-center flex items-center">
    <Card className=" h-auto w-full  mt-5 dark:bg-red-500">
      <div className=" flex justify-end items-end">
        <XCircleIcon className=" cursor-pointer" width={35} color="#00FF00"  onClick={()=>handleEdit(null)} />
      </div>

      <div className="  mt-5 border border-gray-300 rounded-lg block w-full p-2.5">
        <h1 className=" text-center text-green-400 text-2xl font-medium">
          {/* Abhishek Singh */}
          {permissionData?.name}
        </h1>
      </div>

      <div className=" grid grid-cols-3 mt-5 gap-4">
      {/* first card of permission for customer */}

      <Card>
          <div className="flex justify-center items-center">
            <div className="flex justify-between align-middle">
              <h1 className="mr-4">Customer</h1>
              <Switch
              onChange={setCustomerCheck}
                className={`${
                  customerCheck ? " bg-green-500" : "bg-gray-200"
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
            {customerCheck ?
             <input type="checkbox" name="create" checked={customerPermission.create} value={customerPermission.create} onChange={customerInputEvent} />
             : <input type="checkbox" value={customerPermission.create=false} checked={false} disabled/>
             } 
            </div>

            <div className="grid grid-cols-2">
              <h4>Delete</h4>
              {customerCheck ? 
              <input type="checkbox" name="delete" checked={customerPermission.delete} value={customerPermission.delete} onChange={customerInputEvent}/> 
              : <input type="checkbox" value={customerPermission.delete=false}  checked={false} disabled/>
              
              } 
            </div>

            <div className="grid grid-cols-2">
              <h4>Modify</h4> 

              {customerCheck ? 
              <input type="checkbox" name="modify" checked={customerPermission.modify} value={customerPermission.modify} onChange={customerInputEvent}/> 
              : <input type="checkbox" value={customerPermission.modify=false} checked={false} disabled/>
              } 

            </div>
          </div>
        </Card>
  

        {/* Second Card of permission for service provider */}
        <Card>
          <div className="flex justify-center items-center">
            <div className="flex justify-between align-middle">
              <h1 className="mr-4">Service Provider</h1>
              <Switch
                onChange={setServiceProviderCheck}
                className={`${
                  serviceProviderCheck ? " bg-green-500" : "bg-gray-200"
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
              <h4>Create</h4> 
              {serviceProviderCheck ?
             <input type="checkbox" name="create" checked={serviceProviderPermission.create} value={serviceProviderPermission.create} onChange={serviceProviderInputEvent} />
             : <input type="checkbox" value={serviceProviderPermission.create=false} checked={false} disabled/>
             }
            </div>
            <div className="grid grid-cols-2">
              <h4>Delete</h4>
              {serviceProviderCheck ? 
              <input type="checkbox" name="delete" checked={serviceProviderPermission.delete} value={serviceProviderPermission.delete} onChange={serviceProviderInputEvent}/> 
              : <input type="checkbox" value={serviceProviderPermission.delete=false} checked={false} disabled/>
              
              } 
            </div>
            <div className="grid grid-cols-2">
              <h4>Modify</h4>
              {serviceProviderCheck ? 
              <input type="checkbox" name="modify" checked={serviceProviderPermission.modify} value={serviceProviderPermission.modify} onChange={serviceProviderInputEvent}/> 
              : <input type="checkbox" value={serviceProviderPermission.modify=false} checked={false} disabled/>
              } 
            </div>
          </div>
        </Card>

        {/* Third Card for permission */}
        <Card>
          <div className="flex justify-center items-center">
            <div className="flex justify-between align-middle">
              <h1 className="mr-4">Service Order</h1>
              <Switch
                onChange={setServiceOrderCheck}
                className={`${
                  serviceOrderCheck ? " bg-green-500" : "bg-gray-200"
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
              <h4>Create</h4>
              {serviceOrderCheck ?
             <input type="checkbox" name="create" checked={serviceOrderPermission.create} value={serviceOrderPermission.create} onChange={serviceOrderInputEvent} />
             : <input type="checkbox" value={serviceOrderPermission.create=false} checked={false} disabled/>
             }
            </div>
            <div className="grid grid-cols-2">
              <h4>Delete</h4>
              {serviceOrderCheck ? 
              <input type="checkbox" name="delete" checked={serviceOrderPermission.delete} value={serviceOrderPermission.delete} onChange={serviceOrderInputEvent}/> 
              : <input type="checkbox" value={serviceOrderPermission.delete=false} checked={false} disabled/>
              
              } 
            </div>
            <div className="grid grid-cols-2">
              <h4>Modify</h4>
              {serviceOrderCheck ? 
              <input type="checkbox" name="modify" checked={serviceOrderPermission.modify} value={serviceOrderPermission.modify} onChange={serviceOrderInputEvent}/> 
              : <input type="checkbox" value={serviceOrderPermission.modify=false} checked={false} disabled/>
              } 
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-5 flex justify-center items-center">
      <Button className="mr-4 mb-2" color="green" onClick={handleUpdate}>Update Permission</Button>
      </div>
    </Card>
  </div>
  )
}

export default PermissionComponent