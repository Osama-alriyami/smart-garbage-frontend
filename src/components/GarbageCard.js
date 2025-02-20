import React from "react";

const GarbageCard = ({ bin }) => {
  // Color indicators for battery level
  const batteryClass =
    bin.battery > 50 ? "text-green-500" : bin.battery > 20 ? "text-yellow-500" : "text-red-500";
  
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold">{bin.location}</h2>
      <p>Weight: <strong>{bin.weight} kg</strong></p>
      <p>Fill Level: <strong>{bin.level} %</strong></p>
      <p className={`font-bold ${batteryClass}`}>Battery: {bin.battery} %</p>
    </div>
  );
};

export default GarbageCard;
