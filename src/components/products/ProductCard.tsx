import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <div className="group relative">
      {/* Immagine prodotto */}
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition"
        />
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <Heart className="h-5 w-5" />
          </button>
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Info prodotto */}
      <div className="mt-4 space-y-1">
        <Link href={`/products/${category}/${id}`}>
          <h3 className="text-sm font-medium text-gray-900 hover:underline">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500">€{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;