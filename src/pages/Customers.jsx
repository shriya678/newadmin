import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
    TextInput,
    Button,
    Select,
    SelectItem,
  } from "@tremor/react";
  
  import { createContext, useEffect, useState } from "react";
  import axios from "axios";
  import AddCustomerPage from "../components/AddCustomerPage";
import CustomerImport from "../components/CustomerImport";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { UpdateCustomer } from "../components/UpdateCustomer";
import DeletePopUp from "../components/DeletePopUp";

  
const ITEMS_PER_PAGE = 10;

export const CustomerContext = createContext();

  const Customers = () => {
    const [data, setData] = useState([]);
    const [editId, setEditID] = useState(null);
    const [sucess,setSucess] = useState(false);

    const [page,setPage] = useState(1);

    const totalItems = 57;  
    
  
    const [importBtn,setImportBtn] = useState(false);
  
    const [addCustomer,setAddCustomer] = useState(false);
  
    const [isDeleteCheck,setIsDeleteCheck] = useState([]);
  
    const [updateId,setUpdateId] = useState(null);

    const [deletePopup,setDeletePopup] = useState(false);


    const handlePage = (page) => {
      console.log({page})
      setPage(page);
    };

    // this is demo for checking Allusers
      useEffect(() => {
        const API = axios.create({
          baseURL: `${import.meta.env.VITE_BASE_URL}`,
          withCredentials: true,
        });
        API.get(`/api/v1/admin/getAllUsers?limit=${ITEMS_PER_PAGE}&page=${page}`)
        .then((res) => {
          console.log("Customer Res:", res.data);
          setData(res.data.users);
          
        })
        .catch((error)=>{
          console.log("Error: ",error);
        })

    },[page,sucess])

     //  Delete Functionality
  const handleCheckbox = (e)=>{
    const{value,checked} = e.target;
    console.log("Deletevalue: ",value);
    if(checked){
      setIsDeleteCheck([...isDeleteCheck,value])
    }
    else{
      setIsDeleteCheck(isDeleteCheck.filter((deleteItem)=>deleteItem!==value))
    }
  }

  console.log("DeleteArray: ",isDeleteCheck);
  
    const handleDownloadFile = ()=>{
      // e.preventDefault();

      console.log("download File");
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
     API
       .get(
         `/api/v1/admin/bulkDownload`,
         {
          responseType:'blob'
         }
       )
      .then((res)=>{
        const url = window.URL.createObjectURL(res.data);
  
        const link = document.createElement('a');
        link.href = url;
        link.download = 'customer.csv';
  
        document.body.appendChild(link);
  
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
  
        // link.parentNode.removeChild(link);
      })
      .catch((error)=>console.log('Customer Error: ',error));
    }
  
    
  
    return (

      <CustomerContext.Provider value={{page,setPage,editId,setEditID,sucess,setSucess,setIsDeleteCheck}}>

    
    <div className="grid grid-cols-1 w-full p-4">

    <Card className="mt-4 dark:bg-tremor-background ">
  
    {addCustomer ? null :  <div className="sm:flex justify-between items-center">
      <Title>Customers</Title>
      <div className="py-2">
        <div className="sm:flex justify-between items-center">
        {updateId? <Button className="mr-4 mb-2" color="emerald" disabled>
            Add
          </Button>:
          <Button className="mr-4 mb-2" color="emerald" onClick={()=>setAddCustomer(true)}>
            Add
          </Button>}


          <Button className="mr-4 mb-2" color="emerald" onClick={()=>
            // handleDelete(updateId)
            setDeletePopup(!deletePopup)}>
            Delete
          </Button>

          <Button className="mr-4 mb-2" color="emerald" onClick={()=>setImportBtn(true)}>
            Import
          </Button>

          <Button className="mr-4 mb-2" color="emerald" onClick={()=>handleDownloadFile()}>
            Export
          </Button>
         
        </div>
      </div>

    </div>

  }


    { 
    importBtn ? <CustomerImport setImportBtn={setImportBtn}/>:

    addCustomer ? (<AddCustomerPage setAddCustomer={()=>setAddCustomer(false)}/>) : 

    editId ? (<UpdateCustomer editId={editId} setEditID={()=>setEditID(null)}/>):

    deletePopup ? (<DeletePopUp isDeleteCheck={isDeleteCheck} setIsDeleteCheck={()=>setIsDeleteCheck([])} setDeletePopup={()=>setDeletePopup(false)} />) :

     (
      <Table className="mt-5 dark:bg-tremor-background h-[450px]">
        <TableHead>
          <TableRow>
          <TableHeaderCell className="bg-white">
           SelectDelete 
          </TableHeaderCell>
          
            <TableHeaderCell className="bg-white">CustomerName</TableHeaderCell>
            <TableHeaderCell className="bg-white">Email</TableHeaderCell>
            <TableHeaderCell className="bg-white">PhoneNo</TableHeaderCell>
            <TableHeaderCell className="bg-white" >Address</TableHeaderCell>
            <TableHeaderCell className="bg-white">Rating</TableHeaderCell>
            <TableHeaderCell className="bg-white">Total Orders</TableHeaderCell>
            <TableHeaderCell className="bg-white">Cancelled Orders</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {data.map((user,index)=>
            <TableRow key={index}>
            <TableCell>
              <input type="checkbox" value={user._id}  checked={user.isDeleteCheck} onChange={(e)=>handleCheckbox(e)}  />
            </TableCell>
              <TableCell>

              <Button 
              onClick={()=>setEditID(user._id)}
               style={{color:"transparent",backgroundColor:"transparent",border:"none"}}>
              <Text>
                    {user.firstName+" "+ user.lastName}
                </Text>
              </Button>
             
              
              </TableCell>
              <TableCell>
                <Text>{user.email}</Text>
              </TableCell>
              <TableCell>
                <Text>{user.phoneNo}</Text>
              </TableCell>
              <TableCell>
              <div className="w-32">
                <Text className="w-full h-full overflow-auto">{user.address}</Text>
                </div>
              </TableCell>
              <TableCell>
                <Text>{user.avgRating}</Text>
              </TableCell>
              <TableCell>
                <Text>{user.totalOrders}</Text>
              </TableCell>
              <TableCell>
                <Text>{user.cancelledOrders}</Text>
              </TableCell>
            </TableRow>            
          )}
         
        </TableBody>
      </Table>
    )
    }

  {!addCustomer ? <Pagination page={page} setPage={setPage} handlePage={handlePage} totalItems={totalItems}></Pagination> :""}

  </Card>

        </div>

        </CustomerContext.Provider>
     
  
    )
    
  };


  function Pagination({page,setPage,handlePage,totalItems}) {

    const totalPages = Math.ceil(totalItems/ITEMS_PER_PAGE);
  
    return (
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <div
             onClick={(e)=>handlePage( page > 1 ?  page - 1 : page)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </div>
          <div
             onClick={(e)=>handlePage( page<totalPages ?  page + 1 : page)}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{(page-1)*ITEMS_PER_PAGE+1}</span> to{' '}
              <span className="font-medium">{page*ITEMS_PER_PAGE > totalItems ? totalItems : page * ITEMS_PER_PAGE}</span> of{' '}
              <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <div
                 onClick={()=>handlePage( page > 1 ?  page - 1 : page)}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              {Array.from({length:Math.ceil(totalItems/ITEMS_PER_PAGE)})
              .map((el,index)=>
                <div
                key={index}
                onClick={()=>handlePage(index+1)}
                aria-current="page"
                className={`relative cursor-pointer z-10 inline-flex items-center ${index+1===page ? 'bg-indigo-600 text-white':' bg-gray-400'} px-4 py-2 text-sm font-semibold
                 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-indigo-600`}
              >
                {index+1}
              </div>
              )}
  
              <div
                onClick={()=>handlePage( page < totalPages ?  page + 1 : page)}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
  
  
  export default Customers;