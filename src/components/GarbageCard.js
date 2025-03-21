import React from "react";

const binImage = process.env.PUBLIC_URL + "/images/bin.png";

const GarbageCard = ({ bin, onClick }) => {
  const latestReading = bin.readings?.[bin.readings.length - 1];

  if (!latestReading) {
    return (
      <div className="relative card bg-base-100 w-[300px] md:w-[350px] lg:w-[400px] bg-white shadow-lg rounded-lg p-4 border border-neutral-500">
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

  const showFullBadge = latestReading.level > 85;
  const showHeavyBadge = latestReading.weight > 15;

  return (
    <div
      onClick={() => onClick(bin)}
      className="relative card bg-base-100 w-[300px] md:w-[350px] lg:w-[400px] bg-white shadow-lg rounded-lg p-4 border border-neutral-500 cursor-pointer hover:shadow-xl transition"
    >
  {/* 🚩 Dynamic Badge (Top-Left) */}
{/* 🚩 Dynamic Multi-Badges (Top-Left) */}
<div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
  {latestReading.level >= 90 && (
    <div className="badge badge-error flex items-center gap-1 px-2 py-1 text-sm">
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <g fill="currentColor">
          <path
            d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></path>
          <line x1="9" y1="6.5" x2="9" y2="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" />
        </g>
      </svg>
      Full
    </div>
  )}

  {latestReading.level >= 70 && latestReading.level < 85 && (
    <div className="badge badge-warning flex items-center gap-1 px-2 py-1 text-sm">
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <g fill="currentColor">
          <path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <line x1="9" y1="6.5" x2="9" y2="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" />
        </g>
      </svg>
      Almost Full
    </div>
  )}

  {latestReading.weight >= 15 && (
    <div className="badge badge-error flex items-center gap-1 px-2 py-1 text-sm">
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <g fill="currentColor">
          <path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <line x1="9" y1="6.5" x2="9" y2="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" />
        </g>
      </svg>
      Heavy
    </div>
  )}

  {latestReading.weight >= 8 && latestReading.weight < 15 && (
    <div className="badge badge-warning flex items-center gap-1 px-2 py-1 text-sm">
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
        <g fill="currentColor">
          <path d="M7.638,3.495L2.213,12.891c-.605,1.048,.151,2.359,1.362,2.359H14.425c1.211,0,1.967-1.31,1.362-2.359L10.362,3.495c-.605-1.048-2.119-1.048-2.724,0Z"
            fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <line x1="9" y1="6.5" x2="9" y2="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9,13.569c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" fill="currentColor" />
        </g>
      </svg>
      Getting Heavy
    </div>
  )}
</div>



      {/* Image & Radial Progress */}
      <div className="relative flex justify-center items-center mt-4">
        <img
          src={binImage}
          alt="Garbage Bin"
          className="w-32 h-36 object-contain"
        />
        <div className="absolute top-15 flex justify-center items-center">
          <div
            className="radial-progress text-black-500"
            style={{ "--value": latestReading.level, "--size": "3rem" }}
          >
            <span className="text-lg font-bold text-black-300">
              {latestReading.level}%
            </span>
          </div>
        </div>
      </div>

      {/* Info Content */}
      <div className="card-body items-center text-center">
        <h2 className="card-title">{bin.location}</h2>
        <p className="text-gray-600">
          <strong>Weight:</strong> {latestReading.weight} kg
        </p>
        <div className="card-actions">
          🔋{" "}
          <span className={batteryColor}>
            Battery: {latestReading.battery}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default GarbageCard;
