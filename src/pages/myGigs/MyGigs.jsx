import React from "react";
import { Link } from "react-router-dom";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="flex justify-center text-gray-700">
      <div className="w-[1400px] py-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">
            {currentUser.isSeller ? "Gigs" : "Orders"}
          </h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className="bg-green-500 text-white font-medium px-4 py-2 rounded hover:bg-green-600">
                Add New Gig
              </button>
            </Link>
          )}
        </div>

        <table className="w-full text-left">
          <thead>
            <tr className="h-12 border-b border-gray-300">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Sales</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                title: "Stunning concept art",
                price: 59.99,
                sales: 13,
              },
              {
                title: "Ai generated concept art",
                price: 120.99,
                sales: 41,
              },
              {
                title: "High quality digital character",
                price: 79.99,
                sales: 55,
              },
              {
                title: "Illustration hyper realistic painting",
                price: 119.99,
                sales: 29,
              },
              {
                title: "Original ai generated digital art",
                price: 59.99,
                sales: 34,
              },
              {
                title: "Text based ai generated art",
                price: 110.99,
                sales: 16,
              },
            ].map((gig, i) => (
              <tr
                key={i}
                className={`h-14 ${i % 2 === 1 ? "bg-green-100" : ""}`}
              >
                <td className="px-4 py-2">
                  <img
                    className="w-[50px] h-[25px] object-cover"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td className="px-4 py-2">{gig.title}</td>
                <td className="px-4 py-2">
                  {Math.floor(gig.price)}.
                  <sup className="text-xs">
                    {(gig.price % 1).toFixed(2).split(".")[1]}
                  </sup>
                </td>
                <td className="px-4 py-2">{gig.sales}</td>
                <td className="px-4 py-2">
                  <img
                    className="w-5 cursor-pointer"
                    src="./img/delete.png"
                    alt="delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
