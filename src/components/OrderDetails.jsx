import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/solid';

const OrderDetails = () => {
  // Access the orderId from the URL params using useParams hook
  const { orderId } = useParams();
  console.log(orderId);
  const history = useHistory();

  const handleBack = () => {
    // Go back to the previous page when the "Back" button is clicked
    history.goBack();
  };

  // Sample data for demonstration
  const orderDetails = {
    name: 'John Doe',
    contact: 'john@example.com',
    location: 'Some Location',
    brand: 'Brand X',
    model: 'Model Y',
    fuelType: 'Petrol',
    status: 'Pending',
    servicesRequested: ['Service A'],
  };

  // Function to handle assigning a service provider
  const assignProvider = () => {
    // Logic to assign a service provider
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-6 lg:gap-12 p-4 lg:p-8">
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
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Name:</h3>
            <p className="w-2/3">{orderDetails.name}</p>
          </div>
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Contact:</h3>
            <p className="w-2/3">{orderDetails.contact}</p>
          </div>
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Location:</h3>
            <p className="w-2/3">{orderDetails.location}</p>
          </div>
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Brand:</h3>
            <p className="w-2/3">{orderDetails.brand}</p>
          </div>
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Model:</h3>
            <p className="w-2/3">{orderDetails.model}</p>
          </div>
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Fuel Type:</h3>
            <p className="w-2/3">{orderDetails.fuelType}</p>
          </div>
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Status:</h3>
            <p className="w-2/3">{orderDetails.status}</p>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-4"
              // style={{ marginRight: '50px', marginLeft: '150px' }}
              onClick={assignProvider}
            >
              Accept
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
              onClick={assignProvider}
            >
              Reject
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2">
      <h2 className="text-2xl font-bold mb-12"></h2>
        <div className="space-y-2">
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Services Requested:</h3>
            <div className="w-2/3">
              {orderDetails.servicesRequested.map((service, index) => (
                <p key={index}>{service}</p>
              ))}
            </div>
          </div>
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 lg:w-2/5 text-lg">Additional Detail:</h3>
            <textarea className="w-full lg:w-3/5 h-30 border border-gray-300 rounded-md p-2"></textarea>
          </div>
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Service Type:</h3>
            <p className="w-2/3">{/* Add service type details */}</p>
          </div>
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Service Provider:</h3>
            <p className="w-2/3">{/* Add service provider details */}</p>
          </div>
          <div className="flex border-b-2 border-gray-300 py-2">
            <h3 className="font-semibold w-1/3 text-lg">Assigned:</h3>
            <p className="w-2/3">{/* Add assigned details */}</p>
          </div>
          <div className='flex justify-center'>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={assignProvider}
              style={{ marginTop: '4.3rem' }}
              >
              Assign Provider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;