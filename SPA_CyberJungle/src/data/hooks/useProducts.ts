"use client";
import { Product } from "@/core";
import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts(): Promise<Product[]> {
    const response = await fetch("http://localhost:4000/api/products");
    const products = await response.json();
    return products;
  }

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return {
    products,
  };
}
