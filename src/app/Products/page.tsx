"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import sanityClient from "@sanity/client";
import { useCart } from "../Context/cartContext";
import ProductFilter from "../component/ProductFilter";

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
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [showShareModal, setShowShareModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

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

  const toggleWishlist = (product: Product) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(product._id)
        ? prevWishlist.filter((id) => id !== product._id)
        : [...prevWishlist, product._id];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const AddToCart = (product: Product) => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  };

  const shareToSocialMedia = (platform: string) => {
    if (!selectedProduct) return;

    const productUrl = encodeURIComponent(
      `https://yourwebsite.com/product/${selectedProduct._id}`
    );
    const productTitle = encodeURIComponent(selectedProduct.title);
    const productDescription = encodeURIComponent(
      `${selectedProduct.title} - ${selectedProduct.price}`
    );

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${productUrl}&quote=${productDescription}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${productTitle}&url=${productUrl}&hashtags=Product,Promo`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${productDescription}%20${productUrl}`,
          "_blank"
        );
        break;
      default:
        break;
    }
    setShowShareModal(false);
  };

  const handleFilterChange = (filters: {
    priceRange: number[];
    inStockOnly: boolean;
  }) => {
    const { priceRange, inStockOnly } = filters;
    let filteredList = [...filteredProducts];
    filteredList = filteredList.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    if (inStockOnly) {
      filteredList = filteredList.filter((product) => product.inventory > 0);
    }
    setFilteredProducts(filteredList);
  };

  const handleShareButtonClick = (product: Product) => {
    setSelectedProduct(product);
    setShowShareModal(true);
  };

  if (loading) {
    return <div className="text-center py-20">Loading products...</div>;
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <ProductFilter onFilterChange={handleFilterChange} />
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
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-800">
                    {product.title}
                  </h3>
                  <button
                    onClick={() => handleShareButtonClick(product)}
                    className="text-black mr-10 bg-teal-400 rounded-md px-2 py-1 hover:bg-teal-500"
                  >
                    Share
                  </button>
                </div>

                <p className="text-black font-bold mt-2">
                  ${product.price.toFixed(2)}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => AddToCart(product)}
                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-lg"
                  >
                    <BsFillCartPlusFill className="mr-2" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => toggleWishlist(product)}
                    className="text-red-500 hover:text-red-700 mr-10"
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

      {/* Share Modal */}
      {showShareModal && selectedProduct && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-lg font-medium mb-4">
              Share this product for discounts
            </h3>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => shareToSocialMedia("facebook")}
                className="bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-800"
              >
                Share on Facebook
              </button>
              <button
                onClick={() => shareToSocialMedia("twitter")}
                className="bg-blue-400 text-white py-1 rounded-lg hover:bg-blue-600"
              >
                Share on Twitter
              </button>
              <button
                onClick={() => shareToSocialMedia("whatsapp")}
                className="bg-green-500 text-white py-1 rounded-lg hover:bg-green-700"
              >
                Share on WhatsApp
              </button>
              <button
                onClick={() => setShowShareModal(false)}
                className="text-black bg-red-500 rounded-lg py-1 hover:bg-red-700 mt-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCards;
