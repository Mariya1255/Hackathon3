"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "../../types/products";
import { useParams } from "next/navigation";
import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";


const ProductDetail = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const params = useParams();
    const slug = params?.slug;

    useEffect(() => {
        if(slug) {
            const fetchProduct = async () => {
                const productData: Product | null = await client.fetch(
                    `*[_type == "product" && slug.current == $slug][0]`,
                    {slug}
                );
                console.log('Fetched Product:, productDate');

                if (!productData) {
                    
                } else {
                    setProduct(productData);
                }
            };
            fetchProduct();
        }
    },[slug]);
    console.log(product)
    if(!product) {
        return <p>Data Not Found</p>;  // Render nothing until product is fetched or 404 is triggered
    }

    return (
        <div className="p-8 font-sans text-[#151875]">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-96 object-cover rounded-lg"
                />
              )}
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <p className="text-lg font-semibold text-gray-600 mt-2">
                ${product.price}
              </p>
              <p className="mt-4 text-gray-800">{product.description}</p>
              <div className="mt-6">
                <span className="text-lg font-bold">Stock:</span>
                <span> {product.stockLevel > 0 ? "In Stock" : "Out of Stock"}</span>
              </div>
              <div className="mt-4">
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default ProductDetail; 