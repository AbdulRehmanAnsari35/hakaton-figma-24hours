"use client";
import React, { useState } from "react";
import Image from "next/image";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    const { email, password } = formData;
    if (!email || !password) {
      setErrors("All fields are required.");
      return;
    }

    setErrors("");
    alert("Sign In Successful!");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-8 md:p-16">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome Back!</h1>
        <p className="text-gray-600 mb-6">Please sign in to your account</p>
        {errors && <p className="text-red-500 text-sm mb-4">{errors}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="youremail@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don&#39;t have an account?{" "}
          <a
            href="/Signup"
            className="text-blue-500 underline hover:text-blue-600 transition"
          >
            Sign Up
          </a>
        </p>
      </div>
      {/* Right Section */}
      <div className="hidden md:flex w-1/2 bg-blue-100 flex-col justify-center items-center">
        <div className="text-center">
          <div className="bg-blue-500 rounded-full flex items-center justify-center">
            <Image
              src="/02.png"
              alt="logo"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold mt-6 text-gray-800">Comforty</h2>
          <p className="mt-4 text-gray-600">New here?</p>
          <a
            href="/Signup"
            className="text-blue-500 underline hover:text-blue-600 mt-2 transition"
          >
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
