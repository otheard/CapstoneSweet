import React, { useState } from 'react';
import Navbar from './NavBar';
import Banner from './Banner';
import Wws from './Wws';
import Om from './Om';


const App = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const handleLogin = (credentials) => {
    // Simulate login and set user data
    setUser({ email: credentials.email, name: 'John Doe', orders: [] });
  };

  const handlePlaceOrder = (order) => {
    setOrders([...orders, order]);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500">
      <Navbar />
      <main className="flex-1 w-full">
        <Banner />
        <Wws />
        <Om />
       
      </main>
    </div>
  );
};

export default App;