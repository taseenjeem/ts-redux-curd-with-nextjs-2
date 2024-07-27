"use client";
import { RootState, AppDispatch } from "@/libs/redux/store";
import { editUser } from "@/libs/redux/features/user/actions";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface User {
  id: string;
  name: string;
  email: string;
  age: string;
  gender: string;
}

interface EditBtnProps {
  userDetails: User;
}

const EditBtn: React.FC<EditBtnProps> = ({ userDetails }) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(userDetails);
  const { loading } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editUser(formData));
    setOpenModal(false);
    toast.success("Human Edited 👍🏽");
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(!openModal)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Edit
      </button>

      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur !ml-0">
          <div className="bg-gray-200 p-8 rounded-lg max-w-lg w-full">
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-2xl font-bold">Edit a human 🙋🏽‍♂️</h1>
              <button
                onClick={() => setOpenModal(false)}
                className="bg-red-500 text-white size-10 rounded-full"
              >
                X
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="age">Age</label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="gender">Gender</label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="rounded-md"
                  />
                </div>
              </div>
              {loading ? (
                <button
                  disabled
                  className="bg-blue-300 w-full p-3 rounded-md hover:bg-blue-900 hover:text-white duration-300 mt-10"
                >
                  Saving...
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-300 w-full p-3 rounded-md hover:bg-blue-900 hover:text-white duration-300 mt-10"
                >
                  Edit Data
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditBtn;
