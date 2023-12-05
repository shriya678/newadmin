import { Switch } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/solid'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Button, Card } from '@tremor/react'
import axios from 'axios'
import { PermissionContext } from './AdminTableComponent';
import Loader from './Loader';

const PermissionComponent = ({editId}) => {

  const { setEditID,setSucess } = useContext(PermissionContext);
  
    const[message,setMessage] = useState();
    const [name,setName] = useState();
    const [permissionCheck,setPermissionCheck] = useState();
    const [customerCheck,setCustomerCheck] = useState();
    const [serviceProviderCheck,setServiceProviderCheck] = useState();
    const [serviceOrderCheck,setServiceOrderCheck] = useState();

    // console.log("PermissionCheck: ",permissionCheck);


    const [customerPermission,setCustomerPermission] = useState();

    const [serviceProviderPermission,setServiceProviderPermission] = useState();

    const [serviceOrderPermission,setServiceOrderPermission] = useState();


    useEffect(()=>{
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
    
      API.get(`/api/v1/superadmin/` + editId)
        .then((res) => {
          console.log(res);
          setName(res?.data?.admin?.name);
          setPermissionCheck(res?.data?.admin?.permissionCheck);
          setCustomerCheck(res?.data?.admin?.permissions?.customerCheck)
          setCustomerPermission({
            create:res?.data?.admin?.permissions?.customer?.create,
            delete:res?.data?.admin?.permissions?.customer?.delete,
            modify:res?.data?.admin?.permissions?.customer?.modify
          })

          setServiceProviderCheck(res.data.admin.permissions.serviceProviderCheck)
          setServiceProviderPermission({
            create:res.data.admin.permissions.serviceProvider.create,
            delete:res.data.admin.permissions.serviceProvider.delete,
            modify:res.data.admin.permissions.serviceProvider.modify
          })

          setServiceOrderCheck(res.data.admin.permissions.serviceOrderCheck)
          setServiceOrderPermission({
            create:res.data.admin.permissions.serviceOrder.create,
            delete:res.data.admin.permissions.serviceOrder.delete,
            modify:res.data.admin.permissions.serviceOrder.modify
          })

          
    
          // setName(res.data.admin.name);
        
        })
        .catch((error) => console.log(error));
    },[editId])



    const handlePermission = (permissionCheck)=>{

      console.log(permissionCheck);
      if(permissionCheck){
        setCustomerCheck(true);
        setServiceProviderCheck(true);
        setServiceOrderCheck(true);
      }
      else{
        setCustomerCheck(false);
        setServiceProviderCheck(false);
        setServiceOrderCheck(false);
      }
    }
  


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

  


     const handleUpdate = () => {

    const API = axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
      withCredentials: true,
    });

    API.put(`/api/v1/superadmin/` + editId, {
      _id: editId,
      name:name,
      permissionCheck:permissionCheck,
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
        setSucess(true);
        setMessage(
          <div className='text-center text-lg text-green-500'> Permission Changes Sucessfully</div>
        )
      
      })
      .catch((error) => {
        console.log("eror: ", error);
        setMessage(
          <div className='text-center text-lg text-red-500'> Something went wrong</div>
        )
      });
  };

  console.log('Per Check: ',permissionCheck);


  return (
    <div className="justify-center flex items-center">
   {name ?  <Card className=" h-auto w-full  mt-5 dark:bg-red-500" style={{background:'#dde1e7'}}>
      <div className=" flex justify-end items-end">
        <XCircleIcon className=" cursor-pointer" width={35} color="#00FF00"  onClick={()=>{
          setPermissionCheck(null);
          setCustomerCheck(null);
          setServiceProviderCheck(null);
          setServiceOrderCheck(null);
          setEditID(null);
          setSucess(false);
          }} />
      </div>

      <div className="  mt-5 border border-gray-300 rounded-lg block w-full p-2.5">
        <h1 className=" text-center text-emerald-400 text-2xl font-medium">
          {/* Abhishek Singh */}
          {name}
        </h1>
      </div>


      <div className="flex justify-evenly flex-row items-center mt-10">
                <h1 className=" text-emerald-400 text-2xl font-medium ">
                  Permission
                </h1>
                <Switch
                  onChange={()=>{
                    handlePermission(!permissionCheck)
                    setPermissionCheck(()=>!permissionCheck)
                 }}
                  className={`${
                    permissionCheck ? " bg-emerald-400" : "bg-gray-200"
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span
                    className={`${
                      permissionCheck ? "translate-x-6" : "translate-x-1"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                  />
                </Switch>
              </div>



      <div className=" grid grid-cols-3 mt-5 gap-4">
      {/* first card of permission for customer */}

      <Card 
       style={customerCheck? {boxShadow:"inset -5px -5px 9px rgba(255,255,255,0.45),inset 5px 5px 9px rgba(94,104,121,0.3)"}:{boxShadow:"none"}}   
      >
          <div className="flex justify-center items-center">
            <div className="flex justify-between align-middle">
              <h1 className="mr-4">Customer</h1>
              <Switch
              // style={{boxShadow: 'inset -5px -5px 9px rgba(255,255,255,0.45), inset 5px 5px 9px rgba(94,104,121,0.3)'}}
              onChange={setCustomerCheck}
                className={`${
                  customerCheck ? " bg-emerald-400 shadow-[inset_-5px_-5px_9px_rgba(255,255,255,0.45),inset_5px_5px_9px_rgba(94,104,121,0.3)] " 
                  : "bg-gray-200"
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
        <Card 
         style={serviceProviderCheck? {boxShadow:"inset -5px -5px 9px rgba(255,255,255,0.45),inset 5px 5px 9px rgba(94,104,121,0.3)"}:{boxShadow:"none"}} 
         >
          <div className="flex justify-center items-center">
            <div className="flex justify-between align-middle">
              <h1 className="mr-4">Service Provider</h1>
              <Switch
                onChange={setServiceProviderCheck}
                className={`${
                  serviceProviderCheck ? " bg-emerald-400 shadow-[inset_-5px_-5px_9px_rgba(255,255,255,0.45),inset_5px_5px_9px_rgba(94,104,121,0.3)]"
                   : "bg-gray-200"
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
        <Card
         style={serviceOrderCheck? {boxShadow:"inset -5px -5px 9px rgba(255,255,255,0.45),inset 5px 5px 9px rgba(94,104,121,0.3)"}:{boxShadow:"none"}}  
        >
          <div className="flex justify-center items-center">
            <div className="flex justify-between align-middle">
              <h1 className="mr-4">Service Order</h1>
              <Switch
                onChange={setServiceOrderCheck}
                className={`${
                  serviceOrderCheck ? " bg-emerald-400 shadow-[inset_-5px_-5px_9px_rgba(255,255,255,0.45),inset_5px_5px_9px_rgba(94,104,121,0.3)]" : "bg-gray-200"
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

      {/* for display message error or sucess */}
      {message}
    </Card>
    :<Loader/>
   }

  
  </div>
  )
}

export default PermissionComponent