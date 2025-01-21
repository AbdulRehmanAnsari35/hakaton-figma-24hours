"use client"
import React, { useState } from "react";
import Image from "next/image";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;
    if (!fullName || !email || !password || !confirmPassword) {
      setErrors("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setErrors("Passwords do not match.");
      return;
    }

    setErrors("");
    alert("Signup Successful!");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-8 md:p-16">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Hello!</h1>
        <p className="text-gray-600 mb-6">Please sign up to continue</p>
        {errors && <p className="text-red-500 text-sm mb-4">{errors}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter FullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
      {/* Right Section */}
      <div className="hidden md:flex w-1/2 bg-green-100 flex-col justify-center items-center">
        <div className="text-center">
          <div className=" flex items-center justify-center">
            <Image src="/02.png" alt="logo" width={200} height={200}
            className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold mt-6 text-gray-800">Comforty</h2>
          <p className="mt-4 text-gray-600">Already have an account?</p>
          <a
            href="/SignIn"
            className="text-green-500 underline hover:text-green-600 mt-2 transition"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
