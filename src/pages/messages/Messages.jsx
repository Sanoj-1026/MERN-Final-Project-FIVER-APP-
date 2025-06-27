import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-12">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Messages</h1>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="h-16 border-b border-gray-200">
              <th className="px-4 py-2">{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th className="px-4 py-2">Last Message</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-24 bg-green-100">
              <td className="px-4 py-2 font-medium">Charley Sharp</td>
              <td className="px-4 py-2 text-gray-500">
                <Link to="/message/123" className="text-blue-600 hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="px-4 py-2 text-gray-500">1 hour ago</td>
              <td className="px-4 py-2">
                <button className="bg-green-500 text-white font-medium px-4 py-2 rounded hover:bg-green-600">
                  Mark as Read
                </button>
              </td>
            </tr>
            <tr className="h-24 bg-green-100">
              <td className="px-4 py-2 font-medium">John Doe</td>
              <td className="px-4 py-2 text-gray-500">
                <Link to="/message/123" className="text-blue-600 hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="px-4 py-2 text-gray-500">2 hours ago</td>
              <td className="px-4 py-2">
                <button className="bg-green-500 text-white font-medium px-4 py-2 rounded hover:bg-green-600">
                  Mark as Read
                </button>
              </td>
            </tr>
            <tr className="h-24">
              <td className="px-4 py-2 font-medium">Elinor Good</td>
              <td className="px-4 py-2 text-gray-500">
                <Link to="/message/123" className="text-blue-600 hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="px-4 py-2 text-gray-500">1 day ago</td>
              <td className="px-4 py-2"></td>
            </tr>
            <tr className="h-24">
              <td className="px-4 py-2 font-medium">Garner David</td>
              <td className="px-4 py-2 text-gray-500">
                <Link to="/message/123" className="text-blue-600 hover:underline">
                  {message.substring(0, 100)}...
                </Link>
              </td>
              <td className="px-4 py-2 text-gray-500">2 days ago</td>
              <td className="px-4 py-2"></td>
            </tr>
            <tr className="h-24">
              <td className="px-4 py-2 font-medium">Troy Oliver</td>
              <td className="px-4 py-2 text-gray-500">
                {message.substring(0, 100)}
              </td>
              <td className="px-4 py-2 text-gray-500">1 week ago</td>
              <td className="px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Messages;
