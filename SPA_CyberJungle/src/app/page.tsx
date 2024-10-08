"use client";
import ProductItem from "@/components/product/ProductItem";
import useProducts from "@/data/hooks/useProducts";

export default function Home() {
  const { products } = useProducts();
  return (
    <div className="grid grid-cols-4 gap-5 container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
