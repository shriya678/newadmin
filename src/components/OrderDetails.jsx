import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/solid';
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
  Badge,
  Flex,
  TextInput,
} from "@tremor/react";

const OrderDetails = () => {
  const { orderId } = useParams();
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleBack = () => {
  };

  const [isClosed, setIsClosed] = useState();

  const orderDetails = {
    name: 'John Doe',
    contact: 'john@example.com',
    location: 'Some Location',
    brand: 'Brand X',
    model: 'Model Y',
    fuelType: 'Petrol',
    status: 'pending',
    servicesRequested: ['Service A'],
    provider: 'James'
  };
  const result = [
    {
      providername: 'Jhon Doe',
      designation: 'Mechanic',
      ontime: '2',
      schedule: '4',
      contact: '9876543210'
    }, {
      providername: 'James',
      designation: 'Driver',
      ontime: '4',
      schedule: '6',
      contact: '9988776655'
    }, {
      providername: 'James',
      designation: 'Driver',
      ontime: '4',
      schedule: '6',
      contact: '9988776655'
    }, {
      providername: 'James',
      designation: 'Driver',
      ontime: '4',
      schedule: '6',
      contact: '9988776655'
    }, {
      providername: 'Jhon Doe',
      designation: 'Mechanic',
      ontime: '2',
      schedule: '4',
      contact: '9876543210'
    }, {
      providername: 'Jhon Doe',
      designation: 'Mechanic',
      ontime: '2',
      schedule: '4',
      contact: '9876543210'
    },
  ];

  useEffect(() => {
    if (orderDetails.status === 'closed') {
      setIsClosed(true);
    } else {
      setIsClosed(false);
    }
  })

  const [serviceProvider, setServiceProvider] = useState(orderDetails.provider);

  const closePopup = () => {
    setPopupOpen(false);
  };

  const assignProvider = () => {
    setPopupOpen(true);
  };

  const changeServiceProvider = (newProviderName) => {
    setServiceProvider(newProviderName);
    setPopupOpen(false);
  };
  return (
    <div className="flex flex-col lg:flex-row justify-center bg-white rounded m-4 lg:justify-between gap-6 lg:gap-12 p-4 lg:p-8">
      {/* Left Side */}
      <div className="w-full lg:w-1/2">
        <div className="flex items-center mb-4">
          {/* Back icon */}
          <ChevronLeftIcon
            className="h-6 w-6 text-gray-700 mr-2 cursor-pointer"
            onClick={handleBack}
          />
          {/* Order details title */}
          <h2 className="text-2xl font-bold">Order Details - {orderId}</h2>
        </div>
        <div className="space-y-2">
          <div className="space-y-2 border-2 border-black rounded">
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/3 text-lg">Name:</h3>
              <p className="w-2/3 text-lg">{orderDetails.name}</p>
            </div>
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/3 text-lg">Contact:</h3>
              <p className="w-2/3 text-lg">{orderDetails.contact}</p>
            </div>
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/3 text-lg">Location:</h3>
              <p className="w-2/3 text-lg">{orderDetails.location}</p>
            </div>
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/3 text-lg">Brand:</h3>
              <p className="w-2/3 text-lg">{orderDetails.brand}</p>
            </div>
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/3 text-lg">Model:</h3>
              <p className="w-2/3 text-lg">{orderDetails.model}</p>
            </div>
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/3 text-lg">Fuel Type:</h3>
              <p className="w-2/3 text-lg">{orderDetails.fuelType}</p>
            </div>
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/3 text-lg">Status:</h3>
              <p className="w-2/3 text-lg">{orderDetails.status}</p>
            </div>
            {isClosed && (
              <>
                <div className="flex border-b-2 border-black py-2">
                  <h3 className="ml-2 font-semibold w-1/3 text-lg">Amount:</h3>
                  <p className="w-2/3 text-lg"></p>
                </div>
                <div className="flex border-b-2 border-black py-2">
                  <h3 className="ml-2 font-semibold w-1/3 text-lg">Payment Type:</h3>
                  <p className="w-2/3 text-lg"></p>
                </div><div className="flex border-b-2 border-black py-2">
                  <h3 className="ml-2 font-semibold w-1/3 text-lg">Payment Status:</h3>
                  <p className="w-2/3 text-lg"></p>
                </div>
              </>
            )}
          </div>
          {!isClosed && (
            <div className="flex justify-center">
              <button
                className="bg-emerald-300 px-4 py-2 rounded-md mr-4 hover:bg-emerald-400 transition-colors duration-300"
                onClick={assignProvider}
              >
                Accept
              </button>
              <button
                className="bg-gray-200 px-4 py-2 rounded-md ml-4 hover:bg-red-500 transition-colors duration-300"
                onClick={assignProvider}
              >
                Reject
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-2xl font-bold mb-12"></h2>
        <div className="space-y-2">
          <div className="space-y-2 border-2 border-black rounded">
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/3 text-lg">Services Requested:</h3>
              <div className="w-2/3">
                {orderDetails.servicesRequested.map((service, index) => (
                  <p key={index}>{service}</p>
                ))}
              </div>
            </div>
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/5 lg:w-2/5 text-lg">Additional Detail:</h3>
              <textarea className="w-full lg:w-2/3 border border-black rounded-md p-2 mr-2"></textarea>
            </div>
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/3 text-lg">Service Type:</h3>
              <p className="w-2/3">{/* Add service type details */}</p>
            </div>
            <div className="flex border-b-2 border-black py-2">
              <h3 className="ml-2 font-semibold w-1/3 text-lg">Service Provider:</h3>
              <p className="w-2/3">{serviceProvider}</p>
            </div>
            {!isClosed && (
              <div className="flex border-b-2 border-black py-2">
                <h3 className="ml-2 font-semibold w-1/3 text-lg">Assigned:</h3>
                <p className="w-2/3 mb-24">{serviceProvider ? 'Yes' : 'No'}</p>
              </div>
            )}
            {isPopupOpen && (
              <div className="z-50 fixed top-4 left-[8%] w-full h-full flex items-center justify-center">
                <div className="bg-white p-8 w-[800px] rounded shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Service Providers</h2>

                  <Table className="mt-5 dark:bg-tremor-background h-[300px]">
                    <TableHead>
                      <TableRow>
                        <TableHeaderCell>S No</TableHeaderCell>
                        <TableHeaderCell>Service Providers Name</TableHeaderCell>
                        <TableHeaderCell>Designation</TableHeaderCell>
                        <TableHeaderCell>On-Time Requests</TableHeaderCell>
                        <TableHeaderCell>Schedule Requests</TableHeaderCell>
                        <TableHeaderCell>Contact Number</TableHeaderCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {result.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Text>{index + 1}</Text>
                          </TableCell>
                          <TableCell onDoubleClick={() => changeServiceProvider(item.providername)}>
                            <Text>
                              {item.providername}
                            </Text>
                          </TableCell>
                          <TableCell>
                            <Text>{item.designation}</Text>
                          </TableCell>
                          <TableCell>
                            <Text>{item.ontime}</Text>
                          </TableCell>
                          <TableCell>
                            <Text>{item.schedule}</Text>
                          </TableCell>
                          <TableCell>
                            <Text>{item.contact}</Text>
                          </TableCell>
                        </TableRow>
                      ))}

                    </TableBody>
                  </Table>

                  <div className="flex justify-between">
                    <button
                      onClick={closePopup}
                      className="ml-4 border py-2 px-4 rounded text-gray-600 hover:bg-gray-100"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
            {isClosed && (
              <>
                <div className="flex border-b-2 border-black py-2">
                  <h3 className="ml-2 font-semibold w-1/3 text-lg">Rating:</h3>
                  <p className="w-2/3">{/* Add assigned details */}</p>
                </div>
                <div className="flex border-b-2 border-black py-2">
                  <h3 className="ml-2 font-semibold w-1/5 lg:w-2/5 text-lg">Comments:</h3>
                  <textarea className="w-full lg:w-2/3 border border-black rounded-md p-2 mr-2"></textarea>
                </div>
              </>
            )}
          </div>
          {!isClosed && (
            <div className='flex justify-center'>
              <button
                className="bg-emerald-300 px-4 py-2 rounded-md hover:bg-emerald-400 transition-colors duration-300"
                onClick={assignProvider}
              >
                Assign Provider
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;