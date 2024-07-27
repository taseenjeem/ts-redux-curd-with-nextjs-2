"use client";
import React, { useState } from "react";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-md"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            className="rounded-md"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            name="gender"
            className="rounded-md"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-300 w-full p-3 rounded-md hover:bg-blue-900 hover:text-white duration-300 mt-10"
      >
        Submit
      </button>
    </form>
  );
};

export default AddUserForm;
