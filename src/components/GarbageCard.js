import React from "react";

const binImage = process.env.PUBLIC_URL + "/images/bin.png";

const GarbageCard = ({ bin }) => {
  
   // Battery Status Color Logic
   const batteryColor =
   bin.battery > 50 ? "text-green-500" : bin.battery > 20 ? "text-yellow-500" : "text-red-500";

 // Fill Level Status Color
 
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
   
      {/* Garbage Bin Image with Radial Progress Inside */}
      <div className="relative flex justify-center items-center mt-4">
        {/* Bin Image */}
        <img src={binImage} alt="Garbage Bin" className="w-32 h-36 object-contain" />

        {/* Radial Progress Positioned Inside the Bin */}
        <div className="absolute top-15 flex justify-center items-center">
          <div className="radial-progress text-black-500" style={{ "--value": bin.level, "--size": "3rem" }}>
            <span className={`text-lg font-bold text-black-300`}>{bin.level}%</span>
          </div>
        </div>
      </div>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{bin.location}</h2>
      <p className="text-gray-600">
          <strong>Weight:</strong> {bin.weight} kg
      </p>
      <div className="card-actions">
        🔋 Battery: {bin.battery}%
      </div>
    </div>
  </div>
  );
};

export default GarbageCard;
