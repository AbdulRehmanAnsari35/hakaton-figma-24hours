"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";
import Link from "next/link";

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

const WishlistPage = () => {
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      const wishlistIds = JSON.parse(localStorage.getItem("wishlist") || "[]");

      if (wishlistIds.length > 0) {
        try {
          const query = `*[_type == "products" && _id in $wishlistIds]{
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
          const productsData: Product[] = await client.fetch(query, {
            wishlistIds,
          });
          setWishlistProducts(productsData);
        } catch (error) {
          console.error("Error fetching wishlist products:", error);
        }
      }
      setLoading(false);
    };

    fetchWishlistProducts();
  }, []);

  const removeFromWishlist = (productId: string) => {
    // Remove product from local storage
    const updatedWishlist = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    ).filter((id: string) => id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

    // Update the wishlistProducts state
    setWishlistProducts((prevProducts) =>
      prevProducts.filter((product) => product._id !== productId)
    );
  };

  if (loading) {
    return <div className="text-center py-20">Loading wishlist...</div>;
  }

  return (
    <section className="container mx-auto px-4 py-16 overflow-hidden">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">My Wishlist</h2>
      {wishlistProducts.length === 0 ? (
        <div>No items in your wishlist.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {wishlistProducts.map((product) => (
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
                <h3 className="text-lg font-medium text-gray-800">
                  {product.title}
                </h3>
                <p className="text-black font-bold mt-2">
                  ${product.price.toFixed(2)}
                </p>

                <div className="mt-4">
                  <button
                    onClick={() => removeFromWishlist(product._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded-lg"
                  >
                    Remove from Wishlist
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

export default WishlistPage;
