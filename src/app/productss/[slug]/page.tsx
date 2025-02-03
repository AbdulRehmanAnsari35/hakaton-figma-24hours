"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import sanityClient from "@sanity/client";
import Link from "next/link";

type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  inventory: number;
  tags?: string[];
  rating?: {
    score: number;
    count: number;
  };
};

const client = sanityClient({
  projectId: "s3a2qhkk",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
});

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `*[_type == "products" && _id == $slug][0]{
          _id,
          title,
          price,
          description,
          "imageUrl": image.asset->url,
          inventory,
          tags,
          rating {
            score,
            count
          }
        }`;
        const productData = await client.fetch(query, { slug });
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products"][0...6]{
          _id,
          title,
          price,
          "imageUrl": image.asset->url
        }`;
        const productsData = await client.fetch(query);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
    fetchProducts();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <Image
          src={product.imageUrl}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-lg"
        />

        <div>
          <p className="text-xl text-gray-800">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* ⭐ Rating & Reviews Section */}
          {product.rating ? (
            <div className="mt-4 flex items-center">
              <span className="text-yellow-500 text-2xl">⭐</span>
              <span className="text-lg font-semibold ml-2">
                {product.rating.score.toFixed(1)} / 5
              </span>
              <span className="text-gray-600 ml-2">
                ({product.rating.count} reviews)
              </span>
            </div>
          ) : (
            <p className="mt-4 text-gray-500">No reviews yet</p>
          )}

          {/* 🏷️ Display Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-md"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex mt-20">
        <h1 className="text-3xl font-semibold ml-10">Our Products</h1>
        <Link href={"/"} className="ml-auto underline hover:text-blue-700">
          View all
        </Link>
      </div>

      {/* 🔥 Dynamically Fetched Clickable Sanity Product Images */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto mt-8">
        {products.map((product) => (
          <Link key={product._id} href={`/productss/${product._id}`} passHref>
            <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-200">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={350}
                height={200}
                className="object-cover rounded-md shadow-md mb-2"
              />
              <p className="text-gray-800 font-medium">{product.title}</p>
              <p className="text-black font-semibold">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
