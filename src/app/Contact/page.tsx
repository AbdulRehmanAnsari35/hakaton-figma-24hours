import Head from 'next/head';
import { BiSupport } from "react-icons/bi";
import { SlTrophy } from 'react-icons/sl';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-semibold text-center">Get In Touch With Us</h1>
          <p className="text-gray-500 text-center mt-2 mb-12">
            For More Information About Our Product & Services, Please Feel Free To Drop Us <br/> An Email. 
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium">Address</h2>
                <p className="text-gray-700">Pakistan Karachi Orangi town<br/> Sec7/b Near Qatar Street  </p>
              </div>
              <div>
                <h2 className="text-lg font-medium">Phone</h2>
                <p className="text-gray-700">
                  Mobile: (+92) 3102867896<br />
                  Hotline: (+92) 00000000
                </p>
              </div>
              <div>
                <h2 className="text-lg font-medium">Working Time</h2>
                <p className="text-gray-700">
                  Monday-Friday: 9:00 - 12:00<br />
                  Saturday-Sunday: 9:00 - 12:00
                </p>
              </div>
            </div>

            {/* Right Section */}
            <form className=" p-6 space-y-10">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-[450] mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="abc@gmail.com"
                  className="w-[450] mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-500 focus:border-teal-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="This is an optional"
                  className="w-[450] mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi! I’d like to ask about..."
                  rows={4}
                  className="w-[450] mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-500 focus:border-teal-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-[200] bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition"
              >
                Submit
              </button>
            </form>
            <div className="bg-gray-100 w-[1000] h-[200] hidden sm:block md:w-[768] lg:w-[1000]">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 mt-16 md:space-y-0">
        {/* High Quality */}
        <div className="flex items-center space-x-4">
          <SlTrophy className="w-[60] h-[60] text-black" />
          <div>
            <h3 className="text-lg font-semibold text-black">High Quality</h3>
            <p className="text-gray-600 text-sm">crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center space-x-4">
          <IoIosCheckmarkCircleOutline className="w-[60] h-[60] text-black" />
          <div>
            <h3 className="text-lg font-semibold text-black">Warranty Protection</h3>
            <p className="text-gray-600 text-sm">Over 2 years</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center space-x-4">
          <BiSupport  className="w-[60] h-[60] text-black" />
          <div>
            <h3 className="text-lg font-semibold text-black">24 / 7 Support</h3>
            <p className="text-gray-600 text-sm">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
