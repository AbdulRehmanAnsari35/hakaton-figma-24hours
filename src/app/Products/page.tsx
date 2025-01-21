"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Add heart icons for wishlist
import Link from "next/link";
import sanityClient from "@sanity/client";
import { useCart } from "../Context/cartContext";

const client = sanityClient({
  projectId: "s3a2qhkk",
  dataset: "production",
  useCdn: false,
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

const ProductCards: React.FC = () => {
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [wishlist, setWishlist] = useState<string[]>([]); // Wishlist state to track product IDs

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products"]{
          _id,
          title,
          price,
          priceWithoutDiscount,
          badge,
          "imageUrl": image.asset->url,
          description,
          inventory,
          tags
        }`;
        const productsData: Product[] = await client.fetch(query);
        setFilteredProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Toggle product in wishlist
  const toggleWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(product._id)
        ? prevWishlist.filter((id) => id !== product._id) // Remove from wishlist
        : [...prevWishlist, product._id]; // Add to wishlist
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Persist to localStorage
      return updatedWishlist;
    });
  };

  // Add to Cart logic
  const AddToCart = (product: Product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  if (loading) {
    return <div className="text-center py-20">Loading products...</div>;
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h2>
      {filteredProducts.length === 0 ? (
        <div>No products found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {filteredProducts.map((product) => (
            <div key={product._id} className="overflow-hidden w-80">
              <Link href={`/productss/${product._id}`}>
                <div className="relative w-full h-[312px] cursor-pointer">
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
              </Link>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                <p className="text-black font-bold mt-2">${product.price.toFixed(2)}</p>

                <div className="flex items-center justify-between mt-4">
                  {/* Add to Cart Button */}
                  <button
                    onClick={() => AddToCart(product)}
                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-lg"
                  >
                    <BsFillCartPlusFill className="mr-2" />
                    Add to Cart
                  </button>

                  {/* Wishlist Icon */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="text-red-500 hover:text-red-700 mr-5"
                  >
                    {wishlist.includes(product._id) ? (
                      <FaHeart size={24} />
                    ) : (
                      <FaRegHeart size={24} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductCards;
