import formatCurrency from "../util";
import Button from "./Button";

export default function Cart({
  cartItem,
  handleRemoveItem,
  handleRemoveCartList,
}) {
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
        <ul>
          {cartItem.map((item) => (
            <li key={item._id}>
              <div className="cart-item_img">
                <div className='cart-item_item'>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </div>
                <div className='cart-item_size'>
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
      </div>
      {cartItem.length > 0 && (
        <div className="cart-proceed">
          <p>
            Total :{" "}
            {formatCurrency(
              cartItem.reduce((acc, cur) => acc + cur.price * cur.count, 0)
            )}
          </p>
          <Button btnClass={"cart-proceed_btn button-add"}>Proceed</Button>
        </div>
      )}
    </div>
  );
}
