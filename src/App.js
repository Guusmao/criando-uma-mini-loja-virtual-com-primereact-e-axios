import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

function App() {
  const [newProducts, setNewProducts] = useState([]);

  const handleAddProduct = (product) => {
    setNewProducts((prev) => [...prev, product]);
  };

  return (
    <div className="p-4">
      <h1 className="text-center">🛒 Loja Virtual</h1>

      <AddProductForm onAdd={handleAddProduct} />

      <ProductList newProducts={newProducts} />
    </div>
  );
}

export default App;