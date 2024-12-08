import React from 'react'
import Image from 'next/image'
import { BsFillCartDashFill } from 'react-icons/bs'


const page = () => {
  return (
    <div>
      {/* Featured Products Section 1 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          All Product
        </h2>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {["product-1", "product-2", "product-3", "product-4"].map(
            (product, i) => (
              <div key={i} className=" overflow-hidden w-80">
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
                      <BsFillCartDashFill className="mr-1" />{" "}
                      {/* Cart Icon with margin */}
                    </button>
                    </div>
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
            )
          )}
        </div>
        
      </section>
      {/* Featured Products Section 2 */}
      <section className="container mx-auto px-4 py-16">
          
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {["Image", "prodct2", "prodct3", "product-1"].map(
            (product, i) => (
              <div key={i} className=" overflow-hidden w-80">
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
                      <BsFillCartDashFill className="mr-1" />{" "}
                      {/* Cart Icon with margin */}
                    </button>
                    </div>
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
            )
          )}
        </div>
        
      </section>
      {/* Featured Products Section 3 */}
      <section className="container mx-auto px-4 py-16">
            
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {["prodct1", "product-2", "product-3", "image2"].map(
            (product, i) => (
              <div key={i} className=" overflow-hidden w-80">
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
                      <BsFillCartDashFill className="mr-1" />{" "}
                      {/* Cart Icon with margin */}
                    </button>
                    </div>
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
            )
          )}
        </div>
        
      </section>
      <div className="bg-gray-100 py-16 px-4 text-center">
      {/* Newsletter Section */}
      <h2 className="text-3xl font-semibold text-black mb-6">
        Or Subscribe To The Newsletter
      </h2>
      <form className="flex justify-center items-center gap-4 max-w-lg mx-auto">
  {/* Email Input */}
  <div className="relative w-full max-w-md">
    <input
      type="email"
      placeholder="Email Address..."
      className="w-full px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 border-b-2 border-gray-600"
    />
  </div>

  {/* Submit Button */}
  <div className="relative">
    <button
      type="submit"
      className="px-6 py-2 text-black font-medium transition border-b-2 border-gray-600"
    >
      SUBMIT
    </button>
  </div>
</form>



      {/* Instagram Section */}
      <h3 className="text-3xl font-semibold text-black mt-16 mb-6">
        Follow Products And Discounts On Instagram
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 justify-center items-center max-w-4xl mx-auto">
        {[
          "/Image.png",
          "/prodct1.png",
          "/product-2.png",
          "/product-1.png",
          "/image2.png",
        ].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Product ${index + 1}`}
            width={200}
            height={200}
            className="w-[200] h-[200] mt-10 object-cover rounded-md shadow-md"
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default page
