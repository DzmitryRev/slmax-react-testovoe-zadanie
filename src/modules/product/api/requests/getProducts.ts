import { API_URL } from "../../../../shared/api/api";
import { Product } from "../../types/Product";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`, {
    next: { revalidate: 60 },
  });
  const products: Product[] = await res.json();
  return products;
}
