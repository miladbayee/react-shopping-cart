import Filter from "./Filter";
import ProductItem from "./ProductItem";

export default function Products({
  products,
  size,
  sort,
  handleSizeFilter,
  handleSortFilter,
  isFilterSize,
  handleAddToCart,
}) {
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
              link={"#" + product._id}
              imgSrc={product.image}
              price={product.price}
              title={product.title}
              imgAlt={product.title}
              shoesSize={product.availableSize}
              handleAddToCart={() => handleAddToCart(product)}
            />
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "1.5rem", marginLeft: "2rem" }}>
          Not find products
        </p>
      )}
    </div>
  );
}
