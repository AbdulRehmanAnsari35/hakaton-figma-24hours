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

type ChartType = "sales" | "traffic" | null;

const Dashboard = () => {
  const [selectedChart, setSelectedChart] = useState<ChartType>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const openPanel = (chart: ChartType) => {
    setSelectedChart(chart);
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setTimeout(() => setSelectedChart(null), 300);
  };

  return (
    <div className="relative p-6">
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-x-2">
        <button
          className="p-3 bg-gray-400 text-black rounded-lg shadow-lg hover:bg-teal-500 transition"
          onClick={() => openPanel("sales")}
        >
          <ChartIcon className="w-6 h-6" />
        </button>
        <button
          className="p-3 bg-gray-400 text-black rounded-lg shadow-lg hover:bg-teal-500 transition"
          onClick={() => openPanel("traffic")}
        >
          <ChartBar className="w-6 h-6" />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 transition-transform transform ${isPanelOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button className="absolute top-4 right-4 text-lg" onClick={closePanel}>
          ×
        </button>
        {selectedChart && (
          <>
            <h2 className="text-2xl font-semibold mb-4">
              {selectedChart === "sales" ? "Sales Overview" : "User Traffic"}
            </h2>
            {selectedChart === "sales" ? (
              <LineChart width={300} height={200} data={salesData}>
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
              <BarChart width={300} height={200} data={trafficData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="users" fill="#82ca9d" />
              </BarChart>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
