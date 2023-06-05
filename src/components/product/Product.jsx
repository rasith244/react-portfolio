import React from "react";
import "./product.css";

const Product = (props) => {
  const { img, link } = props;

  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} alt="" target="_blank" rel="noreferror">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
