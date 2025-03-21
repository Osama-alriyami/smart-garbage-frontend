import React, { useState } from "react";
import GarbageCard from "./GarbageCard";
import BinGraphModal from "./BinGraphModal";

const GarbageList = ({ garbageData }) => {
  const [selectedBin, setSelectedBin] = useState(null);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        {garbageData.map(bin => (
          <GarbageCard key={bin._id} bin={bin} onClick={setSelectedBin} />
        ))}
      </div>

      {selectedBin && (
        <BinGraphModal bin={selectedBin} onClose={() => setSelectedBin(null)} />
      )}
    </div>
  );
};

export default GarbageList;
