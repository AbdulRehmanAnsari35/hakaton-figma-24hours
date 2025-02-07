"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import SideBar from "../SideBar/page";
import ChartD from "../ChartD/page";
import Image from "next/image";

type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
};

const Dashboard = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const query = `*[_type == "products"]{
      _id,
      title,
      price,
      "imageUrl": image.asset->url
    }`;

    const fetchData = async () => {
      try {
        const result: Product[] = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div className="flex h-screen">
   
      <div className="w-[350px] bg-gray-100 h-full fixed">
        <SideBar />
      </div>


      <div className="flex-1 p-6 overflow-y-auto bg-gray-50 ml-[350px]">
   
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h2 className="text-xl font-bold">Posts</h2>
            <p className="text-3xl font-semibold">60</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h2 className="text-xl font-bold">Categories</h2>
            <p className="text-3xl font-semibold">10</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h2 className="text-xl font-bold">Users</h2>
            <p className="text-3xl font-semibold">750</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4 text-center">
            <h2 className="text-xl font-bold">Comments</h2>
            <p className="text-3xl font-semibold">1200</p>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Analytics For This Year</h2>
          <ChartD />
        </div>

      
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          <table className="table-auto w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Image</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-100">
                    <td className="border px-4 py-2">
                      <Image
                        src={product.imageUrl}
                        alt={product.title}
                        width={50}
                        height={50}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td className="border px-4 py-2">{product.title}</td>
                    <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
                    <td className="border px-4 py-2">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
