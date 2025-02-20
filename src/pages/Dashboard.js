import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGarbage } from "../store/garbageSlice";
import GarbageList from "../components/GarbageList";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.garbage);

  useEffect(() => {
    dispatch(fetchGarbage());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Garbage Bin Status</h1>
      <GarbageList garbageData={data} />
    </div>
  );
};

export default Dashboard;
