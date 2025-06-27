import React from "react";

function ProjectCard({ card }) {
  return (
    <div className="w-[300px] h-[300px] rounded overflow-hidden cursor-pointer border border-[#e1e1e1]">
      <img src={card.img} alt="" className="w-full h-[70%] object-cover" />
      <div className="flex items-center gap-5 p-4">
        <img
          src={card.pp}
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="text-sm font-medium">{card.cat}</h2>
          <span className="text-sm font-light">{card.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
