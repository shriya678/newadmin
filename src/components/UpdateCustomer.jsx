import { Dialog, Transition } from '@headlessui/react'
import { TextInput } from '@tremor/react';
import axios from 'axios';
import { Fragment, useContext, useEffect, useState } from 'react'
import { CustomerContext } from '../pages/Customers';


export function UpdateCustomer({editId,setEditID}) {

  const {sucess,setSucess} = useContext(CustomerContext);

  let [isOpen, setIsOpen] = useState(true);

  const [email, setEmail] = useState();
  const [firstName, setFirsttName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNo, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [message,setMessage] = useState();

  useEffect(()=>{
    const API = axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
      withCredentials: true,
    });
  
    API.get(`/api/v1/admin/updateUser/` + editId)
      .then((res) => {
        console.log("Customer : ", res);
        setFirsttName(res.data.user.firstName);
        setLastName(res.data.user.lastName);
        setEmail(res.data.user.email);
        setPhoneNumber(res.data.user.phoneNo);
        setAddress(res.data.user.address);
      })
      .catch((error) => {
        console.log(error)
        setMessage(
          <div className='text-center text-md text-red-500'>Something Went Wrong User record not fetched!</div>
        )
      });
  },[editId])


  function closeModal() {
    setIsOpen(false);
    setEditID(null);
    setMessage(null);
    setSucess(!sucess);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleUpdateCustomer = ()=>{
    const API = axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
      withCredentials: true,
    });

    API.put(`/api/v1/admin/updateUser/` + editId, {
      _id: editId,
      firstName,
      lastName,
      email,
      phoneNo,
      address,
    })
      .then((res) => {
        console.log("Update Rec: ",res);
       setMessage(
          <div className='text-center text-md text-green-500'> {firstName+" "+lastName} record has been updated</div>
        )
        
        // setSucess(!sucess);
        // setEditID(null);
        // location.reload();
      })
      .catch((error) => {
        setMessage(
          <div className='text-center text-md text-red-500'> {firstName+" "+lastName} record not Updated something wrong!</div>
        )
        console.log("eror: ", error);
        // setSucess(!sucess);
        // setEditID(null);
      });
  }

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
                        {/* margin to center card */}
          <div className="fixed inset-0 overflow-y-auto mt-20">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Update Customer
                  </Dialog.Title>

                  <div className="mt-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  FirstName
                  </label>
                    <TextInput
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirsttName(e.target.value)}
                  />
                  </div>

                  <div className="mt-2">

                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  LastName
                  </label>

                    <TextInput
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  </div>

                  <div className="mt-2">

                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                  </label>

                    <TextInput
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  </div>

                  <div className="mt-2">

                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PhoneNo">
                  Phone Number
                  </label>

                    <TextInput
                    type="number"
                    value={phoneNo}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  </div>

                  <div className="mt-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                  Address
                  </label>

                    <TextInput
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  </div>

                  <div className='mt-2'>
                  {message}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleUpdateCustomer}
                      >
                        Upload
                      </button>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

