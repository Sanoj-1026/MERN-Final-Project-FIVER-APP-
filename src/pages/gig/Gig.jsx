import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Gig() {
  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-7 flex gap-12">
        {/* LEFT */}
        <div className="flex-2 flex flex-col gap-5">
          <span className="font-light uppercase text-xs text-gray-600">Liverr &gt; Graphics & Design &gt;</span>
          <h1>I will create ai generated art for you</h1>

          <div className="flex items-center gap-2.5">
            <img className="w-8 h-8 rounded-full object-cover" src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <span className="text-sm font-medium">Anna Bell</span>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <img key={i} src="/img/star.png" alt="" className="w-3.5 h-3.5" />
              ))}
              <span className="text-sm font-bold text-yellow-400">5</span>
            </div>
          </div>

          <Slider slidesToShow={1} arrowsScroll={1} className="bg-gray-100">
  <img className="max-h-[500px] object-contain" src="/assets/img1.jpeg" alt="AI Art 1" />
  <img className="max-h-[500px] object-contain" src="/assets/img2.jpeg" alt="AI Art 2" />
  <img className="max-h-[500px] object-contain" src="/assets/img3.jpeg" alt="AI Art 3" />
</Slider>

          <h2 className="font-normal">About This Gig</h2>
          <p className="font-light leading-6 text-gray-600">[...]</p>

          <div className="mt-12 flex flex-col gap-5">
            <h2>About The Seller</h2>
            <div className="flex items-center gap-5">
              <img className="w-24 h-24 rounded-full object-cover" src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className="flex flex-col gap-2.5">
                <span>Anna Bell</span>
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src="/img/star.png" alt="" className="w-3.5 h-3.5" />
                  ))}
                  <span className="text-sm font-bold text-yellow-400">5</span>
                </div>
                <button className="bg-white border border-gray-400 rounded px-4 py-2">Contact Me</button>
              </div>
            </div>

            <div className="border border-gray-300 rounded p-5 mt-5">
              <div className="flex justify-between flex-wrap">
                <div className="w-72 flex flex-col gap-2.5 mb-5">
                  <span className="font-light">From</span>
                  <span>USA</span>
                </div>
                <div className="w-72 flex flex-col gap-2.5 mb-5">
                  <span className="font-light">Member since</span>
                  <span>Aug 2022</span>
                </div>
                <div className="w-72 flex flex-col gap-2.5 mb-5">
                  <span className="font-light">Avg. response time</span>
                  <span>4 hours</span>
                </div>
                <div className="w-72 flex flex-col gap-2.5 mb-5">
                  <span className="font-light">Last delivery</span>
                  <span>1 day</span>
                </div>
                <div className="w-72 flex flex-col gap-2.5 mb-5">
                  <span className="font-light">Languages</span>
                  <span>English</span>
                </div>
              </div>
              <hr className="border-gray-300 mb-5" />
              <p>My name is Anna [...] incredibly detailed result.</p>
            </div>
          </div>

          {/* Reviews (only structure example) */}
          <div className="mt-12">
            <h2>Reviews</h2>
            {/* Map over reviews */}
            <div className="flex flex-col gap-5 my-5">
              <div className="flex items-center gap-4">
                <img className="w-12 h-12 rounded-full" src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <div>
                  <span>Garner David</span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <img className="w-5" src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png" alt="" />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src="/img/star.png" alt="" className="w-3.5 h-3.5" />
                ))}
                <span className="text-sm font-bold text-yellow-400">5</span>
              </div>
              <p>[review text]</p>
              <div className="flex items-center gap-2.5">
                <span>Helpful?</span>
                <img className="w-3.5" src="/img/like.png" alt="" />
                <span>Yes</span>
                <img className="w-3.5" src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="border-gray-300 my-12" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 border border-gray-300 rounded p-5 flex flex-col gap-5 max-h-[500px] sticky top-36">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">1 AI generated image</h3>
            <h2 className="font-light">$ 59.99</h2>
          </div>
          <p className="text-gray-500 my-2">I will create a unique high quality AI generated image based on a description that you give me</p>
          <div className="flex justify-between text-sm">
            <div className="flex items-center gap-2">
              <img className="w-5" src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-5" src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 text-gray-500 font-light mb-1">
              <img className="w-3.5" src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 font-light mb-1">
              <img className="w-3.5" src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 font-light mb-1">
              <img className="w-3.5" src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 font-light mb-1">
              <img className="w-3.5" src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button className="bg-green-500 text-white font-medium text-lg py-2 cursor-pointer">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
