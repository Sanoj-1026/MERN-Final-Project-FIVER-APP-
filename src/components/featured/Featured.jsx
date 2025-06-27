import React from "react";

function Featured() {
  return (
    <div className="h-[600px] flex justify-center bg-[#013914] text-white">
      <div className="w-[1400px] flex items-center px-4">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-[30px] flex-1">
          <h1 className="text-[50px] leading-tight">
            Find the perfect <span className="italic font-light">freelance</span> services for your business
          </h1>

          {/* SEARCH BOX */}
          <div className="bg-white rounded-[5px] flex items-center justify-between overflow-hidden w-full max-w-[600px]">
            <div className="flex items-center gap-2 px-3 py-2">
              <img src="./img/search.png" alt="search icon" className="w-5 h-5" />
              <input
                type="text"
                placeholder='Try "building mobile app"'
                className="outline-none border-none text-black placeholder-gray-500"
              />
            </div>
            <button className="w-[120px] h-[50px] bg-[#1dbf73] text-white cursor-pointer">
              Search
            </button>
          </div>

          {/* POPULAR TAGS */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="whitespace-nowrap">Popular:</span>
            <button className="text-white border border-white px-3 py-1 rounded-full text-sm">Web Design</button>
            <button className="text-white border border-white px-3 py-1 rounded-full text-sm">WordPress</button>
            <button className="text-white border border-white px-3 py-1 rounded-full text-sm">Logo Design</button>
            <button className="text-white border border-white px-3 py-1 rounded-full text-sm">AI Services</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 h-full hidden md:block">
          <img src="./img/man.png" alt="freelancer" className="h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
