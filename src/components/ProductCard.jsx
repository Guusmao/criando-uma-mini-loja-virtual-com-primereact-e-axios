import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function ProductCard({ product }) {
  const footer = (
    <Button label="Comprar" icon="pi pi-shopping-cart" />
  );

  return (
    <div className="col-12 md:col-4 lg:col-3">
      <Card
        title={product.title}
        subTitle={`R$ ${product.price}`}
        footer={footer}
        header={
          <img
            alt={product.title}
            src={product.image}
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
        }
      >
        <p style={{ fontSize: "14px" }}>
          {product.description.substring(0, 80)}...
        </p>
      </Card>
    </div>
  );
}