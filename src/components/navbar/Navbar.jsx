import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => window.removeEventListener("scroll", isActive);
  }, []);

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div
      className={`flex flex-col items-center sticky top-0 z-[999] transition-all duration-500 ${
        active || pathname !== "/"
          ? "bg-white text-black"
          : "bg-[#013914] text-white"
      }`}
    >
      <div className="w-[1400px] flex items-center justify-between py-5">
        <div className="text-[34px] font-bold flex items-center">
          <Link to="/" className="no-underline text-inherit">
            <span>liverr</span>
          </Link>
          <span className="text-[#1dbf73] font-bold">.</span>
        </div>

        <div className="flex items-center gap-6 font-[500] font-montserrat">
          <span className="whitespace-nowrap">Liverr Business</span>
          <span className="whitespace-nowrap">Explore</span>
          <span className="whitespace-nowrap">English</span>
          {!currentUser?.isSeller && (
            <span className="whitespace-nowrap">Become a Seller</span>
          )}
          {currentUser ? (
            <div
              className="flex items-center gap-2.5 cursor-pointer relative"
              onClick={() => setOpen(!open)}
            >
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{currentUser.username}</span>
              {open && (
                <div className="absolute top-[50px] right-0 p-5 bg-white rounded-[10px] border border-gray-300 z-[999] flex flex-col gap-2.5 w-[200px] font-light text-gray-500">
                  {currentUser.isSeller && (
                    <>
                      <Link to="/mygigs" className="hover:underline">Gigs</Link>
                      <Link to="/add" className="hover:underline">Add New Gig</Link>
                    </>
                  )}
                  <Link to="/orders" className="hover:underline">Orders</Link>
                  <Link to="/messages" className="hover:underline">Messages</Link>
                  <Link to="/" className="hover:underline">Logout</Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link to="/register">
                <button className="text-white px-5 py-2 rounded border border-white hover:bg-[#1dbf73] hover:border-[#1dbf73]">
                  Join
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr className="w-full border-t border-[#ebe9e9]" />
          <div className="w-[1400px] py-2 flex justify-between text-gray-500 font-light font-montserrat text-sm">
            {[
              "Graphics & Design",
              "Video & Animation",
              "Writing & Translation",
              "AI Services",
              "Digital Marketing",
              "Music & Audio",
              "Programming & Tech",
              "Business",
              "Lifestyle",
            ].map((item, idx) => (
              <Link key={idx} to="/" className="hover:underline">
                {item}
              </Link>
            ))}
          </div>
          <hr className="w-full border-t border-[#ebe9e9]" />
        </>
      )}
    </div>
  );
}

export default Navbar;
