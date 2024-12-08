import React from "react";
import Image from "next/image";

interface Product {
    name: string;
    image: string;
    description?: string;  // description can be undefined
    price: number;
    inStock: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="border p-4 rounded-lg">
            <Image 
                src={product.image} 
                alt={product.name} 
                width={300} 
                height={200} 
                className="w-full h-40 object-cover rounded-md" 
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">{product.description ?? "No description available"}</p> {/* Uses '??' to check for undefined */}

            <p className="text-gray-700 mt-2">${product.price.toFixed(2)}</p>
            <p className={`text-sm ${product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>

            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart
            </button>
        </div>
    );
}
