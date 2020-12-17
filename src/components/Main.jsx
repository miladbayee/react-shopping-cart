import { useEffect, useState } from "react";
import Cart from "./Cart";
import Products from "./Products";
import data from "../data.json";

export default function Main() {
  const getCartItemFromLS = localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];
  const [products, setProducts] = useState(data.products);
  const [isFilterSize, setIsFilterSize] = useState(true);
  const [cartItem, setCartItem] = useState([]);
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("");
  const [shoesSelectSize, setShoesSelectSize] = useState("");

  const handleGetShoesSize = (size) => {
    setShoesSelectSize(size);
  };

  //get cart item from localStorage
  useEffect(() => {
    setCartItem(
      localStorage.getItem("cartItem")
        ? JSON.parse(localStorage.getItem("cartItem"))
        : []
    );
  }, []);

  // filter shoes size
  const handleSizeFilter = (e) => {
    const getSize = e.target.value;
    if (getSize === "All") {
      setSize("");
      setProducts(data.products);
      setIsFilterSize(true);
      setSort("Latest");
    } else {
      const filterProducts = data.products.filter(
        (product) => product.availableSize.indexOf(getSize) >= 0
      );
      if (filterProducts.length === 0) {
        setIsFilterSize(false);
      } else {
        setIsFilterSize(true);
      }
      setProducts(filterProducts);
      setSize(getSize);
      setSort("Latest");
    }
  };

  // filter sort price
  const handleSortFilter = (e) => {
    const getSort = e.target.value;
    const sortProductWithPrice = products
      .slice()
      .sort((a, b) =>
        getSort === "Lowest"
          ? a.price < b.price
            ? -1
            : 1
          : getSort === "Highest"
          ? a.price > a.price
            ? 1
            : -1
          : a._id > b._id
          ? 1
          : -1
      );
    setSort(getSort);
    setProducts(sortProductWithPrice);
  };

  //add product item to cart
  const handleAddToCart = (product, size) => {
    const getCartItem = [...cartItem];
    let isAlready = false;
    getCartItem.forEach((item) => {
      if (item._id === product._id && item.size === size) {
        item.count++;
        isAlready = true;
      }
    });
    if (!isAlready) {
      if (size === "") {
        return;
      } else {
        getCartItem.push({ ...product, count: 1, size: size });
      }
    }
    setCartItem(getCartItem);
    setShoesSelectSize("");
    localStorage.setItem("cartItem", JSON.stringify(getCartItem));
  };

  //remove item from cartItem
  const handleRemoveItem = (product) => {
    const getCartItem = [...cartItem];
    const removeFromCart = getCartItem.filter(
      (item) => item._id !== product._id || item.size !== product.size
    );
    setCartItem(removeFromCart);
    localStorage.setItem("cartItem", JSON.stringify(removeFromCart));
  };

  //clear cart item
  const handleRemoveCartList = () => {
    setCartItem([]);
    localStorage.setItem("cartItem", JSON.stringify([]));
  };

  return (
    <main>
      <div className="content">
        <Products
          products={products}
          size={size}
          sort={sort}
          handleSizeFilter={handleSizeFilter}
          handleSortFilter={handleSortFilter}
          handleAddToCart={handleAddToCart}
          isFilterSize={isFilterSize}
          handleGetShoesSize={handleGetShoesSize}
          shoesSelectSize={shoesSelectSize}
        />
        <Cart
          cartItem={cartItem}
          handleRemoveItem={handleRemoveItem}
          handleRemoveCartList={handleRemoveCartList}
        />
      </div>
    </main>
  );
}
