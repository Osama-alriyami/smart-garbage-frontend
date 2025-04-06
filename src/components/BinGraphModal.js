import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const categories = [
  "weight",
  "level",
  "battery",
  "predicted_weight",
  "predicted_level",
];

const yAxisDomainMap = {
  weight: [0, 30],
  predicted_weight: [0, 30],
  level: [0, 100],
  predicted_level: [0, 100],
  battery: [0, 100],
};

const MS_IN_DAY = 24 * 60 * 60 * 1000;

const BinGraphModal = ({ bin, onClose }) => {
  const [activeTab, setActiveTab] = useState("weight");
  const [startOffsetDays, setStartOffsetDays] = useState(0);

  if (!bin) return null;

  const now = new Date();
  const startDate = new Date(now.getTime() - (startOffsetDays + 7) * MS_IN_DAY);
  const endDate = new Date(now.getTime() - startOffsetDays * MS_IN_DAY);

  const readings = (bin.readings || [])
    .map((r) => ({ ...r, timestamp: new Date(r.timestamp) }))
    .sort((a, b) => a.timestamp - b.timestamp);

  const mlReadings = (bin.ML_output || [])
    .map((r) => ({ ...r, timestamp: new Date(r.timestamp) }))
    .sort((a, b) => a.timestamp - b.timestamp);

  const isPrediction = activeTab.startsWith("predicted_");
  const rawData = isPrediction ? mlReadings : readings;

  const filteredData = rawData
    .filter((r) => r.timestamp >= startDate && r.timestamp <= endDate)
    .map((r) => ({
      ...r,
      timestamp: r.timestamp.toLocaleString("en-US", {
        timeZone: "America/Denver",
      }),
    }));

  const canGoNext = startOffsetDays > 0;
  const canGoPrev = rawData.some((r) => r.timestamp < startDate);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-[90vw] max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {bin.location} - History
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-4 gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full font-medium ${
                activeTab === cat ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {cat.replace("predicted_", "Predicted ").replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mb-2">
          <button
            onClick={() => setStartOffsetDays((prev) => prev + 7)}
            disabled={!canGoPrev}
            className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          >
            ◀ Previous 7 Days
          </button>
          <button
            onClick={() => setStartOffsetDays((prev) => Math.max(prev - 7, 0))}
            disabled={!canGoNext}
            className="px-4 py-1 rounded bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
          >
            Next 7 Days ▶
          </button>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" tick={{ fontSize: 10 }} />
            <YAxis domain={yAxisDomainMap[activeTab]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={activeTab}
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 2 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Close */}
        <div className="text-center mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BinGraphModal;
