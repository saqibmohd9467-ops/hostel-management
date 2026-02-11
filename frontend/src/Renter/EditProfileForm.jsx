import React, { useState } from "react";

const EditProfileForm = ({ renter, onCancel }) => {
  const [formData, setFormData] = useState(renter);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
    onCancel(); // close form after save
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-xl font-semibold mb-6 text-slate-800">
        Edit Profile
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
        <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
        <InputField label="Aadhaar" name="adhar" value={formData.adhar} onChange={handleChange} />
        <InputField label="Purpose" name="purpose" value={formData.purpose} onChange={handleChange} />

        <div className="md:col-span-2">
          <InputField label="Address" name="address" value={formData.address} onChange={handleChange} />
        </div>

        <div className="md:col-span-2 flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-md bg-slate-200 text-slate-700 hover:bg-slate-300 transition"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </div>

      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label className="block text-sm text-slate-600 mb-1">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
);

export default EditProfileForm;
