// OrderDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  // Access the orderId from the URL params using useParams hook
  const { orderId } = useParams();
  console.log(orderId);

  // Fetch the order details using the orderId (you may use sampleData or fetch from an API)
  // ...

  return (
    <div>
      <h2>Order Details - {orderId}</h2>
      {/* Render the details of the order */}
      {/* ... */}
    </div>
  );
};

export default OrderDetails;
