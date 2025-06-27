import React from "react";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-[30px] flex gap-[50px]">
        {/* LEFT */}
        <div className="flex-2 flex flex-col gap-5">
          <span className="uppercase font-light text-sm text-[#555]">
            Liverr &gt; Graphics & Design &gt;
          </span>
          <h1 className="text-2xl font-semibold">
            I will create ai generated art for you
          </h1>
          <div className="flex items-center gap-2.5">
            <img
              className="w-8 h-8 rounded-full object-cover"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="text-sm font-medium">Anna Bell</span>
            <div className="flex items-center gap-1">
              {Array(5).fill(0).map((_, i) => (
                <img key={i} src="/img/star.png" alt="" className="w-[14px] h-[14px]" />
              ))}
              <span className="text-sm font-bold text-yellow-400">5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="bg-[#F5F5F5]">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="max-h-[500px] object-contain"
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="max-h-[500px] object-contain"
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="max-h-[500px] object-contain"
            />
          </Slider>
          <h2 className="text-xl font-medium">About This Gig</h2>
          <p className="font-light leading-[25px] text-[#555]">
            I use an AI program to create images based on text prompts...
          </p>

          {/* SELLER */}
          <div className="mt-[50px] flex flex-col gap-5">
            <h2 className="text-xl font-medium">About The Seller</h2>
            <div className="flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[100px] h-[100px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-2.5">
                <span className="font-medium">Anna Bell</span>
                <div className="flex items-center gap-1">
                  {Array(5).fill(0).map((_, i) => (
                    <img key={i} src="/img/star.png" alt="" className="w-[14px] h-[14px]" />
                  ))}
                  <span className="text-sm font-bold text-yellow-400">5</span>
                </div>
                <button className="bg-white border border-gray-400 rounded px-4 py-2 text-sm">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="border border-gray-300 rounded p-5 mt-5">
              <div className="flex flex-wrap justify-between">
                {[
                  { title: "From", desc: "USA" },
                  { title: "Member since", desc: "Aug 2022" },
                  { title: "Avg. response time", desc: "4 hours" },
                  { title: "Last delivery", desc: "1 day" },
                  { title: "Languages", desc: "English" },
                ].map((item, i) => (
                  <div key={i} className="w-[300px] flex flex-col gap-2 mb-5">
                    <span className="font-light">{item.title}</span>
                    <span className="font-medium">{item.desc}</span>
                  </div>
                ))}
              </div>
              <hr className="border-t border-gray-300 mb-5" />
              <p className="text-sm text-gray-700">
                My name is Anna, I enjoy creating AI generated art in my spare time...
              </p>
            </div>
          </div>

          {/* REVIEWS */}
          <div className="mt-[50px]">
            <h2 className="text-xl font-medium mb-4">Reviews</h2>
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                <div className="flex flex-col gap-5 my-5">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-[50px] h-[50px] rounded-full"
                      src={`https://images.pexels.com/photos/${i === 0 ? '839586' : i === 1 ? '4124367' : '842980'}/pexels-photo.jpeg?auto=compress&cs=tinysrgb&w=1600`}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {i === 0 ? "Garner David" : i === 1 ? "Sidney Owen" : "Lyle Giles"}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <img
                          className="w-5"
                          src={`https://fiverr-dev-res.cloudinary.com/general_assets/flags/${i === 1 ? '1f1e9-1f1ea' : '1f1fa-1f1f8'}.png`}
                          alt=""
                        />
                        <span>{i === 1 ? "Germany" : "United States"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {Array(5).fill(0).map((_, i) => (
                      <img key={i} src="/img/star.png" className="w-[14px] h-[14px]" />
                    ))}
                    <span className="text-sm font-bold text-yellow-400">5</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {i === 0
                      ? "Communication was amazing... absolutely recommend this gig."
                      : i === 1
                      ? "Professionalism and ease of working with the designer..."
                      : "Amazing work! Delivered above and beyond expectations."}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Helpful?</span>
                    <img src="/img/like.png" className="w-[14px]" />
                    <span>Yes</span>
                    <img src="/img/dislike.png" className="w-[14px]" />
                    <span>No</span>
                  </div>
                </div>
                {i < 2 && <hr className="border-t border-gray-300 my-6" />}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 border border-gray-300 p-5 rounded flex flex-col gap-5 max-h-[500px] sticky top-[150px]">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">1 AI generated image</h3>
            <h2 className="font-light text-xl">$ 59.99</h2>
          </div>
          <p className="text-sm text-gray-500">
            I will create a unique high quality AI generated image...
          </p>
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <img src="/img/clock.png" className="w-5" />
              <span>2 Days Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/img/recycle.png" className="w-5" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            {["Prompt writing", "Artwork delivery", "Image upscaling", "Additional design"].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <img src="/img/greencheck.png" className="w-[14px]" />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <button className="bg-[#1dbf73] text-white text-lg font-medium py-2 rounded">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
