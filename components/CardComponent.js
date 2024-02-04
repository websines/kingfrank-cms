import { urlFor } from "@/lib/sanity-client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function CardComponent({ product }) {
  return (
    <Link href={`/product/${product.slug.current}`}>
      <div className="flex flex-col justify-center items-start">
        <img
          src={urlFor(product.images[0].asset._ref).url()}
          alt="bike"
          className="w-[347px] h-[347px] object-cover"
        />
        <div className="mt-4 text-left">
          <span className="text-xs font-light text-gray-500">Brompton</span>
          <p className="font-semibold text-lg text-black">
            {product && product.name}
          </p>
          <p className="font-semibold text-gray-500">
            {product && product.price}
          </p>
          <div className="flex flex-row items-center justify-start mt-2">
            {product && product.in_stock ? (
              <div className=" flex flex-row items-center">
                <div className="bg-green-500 rounded-full animate-ping w-2 h-2" />
                <p className="mx-2 text-sm font-semibold text-black">
                  In Stock
                </p>
                <Link
                  href="https://wa.me/919547071934/"
                  className="px-4 py-2 bg-green-500 flex flex-row items-center space-x-2"
                >
                  <FaWhatsapp className="text-white" />
                  <span className="text-white font-semibold">Buy Now</span>
                </Link>
              </div>
            ) : (
              <div className=" flex flex-row items-center">
                <div className="bg-red-500 rounded-full animate-ping w-2 h-2" />
                <p className="mx-2 text-sm font-semibold text-black">
                  Out of Stock
                </p>
                <Link
                  href="https://wa.me/919547071934/"
                  className="px-4 py-2 bg-green-500 flex flex-row items-center space-x-2"
                >
                  <FaWhatsapp className="text-white" />
                  <span className="text-white font-semibold">Preorder Now</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
