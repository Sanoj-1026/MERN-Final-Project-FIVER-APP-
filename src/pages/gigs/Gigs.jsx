import React, { useRef, useState } from "react";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/Gigcard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[1400px] py-8 flex flex-col gap-4">
        <span className="uppercase text-sm font-light text-[#555]">
          Liverr &gt; Graphics & Design &gt;
        </span>
        <h1 className="text-2xl font-semibold">AI Artists</h1>
        <p className="text-[#999] font-light">
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>

        {/* MENU */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3 text-[#555] font-light">
            <span>Budget</span>
            <input
              ref={minRef}
              type="number"
              placeholder="min"
              className="px-2 py-1 border border-gray-300 rounded outline-none placeholder:text-[#999]"
            />
            <input
              ref={maxRef}
              type="number"
              placeholder="max"
              className="px-2 py-1 border border-gray-300 rounded outline-none placeholder:text-[#999]"
            />
            <button
              onClick={apply}
              className="px-3 py-1 bg-[#1dbf73] text-white font-medium rounded hover:opacity-90"
            >
              Apply
            </button>
          </div>

          <div className="relative flex items-center gap-2">
            <span className="text-[#555] font-light">Sort by</span>
            <span className="font-medium">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./img/down.png"
              alt=""
              className="w-[15px] cursor-pointer"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="absolute top-[30px] right-0 z-10 flex flex-col gap-4 bg-white border border-gray-300 p-5 rounded text-[#555] shadow">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")} className="cursor-pointer">
                    Newest
                  </span>
                ) : (
                  <span onClick={() => reSort("sales")} className="cursor-pointer">
                    Best Selling
                  </span>
                )}
                <span onClick={() => reSort("sales")} className="cursor-pointer">
                  Popular
                </span>
              </div>
            )}
          </div>
        </div>

        {/* GIG CARDS */}
        <div className="flex justify-between flex-wrap gap-y-8">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
