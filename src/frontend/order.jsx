import React, { useEffect, useState } from "react";

const OrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`/api/orders/${userId}`);
      const data = await response.json();
      setOrders(data);
    };
    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.map((order, index) => (
        <div key={index}>
          <p>Restaurant: {order.restaurantId}</p>
          <p>Items: {order.items.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;