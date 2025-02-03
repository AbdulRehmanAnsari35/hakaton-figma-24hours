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

type Category = {
  _id: string;
  title: string;
  image: {
    asset: {
      url: string;
    };
  };
  products: number;
  description: string;
};

const CategoryPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const query = `*[_type == "categories"]{
          _id,
          title,
          image{
            asset->{
              url
            }
          },
          products,
          description
        }`;
        const categoriesData: Category[] = await client.fetch(query);
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Categories</h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin border-4 border-t-4 border-blue-500 rounded-full w-16 h-16"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {categories.map((category) => (
            <div
              key={category._id}
              className="relative w-full overflow-hidden rounded-lg shadow-md group"
            >
              <div className="w-full h-60 relative group-hover:opacity-90 transition-all duration-300">
                <Image
                  src={category.image.asset.url}
                  alt={category.title}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white text-lg font-semibold">
                  {category.title}
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-2">
                  {category.description}
                </p>
                <p className="text-sm text-gray-500">
                  Products: {category.products}
                </p>
                <Link
                  href={"/Products"}
                  className="bg-teal-500 px-2 py-1 rounded-lg text-black hover:bg-teal-700 mt-2 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
