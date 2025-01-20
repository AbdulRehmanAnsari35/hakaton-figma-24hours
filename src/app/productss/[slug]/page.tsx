"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import sanityClient from "@sanity/client";
import Link from "next/link";

const client = sanityClient({
  projectId: "s3a2qhkk",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

const ProductDetails = () => {
  const { slug } = useParams(); // Fetch the slug from the URL
  const [product, setProduct] = useState<any>(null);

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
        }`;
        const productData = await client.fetch(query, { slug });
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
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
          className="rounded-lg "
        />
        
        <div>
          <p className="text-xl text-gray-800">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex mt-20  ">
        <h1 className="text-3xl font-semibold ml-10">Our Products</h1>
        <Link href={"/"} className="ml-[900] underline hover:text-blue-700">View all</Link>
        </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-6xl mx-auto mt-8">
  {[
    { src: "/prodct3.png", title: "Library Stool Chair", price: "$99" },
    { src: "/product-1.png", title: "Library Stool Chair", price: "$99" },
    { src: "/image2.png", title: "Library Stool Chair", price: "$99" },
    { src: "/product-3.png", title: "Library Stool Chair", price: "$99" },
    { src: "/prodct1.png", title: "Library Stool Chair", price: "$99" },
    { src: "/01.png", title: "Library Stool Chair", price: "$99" },
  ].map((product, index) => (
    <div key={index} className="text-center">
      <Image
        src={product.src}
        alt={product.title}
        width={350}
        height={200}
        className="object-cover rounded-md shadow-md mb-2"
      />
      <p className="text-gray-800 font-medium">{product.title}</p>
      <p className="text-black font-semibold">{product.price}</p>
    </div>
  ))}
</div>

    </div>
    
  );
};

export default ProductDetails;
