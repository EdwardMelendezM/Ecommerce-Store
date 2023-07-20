'use client'

import Image from "next/image";
import { Product } from "@/types";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";

interface ProductCard{
  data:Product;
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {
  return ( 
  <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-3">
    {/* Images and actions */}
    <div className="aspect-square rounded-xl bg-gray-100 relative">
      <Image
        src={data?.images?.[0]?.url}
        fill
        alt="Image"
        className="aspect-square object-cover rounded-md"
      />
      <div className="opacity-0 group-hover:opacity-100">
        <div className="flex gap-x-6 justify-center transition absolute w-full px-6 bottom-5">
          <IconButton
            icon={<Expand className="text-gray-600" size={20} />}
          />
            <IconButton
              icon={<ShoppingCart className="text-gray-600" size={20} />}
            />
        </div>
      </div>
    </div>
    <div>
      <p className="font-semibold text-lg">
        {data.name}
      </p>
      <p className="text-sm text-gray-500">
        {data.category?.name}
      </p>
    </div>
  {/* Description */}
    <div className="flex items-center justify-between">
      <Currency value={data?.price} />
    </div>
  </div>
   );
}
 
export default ProductCard;