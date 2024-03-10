import IProduct from "@/interfaces/IProduct";

export const productsService = {
  async get(): Promise<IProduct[]> {
    const r = await fetch("http://localhost:3000/products");
    const data = await r.json();
    return data;
  },
};
