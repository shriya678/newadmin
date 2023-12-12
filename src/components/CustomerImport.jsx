import { Dialog, Transition } from "@headlessui/react";
import { Button } from "@tremor/react";
import axios from "axios";
import React, { Fragment, useState } from "react";

export default function CustomerImport({ setImportBtn }) {
  let [isOpen, setIsOpen] = useState(true);
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [selectedFile,setSelectedFile] = useState();
  const [loading,setLoading] = useState(false);


  function closeModal() {
    setIsOpen(false);
    setImportBtn(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // let selectedFile;

  const handleFileEvent = () =>{

    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];

    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
      } else {
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      return alert("Please select your file");
    }
  }

  // onchange event
  const handleFile = (e) => {
    // selectedFile = e.target.files[0];
    setSelectedFile(e.target.files[0]);
    console.log("file: ", selectedFile);
  const myTimeout = setTimeout(handleFileEvent,1000)

  function myStopFunction() {
    clearTimeout(myTimeout);
  }
  myStopFunction();
  };

 

  console.log("selected File outer:", selectedFile);

  // submit event
  const handleFileSubmit = (e) => {
    console.log("hello");
    e.preventDefault();

    console.log("Selected: ", selectedFile);

    if (selectedFile) {
      const formData = new FormData();
      formData.append("collection_file", selectedFile);

      setLoading(true);

      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
      API.post(`/api/v1/superadmin/upload/` + "users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          console.log("Customer Response: ", res);
          setLoading(false);
          closeModal();
        })
        .catch((error) => console.log("Cutomer Error: ", error));
      return;
    }
    //  return alert("Please enter Details");
  };

  //   vist headless ui for this type of popup
  return (
    <>
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
                    Choose Customer CSV file Bulk upload
                  </Dialog.Title>
                  <div className="mt-2">
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900
                sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5 "
                      id="file_input"
                      type="file"
                      required
                      onChange={handleFile}
                    />

                    {typeError ? (
                      <div className="mt-2 text-sm text-red-600" role="alert">
                        {typeError}
                      </div>
                    ) :

                    loading ? (
                      <div className="mt-2 text-sm text-green-600">
                        Loading...
                      </div>
                    )   
                    :
                    (
                      ""
                    )
                    }
                  </div>

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
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleFileSubmit}
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
    </>
  );
}
