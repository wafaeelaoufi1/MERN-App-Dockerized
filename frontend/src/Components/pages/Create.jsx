import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

function Create() {
  const { createProduct } = useContext(ProductContext);
  const navigate = useNavigate();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value,
    };

    const result = await createProduct(product);
    if (result.success) {
      alert("Product added!");
    } else {
      alert(result.message);
    }
    navigate("/");
  };

  return (
    <div className="container my-5">
      <h1>Add a new product</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Product Name
        </label>
        <input type="text" className="form-control" ref={nameRef} id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Product Price
        </label>
        <input
          type="number"
          className="form-control"
          ref={priceRef}
          id="price"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Product Image URL
        </label>
        <input type="text" className="form-control" ref={imageRef} id="image" />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleSubmit}
        style={{ backgroundColor: "#9d5ec0", color: "#FFFF" }}
      >
        Add Product
      </button>
    </div>
  );
}

export default Create;
