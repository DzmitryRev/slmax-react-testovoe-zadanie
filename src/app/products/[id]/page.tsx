import React from "react";
import Image from "next/image";
import { getProduct } from "@/modules/product/api/requests/getProduct";
import { API_URL } from "@/shared/api";
import { Product } from "@/modules/product";

interface ProductProps {
  params: {
    id: string;
  };
}

async function Product({ params: { id } }: ProductProps) {
  const product = await getProduct(id);

  return (
    <div className="flex justify-center">
      <div>
        <div className="flex justify-center items-center mb-5">
          <Image
            src={product.image}
            alt={product.description}
            width={300}
            height={280}
            className={"object-cover"}
          />
        </div>
        <div className="max-w-[600px]">
          <h2 className="text-[24px] text-center mb-2">{product.title}</h2>
          <p className="mb-3">{product.description}</p>
          <p className="text-[24px] font-bold">{product.price} $</p>
        </div>
      </div>
    </div>
  );
}

export default Product;

export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/products`);
  const products: Product[] = await res.json();
  return products.map((item) => ({
    id: item.id + "",
  }));
}
