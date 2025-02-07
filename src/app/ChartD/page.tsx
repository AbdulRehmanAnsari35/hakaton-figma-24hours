"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { ChartBar, LineChart as ChartIcon } from "lucide-react";

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 7000 },
  { name: "May", sales: 6000 },
];

const trafficData = [
  { name: "Mon", users: 2000 },
  { name: "Tue", users: 2500 },
  { name: "Wed", users: 2200 },
  { name: "Thu", users: 2700 },
  { name: "Fri", users: 2900 },
];

type ChartType = "sales" | "traffic";

const ChartD = () => {
  const [selectedChart, setSelectedChart] = useState<ChartType>("sales");

  return (
    <div className="p-6 flex flex-col gap-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Analytics For This Year</h2>

        <div className="flex gap-4 mb-4">
          <button
            className={`p-3 rounded-lg shadow-lg transition ${
              selectedChart === "sales"
                ? "bg-teal-500 text-white"
                : "bg-gray-400 text-black"
            }`}
            onClick={() => setSelectedChart("sales")}
          >
            <ChartIcon className="w-6 h-6" />
          </button>
          <button
            className={`p-3 rounded-lg shadow-lg transition ${
              selectedChart === "traffic"
                ? "bg-teal-500 text-white"
                : "bg-gray-400 text-black"
            }`}
            onClick={() => setSelectedChart("traffic")}
          >
            <ChartBar className="w-6 h-6" />
          </button>
        </div>

        {selectedChart === "sales" ? (
          <LineChart width={500} height={300} data={salesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={2}
            />
          </LineChart>
        ) : (
          <BarChart width={500} height={300} data={trafficData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="users" fill="#82ca9d" />
          </BarChart>
        )}
      </div>
    </div>
  );
};

export default ChartD;
