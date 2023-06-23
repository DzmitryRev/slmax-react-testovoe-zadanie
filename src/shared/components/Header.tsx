import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-300">
      <div className="max-w-[1180px] h-[70px] mx-auto px-2 flex justify-between items-center">
        <p className="text-[28px] font-bold cursor-default">Revchenko</p>
        <nav className="font-medium">
          <Link href="/">Home</Link>
          <Link href="/products" className="ml-5">
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}
