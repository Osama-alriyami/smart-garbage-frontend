import React from "react";
import { useDispatch } from "react-redux";
import { addGarbage } from "../store/garbageSlice";
import AddGarbageForm from "../components/AddGarbageForm";

const AddGarbage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData) => {
    dispatch(addGarbage(formData));
  };

  return (
    <div className="p-4">
      <AddGarbageForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddGarbage;
