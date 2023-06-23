import React from "react";
import { Product } from "@/modules/product/types/Product";
import { ProductListItem } from "../components/ProductListItem";

interface ProductsListProps {
  products: Product[];
}

export function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5">
      {products.map((item) => {
        return (
          <ProductListItem
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </div>
  );
}
