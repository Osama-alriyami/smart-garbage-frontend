import React, { useState } from "react";

const AddGarbageForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    location: "",
    weight: "",
    level: "",
    battery: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ location: "", weight: "", level: "", battery: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Add Garbage Data</h2>
      
      <input 
        type="text" name="location" value={form.location} onChange={handleChange} 
        placeholder="Location" required className="block w-full mb-2 p-2 border rounded" 
      />
      <input 
        type="number" name="weight" value={form.weight} onChange={handleChange} 
        placeholder="Weight (kg)" required className="block w-full mb-2 p-2 border rounded" 
      />
      <input 
        type="number" name="level" value={form.level} onChange={handleChange} 
        placeholder="Fill Level (%)" required className="block w-full mb-2 p-2 border rounded" 
      />
      <input 
        type="number" name="battery" value={form.battery} onChange={handleChange} 
        placeholder="Battery (%)" required className="block w-full mb-2 p-2 border rounded" 
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2 w-full">
        Submit
      </button>
    </form>
  );
};

export default AddGarbageForm;
