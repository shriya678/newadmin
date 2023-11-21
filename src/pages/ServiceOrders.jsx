import React, { useState } from 'react';

const DropdownOptions = {
  orderTypes: ['onTime', 'schedule'],
  serviceCategories: ['mechanic', 'cleaner', 'driver'],
  statuses: ['inProgress', 'open', 'closed'],
};

const ServiceOrders = () => {
  const [filterOptions, setFilterOptions] = useState({
    orderType: '',
    serviceCategory: '',
    status: '',
  });

  const handleFilterChange = (e, filterKey) => {
    const updatedFilterOptions = { ...filterOptions, [filterKey]: e.target.value };
    setFilterOptions(updatedFilterOptions);
  };

  const titleStyle = {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
    marginTop: '20px',
  };

  const dropdownContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div>
      {/* Title and Dropdown Integration */}
      <div style={titleStyle}>
        <div>Service Orders</div>
        <div style={dropdownContainerStyle}>
          {/* <label htmlFor="status">Status: </label> */}
          <select
            id="status"
            className="border border-gray-300 rounded-md px-2 py-1"
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>

      {/* Ongoing Orders Title */}
      <h2 style={{ marginLeft: '20px' }}>Ongoing Orders</h2>
      {/* Service Orders Table */}
      <div style={{ margin: '20px', maxWidth: '100%', overflowX: 'auto', backgroundColor: '#ffffff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          {/* Table Header */}
          <thead>
            <tr style={tableHeaderStyle}>
              <th style={headerCellStyle}>Sr No</th>
              <th style={headerCellStyle}>Order ID</th>
              <th style={headerCellStyle}>Short Description</th>
              <th style={headerCellStyle}>
                <select value={filterOptions.orderType} onChange={(e) => handleFilterChange(e, 'orderType')} style={dropdownStyle}>
                  <option value="">Order Type</option>
                  {DropdownOptions.orderTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </th>
              <th style={headerCellStyle}>
                <select value={filterOptions.serviceCategory} onChange={(e) => handleFilterChange(e, 'serviceCategory')} style={dropdownStyle}>
                  <option value="">Service Categories</option>
                  {DropdownOptions.serviceCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </th>
              <th style={headerCellStyle}>
                <select value={filterOptions.status} onChange={(e) => handleFilterChange(e, 'status')} style={dropdownStyle}>
                  <option value="">Status</option>
                  {DropdownOptions.statuses.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </th>
            </tr>
          </thead>
          {/* Add table body and rows here */}
        </table>
      </div>

      {/* Order History Title */}
      <h2 style={{ marginLeft: '20px' }}>Order History</h2>
      {/* Other Table */}
      <div style={{ margin: '20px', maxWidth: '100%', overflowX: 'auto', backgroundColor: '#ffffff', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd' }}>
          {/* Table Header */}
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
          {/* Add table body and rows here */}
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
};

const dropdownStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '4px',
};

export default ServiceOrders;

