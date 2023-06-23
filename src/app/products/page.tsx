import React from "react";
import { getProducts } from "@/modules/product/api/requests/getProducts";
import { ProductsList } from "@/modules/product";

async function Products() {
  const products = await getProducts();
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

export default Products;
