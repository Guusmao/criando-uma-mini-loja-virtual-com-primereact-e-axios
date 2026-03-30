import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function ProductList({ newProducts }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid">
      {[...products, ...newProducts].map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}