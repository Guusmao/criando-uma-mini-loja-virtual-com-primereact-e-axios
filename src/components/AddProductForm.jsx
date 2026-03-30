import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function AddProductForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      price,
      image,
      description: "Produto adicionado manualmente",
    };

    onAdd(newProduct);

    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="field mb-3">
        <InputText
          placeholder="Nome do produto"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="field mb-3">
        <InputText
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full"
        />
      </div>

      <div className="field mb-3">
        <InputText
          placeholder="URL da imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full"
        />
      </div>

      <Button label="Adicionar Produto" />
    </form>
  );
}