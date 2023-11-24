import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/solid';

const OrderDetails = () => {
  // Access the orderId from the URL params using useParams hook
  const { orderId } = useParams();
  console.log(orderId);

  const handleBack = () => {
    // Go back to the previous page when the "Back" button is clicked
  };

  const [isClosed, setIsClosed] = useState();

  const orderDetails = {
    name: 'John Doe',
    contact: 'john@example.com',
    location: 'Some Location',
    brand: 'Brand X',
    model: 'Model Y',
    fuelType: 'Petrol',
    status: 'closed',
    servicesRequested: ['Service A'],
  };

  useEffect(() => {
    if (orderDetails.status === 'closed'){
      setIsClosed(true);
    }else{
      setIsClosed(false);
    }
  })

  // Function to handle assigning a service provider
  const assignProvider = () => {
    // Logic to assign a service provider
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
            <p className="w-2/3">{/* Add service provider details */}</p>
          </div>
          {!isClosed && (
          <div className="flex border-b-2 border-black py-2">
            <h3 className="ml-2 font-semibold w-1/3 text-lg">Assigned:</h3>
            <p className="w-2/3 mb-24">{/* Add assigned details */}</p>
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