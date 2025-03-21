import React, { useState } from "react";
import GarbageCard from "./GarbageCard";
import BinGraphModal from "./BinGraphModal";

const GarbageList = ({ garbageData }) => {
  const [selectedBin, setSelectedBin] = useState(null);
  const [filter, setFilter] = useState("all"); // 'all' | 'warning' | 'error'
  const [buildingFilter, setBuildingFilter] = useState("all"); // 'all' | specific building name

  // Helper to get the status of a bin
  const getStatus = (bin) => {
    const latest = bin.readings?.[bin.readings.length - 1];
    if (!latest) return "none";
    const isError = latest.level >= 90 || latest.weight >= 15;
    const isWarning = latest.level >= 70 || latest.weight >= 8;
    if (isError) return "error";
    if (isWarning) return "warning";
    return "normal";
  };

  // Extract unique building names from locations (format: "Building - Floor - ID")
  const buildings = [
    ...new Set(garbageData.map((bin) => bin.location.split(" - ")[0])),
  ];

  // Apply filters
  const filteredData = garbageData
    .filter((bin) => filter === "all" || getStatus(bin) === filter)
    .filter((bin) => buildingFilter === "all" || bin.location.startsWith(buildingFilter));

  return (
    <div>
      {/* 🔍 Filters (Status & Building) */}
      <div className="flex justify-center gap-4 my-4">
        {/* Status Filter */}
        <select
          className="select select-bordered border-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Bins</option>
          <option value="warning">Warning</option>
          <option value="error">Critical</option>
        </select>

        {/* Building Filter */}
        <select
          className="select select-bordered border-2"
          value={buildingFilter}
          onChange={(e) => setBuildingFilter(e.target.value)}
        >
          <option value="all">All Buildings</option>
          {buildings.map((building) => (
            <option key={building} value={building}>
              {building}
            </option>
          ))}
        </select>
      </div>

      {/* 🗂️ Bin Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredData.map((bin) => (
          <GarbageCard key={bin._id} bin={bin} onClick={setSelectedBin} />
        ))}
      </div>

      {/* 📊 Graph Modal */}
      {selectedBin && (
        <BinGraphModal
          bin={selectedBin}
          onClose={() => setSelectedBin(null)}
        />
      )}
    </div>
  );
};

export default GarbageList;
