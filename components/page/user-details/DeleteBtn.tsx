"use client";
import { deleteUser } from "@/libs/redux/features/user/actions";
import { AppDispatch } from "@/libs/redux/store";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface DeleteBtnProps {
  userId: string;
}

const DeleteBtn: React.FC<DeleteBtnProps> = ({ userId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    dispatch(deleteUser(userId));
    toast.success("Human deleted 😭");
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white p-2 rounded"
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
