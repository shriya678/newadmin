import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import axios from 'axios';
import { ServiceProviderContext } from '../pages/ServiceProviderPage';

export default function SPDeletePopUp({isDeleteCheck,deletePopup,setDeletePopup}) {

  const {setSucess,sucess,setIsDeleteCheck} = useContext(ServiceProviderContext);

  // console.log("IsDelete: ",isDeleteCh
  let [isOpen, setIsOpen] = useState(true)

  const [message,setMessage] = useState();

  function closeModal() {
    setIsOpen(false)
    setDeletePopup(!deletePopup);
    setSucess(!sucess)
    setIsDeleteCheck([]);
    setMessage(null);
  }

  const handleDelete = (isDeleteCheck) => {
    console.log("isDeleteCheck: ",isDeleteCheck);

    const deleteArray = JSON.stringify(isDeleteCheck);
    
    if(deleteArray){

      setMessage(
        <div className='text-center text-lg text-green-500'>Loading...</div>
      )

    const API = axios.create({
      baseURL: `${import.meta.env.VITE_BASE_URL}`,
      withCredentials: true,
    });
    API.delete(`/api/v1/admin/serviceProvider/bulkDelete`,{
      data:{array:[...isDeleteCheck]}
    }
    )

      .then((res) => {
        console.log(res);
        setIsDeleteCheck(null);
        // setSucess(true);
        setMessage(
            <div className='text-center text-lg text-green-500'> Record Deleted Sucessfully</div>
          )
      })
      .catch((error) => {
      
        console.log("eror: ", error);
        // setEditID(false);
        setMessage(
            <div className='text-center text-lg text-red-500'> Something Went Wrong </div>
          )

        setIsDeleteCheck(null);
      });

    }

  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto">
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
                    Alert
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Do you really want to Delete,this can not be
                      reversed?
                    </p>
                  </div>

                  {message}

                  <div className="flex justify-between items-center">
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={()=>handleDelete(isDeleteCheck)}
                    >
                      Delete
                    </button>
                  </div>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}