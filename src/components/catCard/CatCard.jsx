import React from "react";
import { Link } from "react-router-dom";

function CatCard({ card }) {
  return (
    <Link to="/gigs?cat=design">
      <div className="w-[252px] h-[344px] relative rounded-[5px] cursor-pointer text-white overflow-hidden">
        <img
          src={card.img}
          alt=""
          className="w-full h-full object-cover"
        />
        <span className="absolute top-[15px] left-[15px] font-light">
          {card.desc}
        </span>
        <span className="absolute top-[40px] left-[15px] text-[24px] font-medium">
          {card.title}
        </span>
      </div>
    </Link>
  );
}

export default CatCard;
