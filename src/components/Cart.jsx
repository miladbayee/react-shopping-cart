import { useState } from "react";
import formatCurrency from "../util";
import Button from "./Button";
import Fade from "react-reveal/Fade";

export default function Cart({
  createOrder,
  cartItem,
  handleRemoveItem,
  handleRemoveCartList,
}) {
  const [showForm, setShowForm] = useState(false);
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputAddressValue, setInputAddressValue] = useState("");

  const handleShowForm = () => {
    setShowForm(true);
  };
  const handleInputName = (e) => {
    setInputNameValue(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmailValue(e.target.value);
  };

  const handleInputAddress = (e) => {
    setInputAddressValue(e.target.value);
  };
  const handleProceesFormSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: inputNameValue,
      email: inputEmailValue,
      address: inputAddressValue,
    };
    createOrder(order);
  };

  return (
    <div className={"cart cart-contain"}>
      <div className={"cart-count"}>
        {cartItem.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <p>You have {cartItem.length} in cart</p>
        )}
        {cartItem.length > 0 && (
          <Button
            btnClass={"remove-btn"}
            handleOnClick={() => handleRemoveCartList()}
          >
            <img src="./images/icons/remove-black.png" alt="remove icon" />
          </Button>
        )}
      </div>
      <div className="cart-item">
        <Fade left cascade>
          <ul>
            {cartItem.map((item) => (
              <li key={item._id}>
                <div className="cart-item_img">
                  <div className="cart-item_item">
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                  </div>
                  <div className="cart-item_size">
                    <p>size : {item.size}</p>
                  </div>
                </div>
                <div className="cart-item_price">
                  <p>
                    {item.count} x {formatCurrency(item.price)}
                  </p>
                  <Button
                    btnClass="cart-item_btn"
                    handleOnClick={() => handleRemoveItem(item)}
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Fade>
      </div>
      {cartItem.length > 0 && (
        <div className="cart-proceed">
          <p>
            Total :{" "}
            {formatCurrency(
              cartItem.reduce((acc, cur) => acc + cur.price * cur.count, 0)
            )}
          </p>
          <Button
            btnClass={"cart-proceed_btn button-add"}
            handleOnClick={() => {
              handleShowForm();
            }}
          >
            Proceed
          </Button>
        </div>
      )}
      {showForm && (
        <Fade right>
        <div className="process">
          <form className="process-form" onSubmit={handleProceesFormSubmit}>
            <ul>
              <li>
                <label htmlFor="">Name</label>
                <input
                  name="name"
                  type="text"
                  value={inputNameValue}
                  onChange={handleInputName}
                  placeholder="insert your name"
                />
              </li>
              <li>
                <label htmlFor="">Email</label>
                <input
                  name="mail"
                  type="mail"
                  value={inputEmailValue}
                  onChange={handleInputEmail}
                  placeholder="insert your mail"
                />
              </li>
              <li>
                <label htmlFor="">Address</label>
                <input
                  name="address"
                  type="text"
                  value={inputAddressValue}
                  onChange={handleInputAddress}
                  placeholder="insert your address"
                />
              </li>
              <li>
                <Button btnClass="button-add procees-btn">Ckeckout</Button>
              </li>
            </ul>
          </form>
        </div>
        </Fade>
      
      )}
    </div>
  );
}
