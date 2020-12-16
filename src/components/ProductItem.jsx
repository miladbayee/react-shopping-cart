import React from "react";
import Button from "./Button";
import formatCurrency from "../util";

export default function ProductItem({
  key,
  imgSrc,
  price, 
  title,
  imgAlt,
  link,
  handleAddToCart,
}) 

{
  return (
    <li key={key}>
      <div className="product-img">
        <a href={"#" + link}>
          <img src={imgSrc} alt={imgAlt} />
          <p>{title}</p>
        </a>
      </div>
      <div className="product-price">
        <p>{formatCurrency(price)}</p>
        <Button  btnClass="button-add" handleOnClick={handleAddToCart}>Add to cart</Button>
      </div>
    </li> 
  );
}
