import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const sampleData = [
  {
    id: 1,
    orderId: 'ORD001',
    shortDescription: 'Sample Description 1',
    orderType: 'onTime',
    serviceCategory: 'mechanic',
    status: 'open',
  },
  {
    id: 2,
    orderId: 'ORD002',
    shortDescription: 'Sample Description 2',
    orderType: 'schedule',
    serviceCategory: 'cleaner',
    status: 'inProgress',
  },
  // Add more sample data entries as needed
];

const result1 = [
  {
    id: 1,
    orderId: 'ORD003',
    shortDescription: 'Sample Description 2',
    orderType: 'schedule',
    serviceCategory: 'cleaner',
    status: 'closed',
  },{
    id: 2,
    orderId: 'ORD004',
    shortDescription: 'Sample Description 2',
    orderType: 'schedule',
    serviceCategory: 'cleaner',
    status: 'closed',
  }

];

const ServiceOrders = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [serviceType, setServiceType] = useState("ontime");
  const [isScheduleOpen, setScheduleOpen] = useState(false);

  const [orderType, setOrderType] = useState();
  const [serviceCategory, setServiceCategory] = useState();
  const [status, setStatus] = useState();

  console.log(orderType);

  const result = sampleData.filter((sampleData) => {
    // Check if both status and service type are selected
    if (status && orderType && serviceCategory) {
      return sampleData.status === status && sampleData.serviceCategory === serviceCategory && sampleData.orderType === orderType;
    }
    // Check if only status is selected
    else if (status && orderType) {
      return sampleData.status === status && sampleData.orderType === orderType;
    }
    // Check if only service type is selected
    else if (status && serviceCategory) {
      return sampleData.status === status && sampleData.serviceCategory === serviceCategory;
    }
    else if (orderType && serviceCategory) {
      return sampleData.orderType === orderType && sampleData.serviceCategory === serviceCategory;
    }
    else if (status) {
      return sampleData.status === status;
    }
    else if (serviceCategory) {
      return sampleData.serviceCategory === serviceCategory;
    }
    else if (orderType) {
      return sampleData.orderType === orderType;
    }
    return true;
  });

  useEffect(() => {
    if (serviceType === 'schedule') {
      setScheduleOpen(true);
    } else {
      setScheduleOpen(false);
    }
  })

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className='relative'>
      <div className='flex justify-between'>
        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', display: 'flex', padding: '4px 20px', marginBottom: '20px' }}>Service Orders</div>
        <div style={{ display: 'flex', alignItems: 'center', padding: '4px 20px', marginBottom: '20px' }}>
          <button className="border border-gray-300 rounded-md px-2 py-1 mr-1 bg-white cursor-pointer" onClick={openPopup}>Create New Order</button>
          <select
            id="status"
            className="border border-gray-300 rounded-md px-2 py-1"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
        {isPopupOpen && (
          <div className="z-50 fixed top-4 left-[8%] w-full h-full flex items-center justify-center">
            <div className="bg-white p-8 w-[800px] rounded shadow-md">
              <h2 className="text-2xl font-bold mb-4">Create New Request on behalf of a customer</h2>

              <div className="flex mb-4">
                <label className="mr-2 p-1 w-20">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-solid border-black p-1 w-[55%]"
                // value={formData.name} onChange={handleChange}
                />
                {isScheduleOpen && (
                  <>
                    <label className="ml-4 p-1">Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="border border-solid border-black p-1 w-[20%]"
                    // value={formData.date} onChange={handleChange}
                    />
                  </>
                )}
              </div>

              <div className="flex mb-4">
                <label className="mr-2 p-1 w-20">Contact</label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  className="border border-solid border-black p-1 w-[55%]"
                // value={formData.contact} onChange={handleChange}
                />
                {isScheduleOpen && (
                  <>
                    <label className="ml-4 p-1">Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      className="border border-solid border-black p-1 w-[20%]"
                    // value={formData.date} onChange={handleChange}
                    />
                  </>
                )}
              </div>

              <div className="flex mb-4">
                <label className="mr-2 p-1 w-20">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border border-solid border-black p-1 w-[55%]"
                // value={formData.location} onChange={handleChange}
                />
              </div>

              <div className="flex mb-4">
                <label className="mr-2 p-1 w-20">Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  className="border border-solid border-black p-1 w-[55%]"
                // value={formData.brand} onChange={handleChange}
                />
              </div>

              <div className="flex mb-4">
                <label className="mr-2 p-1 w-20">Model</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  className="border border-solid border-black p-1 w-[55%]"
                // value={formData.model} onChange={handleChange}
                />
              </div>

              <div className="flex mb-4">
                <label className="mr-2 p-1 w-20">Fuel Type</label>
                <input
                  type="text"
                  id="fuelType"
                  name="fuelType"
                  className="border border-solid border-black p-1 w-[55%]"
                // value={formData.fuelType} onChange={handleChange}
                />
              </div>

              <div className="flex mb-4">
                <label className="mr-2 p-1">Service Requested</label>
                <input
                  type="text"
                  id="serviceRequested"
                  name="serviceRequested"
                  className="border border-solid border-black p-1 w-[55%]"
                // value={formData.serviceRequested} onChange={handleChange}
                />
              </div>

              <div className="flex mb-4">
                <label className="mr-2 p-1">Service Type</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="border border-solid border-black p-1 w-[55%]"
                  // value={formData.serviceType} 
                  onChange={(e) => setServiceType(e.target.value)}
                >
                  <option value="ontime">Ontime</option>
                  <option value="schedule">Schedule</option>
                </select>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={closePopup}
                  className="ml-4 border py-2 px-4 rounded text-gray-600 hover:bg-gray-100"
                >
                  Close
                </button>
                <button
                  // onClick={submitNewModel}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}


      </div>

      <h2 style={{ marginLeft: '20px' }}>Ongoing Orders</h2>
      <div style={{ margin: '8px 20px 20px 20px', maxWidth: '100%', overflowX: 'auto', backgroundColor: '#ffffff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr style={tableHeaderStyle}>
              <th style={headerCellStyle}>Sr No</th>
              <th style={headerCellStyle}>Order ID</th>
              <th style={headerCellStyle}>Short Description</th>
              <th style={headerCellStyle}>
                <select
                  // value={filterOptions.orderType} 
                  onChange={(e) => setOrderType(e.target.value)}
                  style={dropdownStyle}>
                  <option value="">Order Type</option>
                  <option value="onTime">Ontime</option>
                  <option value="schedule">Schedule</option>
                </select>
              </th>
              <th style={headerCellStyle}>
                <select
                  // value={filterOptions.serviceCategory}   
                  onChange={(e) => setServiceCategory(e.target.value)}
                  style={dropdownStyle}>
                  <option value="">Service Categories</option>
                  <option value="mechanic">Mechanic</option>
                  <option value="cleaner">Cleaner</option>
                  <option value="driver">Driver</option>
                </select>
              </th>
              <th style={headerCellStyle}>
                <select
                  // value={filterOptions.status}  
                  onChange={(e) => setStatus(e.target.value)}
                  style={dropdownStyle}>
                  <option value="">Status</option>
                  <option value="inProgress">In Progress</option>
                  <option value="open">Open</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {result.map((data, index) => (
              <tr key={index}>
                <td style={headerCellStyle}>{index + 1}</td>
                <td style={headerCellStyle}>
                  <Link to={`/order/${data.orderId}`}>{data.orderId}</Link>
                </td>
                <td style={headerCellStyle}>{data.shortDescription}</td>
                <td style={headerCellStyle}>{data.orderType}</td>
                <td style={headerCellStyle}>{data.serviceCategory}</td>
                <td style={headerCellStyle}>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ marginLeft: '20px' }}>Order History</h2>
      <div style={{ margin: '8px 20px 20px 20px', maxWidth: '100%', overflowX: 'auto', backgroundColor: '#ffffff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          <thead>
            <tr style={tableHeaderStyle}>
              <th style={headerCellStyle}>Sr No</th>
              <th style={headerCellStyle}>Order ID</th>
              <th style={headerCellStyle}>Short Description</th>
              <th style={headerCellStyle}>Order Type</th>
              <th style={headerCellStyle}>Service Categories</th>
              <th style={headerCellStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {result1.map((data, index) => (
              <tr key={index}>
                <td style={headerCellStyle}>{index + 1}</td>
                <td style={headerCellStyle}>
                  <Link to={`/order/${data.orderId}`}>{data.orderId}</Link>
                </td>
                <td style={headerCellStyle}>{data.shortDescription}</td>
                <td style={headerCellStyle}>{data.orderType}</td>
                <td style={headerCellStyle}>{data.serviceCategory}</td>
                <td style={headerCellStyle}>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #ddd',
};

const headerCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'center'
};

const dropdownStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '4px',
};

export default ServiceOrders;

