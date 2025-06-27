import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1200px] my-12">
        <span className="text-[13px] text-gray-600 font-light">
          <Link to="/messages">Messages</Link> &gt; John Doe &gt;
        </span>

        <div className="my-8 p-12 flex flex-col gap-5 h-[500px] overflow-scroll">
          {[...Array(16)].map((_, i) => {
            const isOwner = i % 2 !== 0;
            return (
              <div
                key={i}
                className={`flex gap-5 text-lg max-w-[600px] ${
                  isOwner ? "flex-row-reverse self-end" : ""
                }`}
              >
                <img
                  src={
                    isOwner
                      ? "https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      : "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  }
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p
                  className={`max-w-[500px] p-5 font-light ${
                    isOwner
                      ? "bg-blue-700 text-white rounded-[20px_0px_20px_20px]"
                      : "bg-[#f4f1f1] text-gray-500 rounded-[0px_20px_20px_20px]"
                  }`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  iure mollitia perspiciatis officiis voluptate? Sequi quae
                  officia possimus, iusto labore alias mollitia eveniet nemo
                  placeat laboriosam nisi animi! Error, tenetur!
                </p>
              </div>
            );
          })}
        </div>

        <hr className="border border-gray-200 mb-5" />

        <div className="flex items-center justify-between">
          <textarea
            placeholder="write a message"
            className="w-4/5 h-[100px] p-2 border border-gray-300 rounded-lg"
          ></textarea>
          <button className="bg-emerald-500 px-5 py-5 text-white font-medium rounded-lg w-[100px]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
