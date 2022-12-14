import React from "react";
import "./Banner.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="img-gradient">
        <img src={image} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5  top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable, <br></br>
          Price For Car <br></br>
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-5  top-1/2">
        <p className="text-xl font-bold text-white">
          This is a car servicing shop. Here every car problems can be solved by
          our experts.
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5  top-3/4">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
