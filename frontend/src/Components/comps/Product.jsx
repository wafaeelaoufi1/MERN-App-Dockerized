import { useState, useContext } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { ProductContext } from "../context/ProductContext";

function Product({ product }) {
  const { updateProduct, deleteProduct } = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  // Handle input change in the update form
  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  // Handle update
  const handleUpdate = async () => {
    await updateProduct(product._id, updatedProduct);
    setShowModal(false); // Close the modal
  };

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${product.price} </p>
          <button
            className="btn mx-1"
            style={{ backgroundColor: "#9d5ec0", color: "#FFFF" }}
            onClick={() => setShowModal(true)} // Show modal when clicking edit
          >
            <FaPenToSquare />
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteProduct(product._id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={updatedProduct.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={updatedProduct.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="image"
                    value={updatedProduct.image}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleUpdate}
                  style={{ backgroundColor: "#9d5ec0", color: "#FFFF" }}
                >
                  Update Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default Product;
