import React from "react";

interface User {
  id: string;
  name: string;
  email: string;
  age: string;
  gender: string;
}

interface UserDetailCardProps {
  userDetails: User;
}

const UserDetailCard: React.FC<UserDetailCardProps> = ({ userDetails }) => {
  return (
    <div className="bg-gray-200 p-8 rounded-lg w-full space-y-2">
      <h2 className="text-xl font-bold">{userDetails.name}</h2>
      <p>Email: {userDetails.email}</p>
      <p>Age: {userDetails.age}</p>
      <p>Gender: {userDetails.gender}</p>
      <div className="flex justify-end space-x-3">
        <button className="p-2 bg-blue-500 rounded-lg text-white">Edit</button>
        <button className="p-2 bg-red-500 rounded-lg text-white">Delete</button>
      </div>
    </div>
  );
};

export default UserDetailCard;
