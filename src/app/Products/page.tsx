"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillCartPlusFill } from "react-icons/bs";
import sanityClient from "@sanity/client";

// Initialize Sanity client
const client = sanityClient({
  projectId: "s3a2qhkk",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

type Product = {
  _id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
  imageUrl: string;
  description: string;
  inventory: number;
  tags?: string[];
};

const ProductCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Use effect with proper client-side logic
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          *[_type == "products"]{
            _id,
            title,
            price,
            priceWithoutDiscount,
            badge,
            "imageUrl": image.asset->url,
            description,
            inventory,
            tags
          }
        `;
        const productsData: Product[] = await client.fetch(query);
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency ensures this runs only once

  const AddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} added to cart!`);
  };

  if (loading) {
    return <div className="text-center py-20">Loading products</div>;
  }

  return (
    <div>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Sanity APIs Data</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product) => (
            <div key={product._id} className="overflow-hidden w-80">
              <div className="relative w-full h-[312px]">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={312}
                  height={312}
                  className="object-cover w-[290px] h-[290px]"
                />
                {product.badge && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-black font-bold mt-2">
                    ${product.price}
                    {product.priceWithoutDiscount && (
                      <span className="text-gray-500 line-through text-sm ml-2">
                        ${product.priceWithoutDiscount}
                      </span>
                    )}
                  </p>
                  <button
                    onClick={() => AddToCart(product)}
                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-lg mt-2 mr-5"
                  >
                    <BsFillCartPlusFill className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 bg-slate-100 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
          {cart.length > 0 ? (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
                >
                  <div>
                    <p className="font-medium text-slate-900">{item.title}</p>
                    <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                  </div>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-black text-center">Your Cart Is Empty Please Add Products</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductCards;
