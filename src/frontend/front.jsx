import React, { useState } from "react";

const PlaceOrder = () => {
  const [order, setOrder] = useState({ restaurantId: "", items: [] });

  const handleSubmit = async () => {
    const response = await fetch("/api/orders/place", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    if (response.ok) {
      alert("Order placed successfully!");
    }
  };

  return (
    <div>
      <h2>Place an Order</h2>
      <input
        type="text"
        placeholder="Restaurant ID"
        onChange={(e) => setOrder({ ...order, restaurantId: e.target.value })}
      />
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default PlaceOrder;