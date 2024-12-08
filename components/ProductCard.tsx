import React from "react";

export default function ProductCard({ product }: { product: any }) {
    return (
        <div className="border p-4 rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-500">{product.name}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart
            </button>
        </div>
    );
}