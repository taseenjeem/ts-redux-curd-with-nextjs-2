"use client";
import { RootState } from "@/libs/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";

const AllUsersBtn = () => {
  const { users } = useSelector((state: RootState) => state.users);

  return (
    <>
      <Link
        href={`/all-humans`}
        className="bg-blue-300 py-2 px-3 rounded-md hover:bg-blue-900 hover:text-white duration-300"
      >
        Show all humans ({users.length})
      </Link>
    </>
  );
};

export default AllUsersBtn;
