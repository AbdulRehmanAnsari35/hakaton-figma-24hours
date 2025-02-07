"use client"; // Ensure this is a client component

import { useState } from "react";
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User, Search } from "lucide-react";
import Link from "next/link";

const SideBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sidebar items
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="mr-2 h-4 w-4" />, href: "/Dashboard" },
    { name: "Upload Product Data", icon: <Newspaper className="mr-2 h-4 w-4" />, href: "/BulkUpload" },
    { name: "Categories", icon: <Folders className="mr-2 h-4 w-4" />, href: "#" },
  ];

  const settingsItems = [
    { name: "Profile", icon: <User className="mr-2 h-4 w-4" />, href: "#" },
    { name: "Billing", icon: <CreditCard className="mr-2 h-4 w-4" />, href: "#" },
    { name: "Settings", icon: <Settings className="mr-2 h-4 w-4" />, href: "#" },
  ];

  // Filter items based on search input
  const filteredItems = [...menuItems, ...settingsItems].filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hidden md:block h-screen w-[350px] bg-gray-100 p-4 shadow-lg">
      {/* Search Input */}
      <div className="flex items-center bg-white p-2 rounded-md shadow-sm mb-4">
        <Search className="w-4 h-4 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full outline-none bg-transparent text-sm"
        />
      </div>

      {/* Sidebar Menu */}
      <div className="space-y-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center p-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
            >
              {item.icon} {item.name}
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-sm text-center mt-4">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SideBar;
