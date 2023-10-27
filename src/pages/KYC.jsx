import {Fragment, useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'
import axios from "axios";
import { Button, Card, Flex, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Text, TextInput, Title } from "@tremor/react";
// import { SelectComponent } from "../components/SelectComponent";

// const Allrole = ["mechanic", "clener", "driver"];

const people = [
  {
    id: 1,
    role: "mechanic",
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    role: "clener",
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    role: "driver",
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
]

const KYC = () => {

  // onchange states
  const [excelFile, setExcelFile] = useState(null);
  const [typeError, setTypeError] = useState(null);

  const [kycSelected, setKYCSelected] = useState(people[0]);

  const [singleRole,setSingleRole] = useState (people[0]);

  const [fileKYC,setFileKYC] = useState();

  // submit state
  const [excelData, setExcelData] = useState(null);
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
   

    console.log(kycSelected.role);

    // console.log(excelFile);


  useEffect(()=>{
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 10));
    }
  },[excelFile])
  

  //  console.log(role);

  let selectedFile;
  // onchange event
  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/csv",
    ];

    selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFile(e.target.result);
        };

      } else {
        setTypeError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("Please select your file");
    }
  };

  // submit event
   const handleFileSubmit = (e) => {

     console.log("hello");
     e.preventDefault();

      if (excelData && kycSelected ) {


        const API = axios.create({
          baseURL: "http://localhost:8000",
          withCredentials: true,
        });
       API
         .post(
           `/api/v1/superadmin/kycfile/${kycSelected.role}`,
          
           {
            "KYC_file":selectedFile,
           }
         )
        .then((res) => console.log('KYC Res: ',res))
        .catch((error)=>console.log('kyc Error: ',error));
      return;
    }
    return alert("Please enter Details");
  }
      
   

  return (
    <div className="grid grid-cols-1 w-full">
      {/* form */}

   <div className="col-span-2 p-4">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">


    

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

        <Card className="w-xs dark:bg-tremor-background " decoration="top" decorationColor="indigo">
      <Flex justifyContent="between" alignItems="center">

      <Button onClick={()=>setFileKYC(true)}>File KYC</Button>
      <Button onClick={()=>setFileKYC(false)}>Single KYC</Button>
      <Button>Download KYC</Button>
      </Flex>
      {/* <Metric>$ 34,743</Metric> */}
    </Card>


         {fileKYC ? <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            File KYC Page
          </h2> :
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Single KYC Page
          </h2>
         }

        </div>

      { fileKYC ? 
       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <Listbox value={kycSelected} onChange={setKYCSelected}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                    Select Role
                  </Listbox.Label>
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        <img
                          src={kycSelected.avatar}
                          alt=""
                          className="h-5 w-5 flex-shrink-0 rounded-full"
                        />
                        <span className="ml-3 block truncate">
                          {kycSelected.role}
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1
                       ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-indigo-600 text-white"
                                  : "text-gray-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <img
                                    src={person.avatar}
                                    alt=""
                                    className="h-5 w-5 flex-shrink-0 rounded-full"
                                  />
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {person.role}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>


            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="file_input"
            >
              Select File
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900
                sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5 "
              id="file_input"
              type="file"
              required
              onChange={handleFile}
            />

            {typeError && (
              <div className="mt-2 text-sm text-red-600" role="alert">
                {typeError}
              </div>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleFileSubmit}
              >
                Upload File
              </button>
            </div>
          </form>
        </div>

        :

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <form className="space-y-6" action="#" method="POST">
          <Listbox value={singleRole} onChange={setSingleRole}>
              {({ open }) => (
                <>
                  <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">
                    Select Role
                  </Listbox.Label>
                  <div className="relative mt-2">
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                      <span className="flex items-center">
                        <img
                          src={kycSelected.avatar}
                          alt=""
                          className="h-5 w-5 flex-shrink-0 rounded-full"
                        />
                        <span className="ml-3 block truncate">
                          {kycSelected.role}
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronDownIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1
                       ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {people.map((person) => (
                          <Listbox.Option
                            key={person.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-indigo-600 text-white"
                                  : "text-gray-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={person}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <img
                                    src={person.avatar}
                                    alt=""
                                    className="h-5 w-5 flex-shrink-0 rounded-full"
                                  />
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {person.role}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleFileSubmit}
              >
                KYC
              </button>
            </div>

          </form>

          </div>



      }


      </div>
   </div>


      {/* view data */}
      <div className="w-full p-4">
        {excelData ? (

      <Card className="mt-4 dark:bg-tremor-background">

      <div className="sm:flex justify-between items-center">
      <Title>Product Sell</Title>
      <div className="py-2">
      <div className="sm:flex justify-between items-center">
      <TextInput className="dark:bg-tremor-background mr-4 mb-2" icon={SearchIcon} placeholder="Search..." />
      </div>

     </div>
      </div>


  <Table className="mt-5 dark:bg-tremor-background">
  <TableHead>
    <TableRow>
    {Object.keys(excelData[0]).map((key)=>(
      <TableHeaderCell scope="col" className="px-6 py-3" key={key}>
                      {key}
                    </TableHeaderCell>
    ))}
    </TableRow>
  </TableHead>
  <TableBody>
    {excelData.map((item,index) => (

      <TableRow key={index}>

      {Object.keys(item).map((key) => (
                      <TableCell className="px-6 py-4" key={key}>
                        {item[key]}
                      </TableCell>
                    ))}

      </TableRow>
    )
    )}
  </TableBody>
</Table>
      </Card>

        ) :( 

        fileKYC ? <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-lg font-bold leading-9 tracking-tight text-gray-900">
            No File is uploaded yet
          </h2>
        </div>:""

        )

        }
      </div>



      {/* <div className="col-span-2 p-4">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            File KYC Page
          </h2>
        </div>




        </div>
        </div> */}



    </div>
  );
}

export default KYC;