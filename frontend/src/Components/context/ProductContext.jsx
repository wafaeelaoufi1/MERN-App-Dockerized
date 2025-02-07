import { createContext, useState, useEffect } from "react";

// Create the context
export const ProductContext = createContext();

// Provider component
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Create a new product
  const createProduct = async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();

      // Update state
      setProducts((prev) => [...prev, data.data]);
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      console.error("Error creating product:", error);
      return { success: false, message: "Failed to create product" };
    }
  };

  // Delete a product
  const deleteProduct = async (pid) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${pid}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!data.success) return { success: false, message: data.message };

      // Remove product from state
      setProducts((prev) => prev.filter((product) => product._id !== pid));
      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      console.error("Error deleting product:", error);
      return { success: false, message: "Failed to delete product" };
    }
  };

  // Update a product
  const updateProduct = async (pid, updatedProduct) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${pid}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });
      const data = await res.json();

      if (!data.success) return { success: false, message: data.message };

      // Update product in state
      setProducts((prev) =>
        prev.map((product) => (product._id === pid ? data.data : product))
      );

      return { success: true, message: "Product updated successfully" };
    } catch (error) {
      console.error("Error updating product:", error);
      return { success: false, message: "Failed to update product" };
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        fetchProducts,
        createProduct,
        deleteProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
