"use client";
import useProducts from "@/data/hooks/useProducts";

export default function PageProduct(props: any) {
  const { products } = useProducts();
  const id = +props.params.id;
  const product = products.find((p) => p.id === id);
  return product ? <div>{product?.name}</div> : <div>Product not found</div>;
}
