import React from "react";

const binImage = process.env.PUBLIC_URL + "/images/bin.png";

const GarbageCard = ({ bin }) => {
  // Get latest reading
  const latestReading = bin.readings?.[bin.readings.length - 1];

  if (!latestReading) {
    return (
      <div className="card bg-base-100 w-[300px] md:w-[350px] lg:w-[400px] bg-white shadow-lg rounded-lg p-4 border border-neutral-500">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{bin.location}</h2>
          <p className="text-red-500">No data available</p>
        </div>
      </div>
    );
  }

  const batteryColor =
    latestReading.battery > 50
      ? "text-green-500"
      : latestReading.battery > 20
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <div className="card bg-base-100 w-[300px] md:w-[350px] lg:w-[400px] bg-white shadow-lg rounded-lg p-4 border border-neutral-500">
      {/* Garbage Bin Image with Radial Progress Inside */}
      <div className="relative flex justify-center items-center mt-4">
        {/* Bin Image */}
        <img src={binImage} alt="Garbage Bin" className="w-32 h-36 object-contain" />

        {/* Radial Progress Positioned Inside the Bin */}
        <div className="absolute top-15 flex justify-center items-center">
          <div
            className="radial-progress text-black-500"
            style={{ "--value": latestReading.level, "--size": "3rem" }}
          >
            <span className={`text-lg font-bold text-black-300`}>
              {latestReading.level}%
            </span>
          </div>
        </div>
      </div>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{bin.location}</h2>
        <p className="text-gray-600">
          <strong>Weight:</strong> {latestReading.weight} kg
        </p>
        <div className="card-actions">
          🔋 <span className={batteryColor}>Battery: {latestReading.battery}%</span>
        </div>
      </div>
    </div>
  );
};

export default GarbageCard;
