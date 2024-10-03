"use client";
import { Product } from "@/core";
import Link from "next/link";
import Image from "next/image";
import { IconShoppingCartPlus } from "@tabler/icons-react";

export interface ProductItemProps {
  product: Product;
}

export default function ProductItem(props: ProductItemProps) {
  const { product } = props;
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col bg-purple-dark border border-white/20 rounded-xl relative max-w-[350px]"
    >
      <div className="h-48 w-full relative">
        <Image
          src={product.img}
          fill
          alt="Image of Product"
          className="object-contain"
        />
      </div>

      <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/20">
        <span className="text-lg font-semibold ">{product.name}</span>

        <span className="text-sm border-b border-dashed self-start">
          {product.specifications.highlight}
        </span>

        <div className="flex-1"></div>

        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">
            de {product.priceBase}
          </span>

          <span className="text-xl font-semibold text-emerald-400">
            por {product.pricePromotional}
          </span>
        </div>
        <button
          className="flex bg-violet-700 rounded-full justify-center h-8 gap-2 items-center hover:border-2 border-violet-300"
          onClick={(e: any) => {
            e.preventDefault();
            console.log("Add in cart");
          }}
        >
          <IconShoppingCartPlus size={20} />
          <span className="font-semibold">Adicionar</span>
        </button>
      </div>
    </Link>
  );
}
