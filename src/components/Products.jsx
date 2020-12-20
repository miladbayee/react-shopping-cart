import { useState } from "react";
import Filter from "./Filter";
import ProductItem from "./ProductItem";
import Zoom from "react-reveal/Zoom";
import Modal from "react-modal";
import formatCurrency from "../util";
import Button from "./Button";

export default function Products({
  products,
  size,
  sort,
  handleSizeFilter,
  handleSortFilter,
  isFilterSize,
  handleAddToCart,
  handleGetShoesSize,
  shoesSelectSize,
}) {
  const [openModal, setOpenModal] = useState(null);

  const handleOpenModal = (product) => {
    setOpenModal(product);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <div className={"products"}>
      <Filter
        products={products}
        size={size}
        sort={sort}
        handleSizeFilter={handleSizeFilter}
        handleSortFilter={handleSortFilter}
      />
      {isFilterSize ? (
        <ul>
          {products.map((product) => (
            <ProductItem
              key={product._id}
              link={product._id}
              imgSrc={product.image}
              price={product.price}
              title={product.title}
              imgAlt={product.title}
              shoesSize={product.availableSize}
              handleGetShoesSize={handleGetShoesSize}
              handleAddToCart={() => handleAddToCart(product, shoesSelectSize)}
              handleOpenModal={() => handleOpenModal(product)}
              openModal={openModal}
            />
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "1.5rem", marginLeft: "2rem" }}>
          Not find products
        </p>
      )}
      {openModal && (
        <Modal isOpen={true} onRequestClose={handleCloseModal}>
          <Zoom>
            <button className="close-modal" onClick={handleCloseModal}>
              x
            </button>
            <div className="modal-container">
              <ul>
                <li>
                  <div className="modal-image">
                    <img src={openModal.image} alt={openModal.title} />
                  </div>
                  <div className="modal-product-data">
                    <h3>{openModal.title}</h3>
                    <p>{openModal.description}</p>
                    <p>
                      <span> Available Size :</span>{" "}
                      <span>
                        {openModal.availableSize.map((size) => (
                          <button className="size-btn">{size}</button>
                        ))}
                      </span>
                    </p>
                    <div className="modal-price">
                      <p>{formatCurrency(openModal.price)}</p>
                      <Button
                        btnClass="button-add"
                        handleOnClick={() => handleAddToCart(openModal)}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
}
