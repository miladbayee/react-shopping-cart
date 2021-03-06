import Button from "./Button";
import formatCurrency from "../util";
import { useState } from "react";
import Fade from "react-reveal/Fade";


export default function ProductItem({
  key,
  imgSrc,
  price,
  title,
  imgAlt,
  link,
  shoesSize,
  handleAddToCart,
  handleGetShoesSize,
  handleOpenModal,
}) {
  const [selectSize, setSelectSize] = useState("");

  //select shoes size
  const onValueChange = (e) => {
    setSelectSize(e.target.value);
  };

  return (
    <Fade bottom cascade>
      <li key={key}>
        <div className="product-img">
          <a href={"#" + link} onClick={handleOpenModal}>
            <img src={imgSrc} alt={imgAlt} />
            <p>{title}</p>
          </a>
        </div>
        <div className={"product-buy-section"}>
          <div className="product-size">
            <span>size :</span>
            {shoesSize.map((size) => (
              <div
                className="radio"
                onChange={onValueChange}
                onClick={() => {
                  handleGetShoesSize(size, key);
                }}
              >
                <input
                  type="radio"
                  value={size}
                  checked={selectSize === size}
                />
                {size}
              </div>
            ))}
          </div>
          <div className="product-price">
            <p>{formatCurrency(price)}</p>
            <Button btnClass="button-add" handleOnClick={handleAddToCart}>
              Add to cart
            </Button>
          </div>
        </div>
      </li>
    </Fade>
  );
}
