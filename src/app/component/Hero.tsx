import Image from "next/image";
import { BsFillCartDashFill } from "react-icons/bs";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left section: Text content */}
        <div className="space-y-8">
          <p className="mt-1 text-gray-600 text-sm md:text-base lg:text-lg">
            Welcome to Chairy
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900">
            Best Furniture Collection For Your Interior.
          </h1>

          {/* Call-to-action button */}
          <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600">
            Shop Now
          </button>
        </div>

        {/* Right section: Image */}
        <div className="flex justify-center mt-8 lg:mt-0">
          <Image
            src="/Product Image.png" // Ensure this image is in the public directory
            alt="Chair Image"
            width={434}
            height={584}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Logos Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-6 flex justify-center items-center gap-12 sm:gap-16 md:gap-20 flex-wrap">
          {/* Company/Partner logos */}
          {[
            "zapier",
            "pipedrive",
            "cib-bank",
            "burnt-toast",
            "pandadoc",
            "moz",
            "home sm logo7", // Corrected logo name
          ].map((logo, index) => (
            <Image
              key={index}
              src={`/${logo}.png`} // Ensure logos are in the /public/images directory
              alt={logo}
              width={85}
              height={87}
              className="h-auto w-auto"
            />
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {["product-1", "product-2", "product-3", "product-4"].map((product, i) => (
            <div key={i} className="w-80">
              {/* Product Image */}
              <div className="relative w-full h-[312px]">
                <Image
                  src={`/${product}.png`} // Correct image path for products
                  alt={product}
                  width={312}
                  height={312}
                  className="object-cover w-[290px] h-[290px]"
                />
                {/* Labels for "New" or "Sale" */}
                {i === 1 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Sale
                  </span>
                )}
                {i === 0 && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    New
                  </span>
                )}
              </div>
              {/* Product Details */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-800">
                    Library Stool Chair
                  </h3>
                  {/* Cart button with link to product page */}
                  <Link href="/SingleProduct">
                    <button className="w-13 mr-5 px-2 py-2 bg-gray-300 text-white rounded-lg hover:bg-teal-600 flex items-center justify-center">
                      <BsFillCartDashFill className="mr-1" />
                    </button>
                  </Link>
                </div>
                <p className="text-black font-bold mt-2">$20</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Styles Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Left Section: Image with vertical text */}
          <div className="relative flex items-center justify-center">
            <p className="mt-80 ml-4 absolute transform -rotate-90 origin-bottom-left text-3xl sm:left-4 text-gray-900 font-semibold tracking-wide md:left-0">
              Explore New and Popular Styles
            </p>
            <div className="w-full lg:w-[585px] flex justify-center items-center bg-gray-200">
              <Image
                src="/item-category 1.png" // Correct image path
                alt="Main Chair"
                width={644}
                height={644}
                className="object-contain"
              />
            </div>
          </div>
          {/* Right Section: Smaller Grid */}
          <div className="grid grid-cols-2 gap-4">
            {["01", "02", "20", "20"].map((chair, index) => (
              <div key={index} className="relative hover:shadow-lg overflow-hidden">
                <Image
                  src={`/${chair}.png`} // Ensure correct path for chair images
                  alt={`Chair ${index + 1}`}
                  width={284}
                  height={284}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
     
    </div>
  );
};

export default HomePage;
