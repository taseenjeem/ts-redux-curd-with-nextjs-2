import React from "react";

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
  const handleEdit = () => {
    // Handle edit logic
    console.log("Editing user:", userDetails);
  };

  return (
    <button onClick={handleEdit} className="bg-blue-500 text-white p-2 rounded">
      Edit
    </button>
  );
};

export default EditBtn;
