import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const orders = [
    { title: "Stunning concept art", price: 59.99, user: "Maria Anders" },
    { title: "Ai generated concept art", price: 79.99, user: "Francisco Chang" },
    { title: "High quality digital character", price: 110.99, user: "Roland Mendel" },
    { title: "Illustration hyper realistic painting", price: 39.99, user: "Helen Bennett" },
    { title: "Original ai generated digital art", price: 119.99, user: "Yoshi Tannamuri" },
    { title: "Text based ai generated art", price: 49.99, user: "Giovanni Rovelli" },
  ];

  return (
    <div className="flex justify-center text-gray-700">
      <div className="w-[1400px] py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Orders</h1>
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="h-12 border-b border-gray-300">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th className="px-4 py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className={`h-14 ${i % 2 === 1 ? "bg-green-100" : ""}`}>
                <td className="px-4 py-2">
                  <img
                    className="w-[50px] h-[25px] object-cover"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Order Art"
                  />
                </td>
                <td className="px-4 py-2">{order.title}</td>
                <td className="px-4 py-2">
                  {Math.floor(order.price)}.
                  <sup className="text-xs">
                    {(order.price % 1).toFixed(2).split(".")[1]}
                  </sup>
                </td>
                <td className="px-4 py-2">{order.user}</td>
                <td className="px-4 py-2">
                  <img
                    className="w-[25px] cursor-pointer"
                    src="./img/message.png"
                    alt="Message"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
