import React, { useContext, useEffect } from "react";
import Product from "../comps/Product";
import { ImSad } from "react-icons/im";
import { ProductContext } from "../context/ProductContext";
function Home() {
  const { products, fetchProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const displayProducts = () => {
    if (products.length > 0) {
      return products.map((product, key) => {
        return <Product product={product} key={key} />;
      });
    }
    console.log(products);
    return (
      <div className="container">
        <p className="text-center">
          <ImSad />
          There is no product,{" "}
          <a href="/create" style={{ color: "#9d5ec0" }}>
            add new Product!
          </a>
        </p>
      </div>
    );
  };

  return (
    <div className="container my-5">
      <h1 className="mb-5 text-center" style={{ color: "#9d5ec0" }}>
        Current products
      </h1>
      <div className="row">{displayProducts()}</div>
    </div>
  );
}

export default Home;
