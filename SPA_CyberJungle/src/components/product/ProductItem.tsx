import { Product } from "@/core";
import Link from "next/link";
import Image from 'next/image';

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col bg-purple-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="h-48 w-full relative">
        <Image src={product.img} fill alt="Image of Product" className="object-contain" />
      </div>

      {product.name}
    </Link>
  );
}