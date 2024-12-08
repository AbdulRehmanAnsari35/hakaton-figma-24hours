import Image from "next/image";
import { BsFillCartDashFill } from "react-icons/bs";


const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <p className="mt-1 text-gray-600 text-sm md:text-base lg:text-lg">
            Welcome to Chairy
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900">
            Best Furniture Collection For Your Interior.
          </h1>

          <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600">
            Shop Now
          </button>
        </div>
        <div className="flex justify-center mt-8 lg:mt-0">
          <Image
            src="/Product Image.png"
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
          {[
            "zapier",
            "pipedrive",
            "cib-bank",
            "burnt-toast",
            "pandadoc",
            "moz",
            "home sm logo7",
          ].map((logo, index) => (
            <Image
              key={index}
              src={`/${logo}.png`}
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
        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {["product-1", "product-2", "product-3", "product-4"].map(
              (product, i) => (
                <div key={i} className="w-80">
                  <div className="relative w-full h-[312px]">
                   <Image
                      src={`/${product}.png`}
                      alt={product}
                      width={312}
                      height={312}
                      className="object-cover w-[290px] h-[290px]"
                    />
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
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-gray-800">
                        Library Stool Chair
                      </h3>
                      <div className="w-13 mr-5 px-2 py-2 bg-gray-300 text-white rounded-lg hover:bg-teal-600 flex items-center justify-center">
                        <button>
                          <BsFillCartDashFill className="mr-1" />
                        </button>
                      </div>
                    </div>
                    <p className="text-black font-bold mt-2">$20</p>
                  </div>
                </div>
              )
            )}
          </div>
        
      </section>

      {/* Top Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Wing Chair",
              count: "3,584 Products",
              image: "wing-chair",
            },
            {
              name: "Wooden Chair",
              count: "157 Products",
              image: "Image",
            },
            {
              name: "Desk Chair",
              count: "154 Products",
              image: "image2",
            },
          ].map((category, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Image
                src={`/${category.image}.png`}
                alt={category.name}
                width={424}
                height={424}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-black w-full h-[85px] bg-opacity-50 hover:bg-opacity-60 transition-opacity flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Styles Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Left Section with Vertical Text and Image */}
          <div className="relative flex items-center justify-center">
            {/* Vertical Text */}
            <p className="mt-80 ml-4 absolute transform -rotate-90 origin-bottom-left text-3xl sm:left-4 text-gray-900 font-semibold tracking-wide md:left-0">
              Explore New and Popular Styles
            </p>
            {/* Main Image */}
            <div className="w-full lg:w-[585px] flex justify-center items-center bg-gray-200">
              <Image
                src="/item-category 1.png"
                alt="Main Chair"
                width={644}
                height={644}
                className="object-contain"
              />
            </div>
          </div>
          {/* Right Section with Small Chair Grid */}
          <div className="grid grid-cols-2 gap-4">
            {["01", "02", "20", "20"].map((chair, index) => (
              <div key={index} className="relative hover:shadow-lg overflow-hidden">
                <Image
                  src={`/${chair}.png`}
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

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our Products
        </h2>
     
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {["product-1", "product-2", "product-3", "product-4"].map((product, i) => (
              <div key={i} className="w-80">
                <div className="relative w-full h-[312px]">
                  <Image
                    src={`/${product}.png`}
                    alt={product}
                    width={312}
                    height={312}
                    className="object-cover w-[290px] h-[290px]"
                  />
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
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-800">Library Stool Chair</h3>
                    <button className="w-14 px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-teal-600 flex items-center justify-center">
                      <BsFillCartDashFill className="mr-1" />
                    </button>
                  </div>
                  <p className="text-black font-bold mt-2">
                    $20{" "}
                    {i === 1 && (
                      <span className="text-gray-500 line-through text-sm ml-2">
                        $30
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        
      </section>
        {/* Product Grid */}
        <section className="container mx-auto px-4 py-16">
      
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {["prodct1", "prodct2", "prodct3", "product-1"].map((product, i) => (
              <div key={i} className="w-80">
                <div className="relative w-full h-[312px]">
                  <Image
                    src={`/${product}.png`}
                    alt={product}
                    width={312}
                    height={312}
                    className="object-cover w-[290px] h-[290px]"
                  />
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
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-800">Library Stool Chair</h3>
                    <button className="w-14 px-4 py-2 bg-gray-300 text-white rounded-lg hover:bg-teal-600 flex items-center justify-center">
                      <BsFillCartDashFill className="mr-1" />
                    </button>
                  </div>
                  <p className="text-black font-bold mt-2">
                    $20{" "}
                    {i === 1 && (
                      <span className="text-gray-500 line-through text-sm ml-2">
                        $30
                      </span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        
      </section>
    </div>
  );
};

export default HomePage;
