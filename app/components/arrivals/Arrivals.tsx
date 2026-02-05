import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type Product = {
    id: number
    title: string
    image: StaticImageData
    price: number
    oldPrice?: number
    rating: number
    discount?: number
  }
  
  interface Props {
    product: Product
  }
  
  const Arrivals = ({ product }: Props) => {
    return (
      <div className="w-[292px] lg:w-[392px] flex flex-col">
        <Link href={"/category/single"} className="bg-[#F0EEED] rounded-xl relative w-full h-[268px] lg:h-[398px]">
        <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
        />
        </Link>
  
        <h1 className="font-bold text-[20px] line-clamp-1">
          {product.title}
        </h1>
  
        <div className="flex items-center text-xs mb-2">
          ⭐⭐⭐⭐⭐
          <span className="ml-1 text-gray-500">
            {product.rating}/5
          </span>
        </div>
  
        <div className="flex items-center gap-2">
          <span className="font-bold text-[24px]">${product.price}</span>
  
          {product.oldPrice && (
            <span className="line-through text-gray-400 text-[24px]">
              ${product.oldPrice}
            </span>
          )}
  
          {product.discount && (
            <span className="bg-red-100 text-red-500 text-[12px] px-2 py-0.5 rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>
      </div>
    )
  }
  
  export default Arrivals
  