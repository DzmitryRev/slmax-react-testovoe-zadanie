import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductListItemProps {
  id: number;
  image: string;
  title: string;
  price: string;
}

export function ProductListItem({ id, image, title, price }: ProductListItemProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="w-[240px] border border-gray-300 p-2 rounded-[5px] flex flex-col justify-between"
    >
      <div className=" h-[240px] flex justify-center items-center">
        <Image src={image} alt={title} width={120} height={280} className={"object-cover"} />
      </div>
      <h2 className="text-[12px] text-center">{title}</h2>
      <p>{price} $</p>
    </Link>
  );
}
