import React from "react";
import GarbageCard from "./GarbageCard";

const GarbageList = ({ garbageData }) => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {garbageData.length > 0 ? (
        garbageData.map((bin) => <GarbageCard key={bin._id} bin={bin} />)
      ) : (
        <p className="text-center col-span-3">No data available</p>
      )}
      </div>
    </div>
    
  );
};

export default GarbageList;
