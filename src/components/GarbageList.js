import React from "react";
import GarbageCard from "./GarbageCard";

const GarbageList = ({ garbageData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {garbageData.length > 0 ? (
        garbageData.map((bin) => <GarbageCard key={bin._id} bin={bin} />)
      ) : (
        <p className="text-center col-span-3">No data available</p>
      )}
    </div>
  );
};

export default GarbageList;
