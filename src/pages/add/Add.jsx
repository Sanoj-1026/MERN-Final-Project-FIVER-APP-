import React from "react";

const Add = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[1400px] py-[50px]">
        <h1 className="text-gray-500 font-light mb-8 w-max text-2xl">Add New Gig</h1>
        <div className="flex justify-between gap-[100px]">
          {/* Info Section */}
          <div className="flex-1 flex flex-col gap-2.5 justify-between">
            <label className="text-gray-500 text-lg">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              className="p-5 border border-gray-300 rounded"
            />
            <label className="text-gray-500 text-lg">Category</label>
            <select name="cats" id="cats" className="p-5 border border-gray-300 rounded">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label className="text-gray-500 text-lg">Cover Image</label>
            <input type="file" className="p-2" />
            <label className="text-gray-500 text-lg">Upload Images</label>
            <input type="file" multiple className="p-2" />
            <label className="text-gray-500 text-lg">Description</label>
            <textarea
              placeholder="Brief descriptions to introduce your service to customers"
              rows="16"
              className="p-5 border border-gray-300 rounded"
            ></textarea>
            <button className="bg-[#1dbf73] text-white font-medium text-lg py-5 px-8 mt-4 rounded">
              Create
            </button>
          </div>

          {/* Details Section */}
          <div className="flex-1 flex flex-col gap-2.5 justify-between">
            <label className="text-gray-500 text-lg">Service Title</label>
            <input
              type="text"
              placeholder="e.g. One-page web design"
              className="p-5 border border-gray-300 rounded"
            />
            <label className="text-gray-500 text-lg">Short Description</label>
            <textarea
              placeholder="Short description of your service"
              rows="10"
              className="p-5 border border-gray-300 rounded"
            ></textarea>
            <label className="text-gray-500 text-lg">Delivery Time (e.g. 3 days)</label>
            <input type="number" className="p-5 border border-gray-300 rounded" />
            <label className="text-gray-500 text-lg">Revision Number</label>
            <input type="number" className="p-5 border border-gray-300 rounded" />
            <label className="text-gray-500 text-lg">Add Features</label>
            <input type="text" placeholder="e.g. page design" className="p-5 border border-gray-300 rounded" />
            <input type="text" placeholder="e.g. file uploading" className="p-5 border border-gray-300 rounded" />
            <input type="text" placeholder="e.g. setting up a domain" className="p-5 border border-gray-300 rounded" />
            <input type="text" placeholder="e.g. hosting" className="p-5 border border-gray-300 rounded" />
            <label className="text-gray-500 text-lg">Price</label>
            <input type="number" className="p-5 border border-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
