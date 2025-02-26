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
    Button,
    Select,
    SelectItem,
  } from "@tremor/react";
  
  import { Fragment, createContext, useEffect, useState } from "react";
  import axios from "axios";
  import AddCustomerPage from "../components/AddCustomerPage";
  import CustomerImport from "../components/CustomerImport";
  // import { CalculatorIcon, CheckIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
  
  import { UpdateCustomer } from "../components/UpdateCustomer";
  import DeletePopUp from "../components/DeletePopUp";
  
  import {
    ChevronDownIcon,
    CheckIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
  } from "@heroicons/react/solid";
  import { Listbox, Transition } from "@headlessui/react";
  import AddServiceProviderPage from "../components/AddServiceProviderPage";
  import SPDeletePopUp from "../components/SPDeletePopUp";
  import { UpdateSP } from "../components/UpdateSP";
  import ServiceProviderImport from "../components/ServiceProviderImport";
  
  export const ServiceProviderContext = createContext();
  
  const ServiceProviderPage = () => {
    const [data, setData] = useState([]);
    // const [range,setRange] = useState([1]);
    let range = [5];
  
    const [itemsPerPage, SetItemsPerPage] = useState(range[0]);
    const [editId, setEditID] = useState(null);
    const [sucess, setSucess] = useState(false);
    const [importBtn, setImportBtn] = useState(false);
    const [addSP, setAddSP] = useState(false);
    const [isDeleteCheck, setIsDeleteCheck] = useState([]);
    const [deletePopup, setDeletePopup] = useState(false);
  
    const [currentPage, setcurrentPage] = useState(1);
    const [totalItems, setTotalItems] = useState(null);
  
    let serviceProvider = [];
  
    const roles = ["mechanic", "driver", "cleaner"];
  
    const [value, setValue] = useState(roles[0]);
    console.log("mayank",value)
  
    if (totalItems > 1) {
      let num = totalItems;
      let temp = [];
      // let res = [];
  
      // this functions gives you how many records/page you can select from an array and this array create dynamically according to totalItems
      const myFun = (totalItems) => {
        if (totalItems > 20) {
          while (num >= 10) {
            num /= 10;
          }
          console.log("num: ", parseInt(num / 2));
          const end = parseInt(num / 2);
  
          for (let i = 2; i <= end; i++) {
            console.log("hello");
            temp.push(i * 10);
          }
        }
        return temp;
      };
  
      if (totalItems >= 100) {
        temp = [20, 30, 40];
        range = [10, ...temp, totalItems];
      } else {
        temp = myFun(totalItems);
        // console.log("else case");
        if (totalItems <= 10) {
          // res=[10]
          // setRange([10])
          range = [10];
        } else {
          range = [10, ...temp, totalItems];
        }
      }
      // console.log("Range: ", range);
    }
  
    // this is responsible for rendering new pages pageNumberLimit is important
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  
    // const totalItems = 57;
  
    //  here you got currentPage that you clicked on
    const handleClick = (event) => {
      setcurrentPage(Number(event.target.id));
    };
  
    // Here you got totalPages in pages array that set by the for loop
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pages.push(i);
    }
  
    //this is important part in pagination
    const renderPageNumbers = pages.map((number) => {
      if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
        return (
          <div
            key={number}
            id={number}
            onClick={handleClick}
            className={`relative cursor-pointer z-10 inline-flex items-center ${
              currentPage == number ? "bg-indigo-600 text-white" : " bg-gray-400"
            } px-4 py-2 text-sm font-semibold
                 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-indigo-600`}
          >
            {number}
          </div>
        );
      } else {
        return null;
      }
    });
  
    // this is demo for checking Allusers
  
    useEffect(() => {
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
      API.get(
        `/api/v1/admin/serviceProvider/getAll/${value}?limit=${itemsPerPage}&page=${currentPage}`
      )
        .then((res) => {
          // console.log("SP Before: ", res.data);
          setData(res.data.serviceProviders[0].providers);
          setTotalItems(res.data.serviceProviders[0].totalCount[0].total);
        })
        .catch((error) => {
          // console.log("ServiceProvider Error: ", error);
        });
    }, [value, itemsPerPage, currentPage, sucess]);
  
    const handleNextbtn = () => {
      setcurrentPage(currentPage + 1);
  
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    };
  
    const handlePrevbtn = () => {
      setcurrentPage(currentPage - 1);
  
      if ((currentPage - 1) % pageNumberLimit == 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    };
  
    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
      pageIncrementBtn = (
        <div
          className="px-4 py-2 text-sm font-semibold
                 text-grey focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-indigo-600"
          onClick={handleNextbtn}
        >
          {" "}
          &hellip;{" "}
        </div>
      );
    }
  
    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
      pageDecrementBtn = (
        <div
          className="px-4 py-2 text-sm font-semibold
                 text-grey focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-indigo-600"
          onClick={handlePrevbtn}
        >
          {" "}
          &hellip;{" "}
        </div>
      );
    }
  
    //  Delete Functionality
    const handleCheckbox = (e) => {
      const { value, checked } = e.target;
      console.log("Deletevalue: ", value);
      if (checked) {
        setIsDeleteCheck([...isDeleteCheck, value]);
      } else {
        setIsDeleteCheck(
          isDeleteCheck.filter((deleteItem) => deleteItem !== value)
        );
      }
    };
  
    // console.log("DeleteArray: ", isDeleteCheck);
  
    const handleDownloadFile = (currentPage, itemsPerPage) => {
      // e.preventDefault();
  
      const fileName = `ServiceProvider_From_${currentPage}_page.csv`;
  
      console.log("download File");
      const API = axios.create({
        baseURL: `${import.meta.env.VITE_BASE_URL}`,
        withCredentials: true,
      });
      API.get(
        `/api/v1/admin/serviceProvider/download/${value}?limit=${itemsPerPage}&page=${currentPage}`,
        {
          responseType: "blob",
        }
      )
        .then((res) => {
          const url = window.URL.createObjectURL(res.data);
  
          const link = document.createElement("a");
          link.href = url;
          // link.download = 'customer.csv';
          link.download = fileName;
  
          document.body.appendChild(link);
  
          link.click();
          link.remove();
          URL.revokeObjectURL(url);
        })
        .catch((error) => console.log("Customer Error: ", error));
    };
  
    return (
      <ServiceProviderContext.Provider
        value={{
          currentPage,
          editId,
          setEditID,
          sucess,
          setSucess,
          setIsDeleteCheck,
        }}
      >
        <div className="grid grid-cols-1 w-full p-4">
          <Card
            className={
              addSP
                ? `mt-4 dark:bg-tremor-background  h-[150vh]`
                : `mt-4 dark:bg-tremor-background`
            }
          >
            {addSP ? null : (
              <>
                <Title className=" text-center">Service Providers</Title>
                <div className="sm:flex justify-between items-center">
                  {/* Role Select */}
                  <div className="flex flex-col sm:flex-row items-center mb-2 sm:mb-0">
                    <label
                      className="text-gray-700 text-sm mb-2 font-semibold mr-4"
                      htmlFor="role"
                    >
                      Role
                    </label>
                    <Select
                      className="max-w-xs"
                      value={value}
                      onValueChange={setValue}
                      placeholder="Select Role"
                      enableClear={false}
                    >
                      {roles.map((role, key) => (
                        <SelectItem key={key} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
  
                  {/* Action Buttons */}
                  <div className="py-2 flex flex-wrap justify-center sm:justify-end">
                    <Button
                      className="mb-2 mr-2"
                      color="emerald"
                      onClick={() => setAddSP(true)}
                    >
                      Add
                    </Button>
  
                    <Button
                      className="mb-2 mr-2"
                      color="red"
                      onClick={() => setDeletePopup(!deletePopup)}
                    >
                      Delete
                    </Button>
  
                    <Button
                      className="mb-2 mr-2"
                      color="blue"
                      onClick={() => setImportBtn(true)}
                    >
                      Import
                    </Button>
  
                    <Button
                      className="mb-2 mr-2"
                      color="orange"
                      onClick={() =>
                        handleDownloadFile(currentPage, itemsPerPage)
                      }
                    >
                      Export
                    </Button>
                  </div>
                </div>
              </>
            )}
  
            {importBtn ? (
              <ServiceProviderImport setImportBtn={setImportBtn} value={value} />
            ) : addSP ? (
              <AddServiceProviderPage setAddSP={() => setAddSP(false)} />
            ) : editId ? (
              <UpdateSP editId={editId} setEditID={() => setEditID(null)} />
            ) : deletePopup ? (
              <SPDeletePopUp
                isDeleteCheck={isDeleteCheck}
                setIsDeleteCheck={() => setIsDeleteCheck([])}
                setDeletePopup={() => setDeletePopup(false)}
              />
            ) : (
              <Table className="mt-5 dark:bg-tremor-background h-[450px]">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell className="bg-white">
                      SelectDelete
                    </TableHeaderCell>
  
                    <TableHeaderCell className="bg-white">SPName</TableHeaderCell>
                    <TableHeaderCell className="bg-white">Email</TableHeaderCell>
                    <TableHeaderCell className="bg-white">
                      PhoneNo
                    </TableHeaderCell>
                    <TableHeaderCell className="bg-white">
                      Address
                    </TableHeaderCell>
                    <TableHeaderCell className="bg-white">Role</TableHeaderCell>
                    <TableHeaderCell className="bg-white">Rating</TableHeaderCell>
                    <TableHeaderCell className="bg-white">KYC</TableHeaderCell>
                    <TableHeaderCell className="bg-white">
                      Completed orders
                    </TableHeaderCell>
                    <TableHeaderCell className="bg-white">
                      Declined Orders
                    </TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <input
                          type="checkbox"
                          value={user._id}
                          checked={user.isDeleteCheck}
                          onChange={(e) => handleCheckbox(e)}
                        />
                      </TableCell>
  
                      <TableCell>
                        <Button
                          onClick={() => setEditID(user._id)}
                          style={{
                            color: "transparent",
                            backgroundColor: "transparent",
                            border: "none",
                          }}
                        >
                          <Text>{user.generalDetails.fullName}</Text>
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Text>{user.generalDetails.email}</Text>
                      </TableCell>
                      <TableCell>
                        <Text>{user.generalDetails.phoneNo}</Text>
                      </TableCell>
                      <TableCell>
                        <div className="w-32">
                          <Text className="w-full h-full overflow-auto">
                            {user.generalDetails.address}
                          </Text>
                        </div>
                      </TableCell>
                      <TableCell>
                        {/* Role */}
  
                        <Text>{user.role}</Text>
                      </TableCell>
  
                      <TableCell>
                        {/* Rating */}
                        <Text>Blank</Text>
                      </TableCell>
  
                      <TableCell>
                        {/* KYC */}
                        <Text>{user.kyc}</Text>
                      </TableCell>
  
                      <TableCell>
                        {/* Completed orders */}
                        <Text>{user.totalOrders}</Text>
                      </TableCell>
  
                      <TableCell>
                        {/* Declined Orders */}
                        {/* <Text>{user.cancelledOrders}</Text> */}
                        <Text>Blank</Text>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
  
            {!addSP ? (
              <>
                <Pagination
                  currentPage={currentPage}
                  pages={pages}
                  handlePrevbtn={handlePrevbtn}
                  handleNextbtn={handleNextbtn}
                  pageDecrementBtn={pageDecrementBtn}
                  pageIncrementBtn={pageIncrementBtn}
                  renderPageNumbers={renderPageNumbers}
                  itemsPerPage={itemsPerPage}
                  totalItems={totalItems}
                />
  
                {itemsPerPage ? (
                  <RangeSelector
                    itemsPerPage={itemsPerPage}
                    SetItemsPerPage={SetItemsPerPage}
                    range={range}
                  />
                ) : (
                  ""
                )}
              </>
            ) : (
              ""
            )}
          </Card>
        </div>
      </ServiceProviderContext.Provider>
    );
  };
  
  function Pagination({
    currentPage,
    pages,
    handlePrevbtn,
    handleNextbtn,
    pageDecrementBtn,
    pageIncrementBtn,
    renderPageNumbers,
    itemsPerPage,
    totalItems,
  }) {
    console.log("pages: ", pages);
  
    console.log("currentPage: ", currentPage);
  
    // const totalPages = Math.ceil(totalItems/ITEMS_PER_PAGE);
  
    return (
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <Button
            onClick={handlePrevbtn}
            color="indigo"
            disabled={currentPage == 1 ? true : false}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </Button>
  
          <Button
            onClick={handleNextbtn}
            color="indigo"
            disabled={currentPage == pages.length - 1 ? true : false}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </Button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {(currentPage - 1) * itemsPerPage + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {currentPage * itemsPerPage > totalItems
                  ? totalItems
                  : currentPage * itemsPerPage}
              </span>{" "}
              of <span className="font-medium">{totalItems}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <Button
                onClick={handlePrevbtn}
                disabled={currentPage == 1 ? true : false}
                color="indigo"
                className="relative mr-3 inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
  
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}
  
              <Button
                onClick={handleNextbtn}
                disabled={currentPage == pages.length ? true : false}
                color="indigo"
                className="relative ml-3 inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    );
  }
  
  function RangeSelector({ itemsPerPage, SetItemsPerPage, range }) {
    return (
      <div className="flex justify-center h-60">
        <h1 className="mr-5 mt-2">Select Items/Page</h1>
        <div className="w-20">
          <Listbox value={itemsPerPage} onChange={SetItemsPerPage}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{itemsPerPage}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {range.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
    );
  }
  
  export default ServiceProviderPage;