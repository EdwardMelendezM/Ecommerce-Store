'use client'

import Image from "next/image";
import { Product } from "@/types";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./currency";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCard{
  data:Product;
}

const ProductCard: React.FC<ProductCard> = ({
  data
}) => {

  const cart = useCart()
  const router = useRouter()

  const handleClick = ()=>{
    router.push(`/product/${data?.id}`)
  }

  const previewModal = usePreviewModal()

  const onPreview :MouseEventHandler<HTMLButtonElement> =(event)=>{
    event.stopPropagation();
    previewModal.onOpen(data)
  }

  const onAddToCard: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data)
  }


  return ( 
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-3">
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
            onClick={onPreview}
            icon={<Expand className="text-gray-600" size={20} />}
          />
            <IconButton
              onClick={onAddToCard}
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