import React from "react";
import Image from "next/image";

export default function ShoppingCart() {
  const products = [
    {
      id: 1,
      image: "/images/Cart-Banner1.PNG",
      name: "Ut diam consequat",
      color: "Brown",
      size: "S/M/L",
      price: 32.0,
      quantity: 1,
      total: 219.0,
      
    },
    {
      id: 2,
      image: "/images/Cart2.PNG",
      name: "Vel faucibus posuere",
      color: "Brown",
      size: "S/M/L",
      price: 32.0,
      quantity: 1,
      total: 219.0,
    },
    {
      id: 3,
      image: "/images/Cart3.PNG",
      name: "Ac vitae vestibulum",
      color: "Brown",
      size: "S/M/L",
      price: 32.0,
      quantity: 1,
      total: 219.0,
    },
    {
      id: 4,
      image: "/images/Cart4.PNG",
      name: "Elit massa diam",
      color: "Brown",
      size: "S/M/L",
      price: 32.0,
      quantity: 1,
      total: 219.0,
    },
    {
      id: 5,
      image: "/images/Cart5.PNG",
      name: "Proin pharetra elementum",
      color: "Brown",
      size: "S/M/L",
      price: 32.0,
      quantity: 1,
      total: 219.0,
    },
  ];

  return (
    <div className="p-8">
      {/* Product Table */}
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="py-2 flex items-center space-x-4">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      width={64}    // Image width property
                      height={64}   // Image height property
                      className="h-16 w-16 rounded-md" />
                    <div>
                      <p>{product.name}</p>
                      <p className="text-gray-500 text-sm">
                        {product.color}, {product.size}
                      </p>
                    </div>
                  </td>
                  <td className="py-2">${product.price.toFixed(2)}</td>
                  <td className="py-2">
                    <input
                      type="number"
                      value={product.quantity}
                      className="w-16 border rounded px-2 py-1"
                      readOnly
                    />
                  </td>
                  <td className="py-2">${product.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Cart Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded">Update Cart</button>
          </div>
          <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">Clear Cart</button>
        </div>

        {/* Cart Totals */}
        <div className="col-span-4">
          <div className="border p-4 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between border-b py-2">
              <span>Subtotal:</span>
              <span>219.00</span>
              
            </div>
            <div className="flex justify-between border-b py-2">
              <span>Total:</span>
              <span>325.00</span>
            </div>
            <button className="mt-4 bg-green-500 text-white w-full py-2 rounded">
              Proceed To Checkout
            </button>
          </div>

          {/* Calculate Shipping */}
          <div className="border p-4 rounded-lg mt-4">
            <h2 className="text-lg font-semibold mb-4">Calculate Shipping</h2>
            <input
              type="text"
              placeholder="Bangladesh"
              className="w-full border rounded px-3 py-2 mb-2"
            />
            <input
              type="text"
              placeholder="Mirpur Dhaka - 1200"
              className="w-full border rounded px-3 py-2 mb-2"
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border rounded px-3 py-2 mb-2"
            />
            <button className="bg-pink-500 text-white w-full py-2 rounded">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
