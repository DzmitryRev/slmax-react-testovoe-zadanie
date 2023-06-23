import { API_URL } from "../../../../shared/api/api";
import { Product } from "../../types/Product";

export async function getProduct(id: string) {
  const res = await fetch(`${API_URL}/products/${id}`, {
    next: { revalidate: 60 },
  });
  const product: Product = await res.json();
  return product;
}
