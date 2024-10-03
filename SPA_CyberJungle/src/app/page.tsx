import ProductItem from "@/components/product/ProductItem";
import { products } from "@/core";

export default function Home() {
  return (
   <div className="flex gap-5 flex-wrap">
   <ProductItem product={products[0]}/>
   <ProductItem product={products[1]}/>
   <ProductItem product={products[2]}/>
   <ProductItem product={products[3]}/>
   <ProductItem product={products[4]}/>
   <ProductItem product={products[5]}/>
   </div>
  );
}
