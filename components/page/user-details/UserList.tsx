"use client";
import UserDetailCard from "@/components/global/UserDetailCard";
import { showUsers } from "@/libs/redux/features/user/actions";
import { AppDispatch, RootState } from "@/libs/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(showUsers());
  }, [dispatch]);

  return (
    <>
      <div className="grid grid-cols-4 gap-5 px-10 my-10">
        {users?.map((item) => (
          <UserDetailCard key={item?.id} userDetails={item} />
        ))}
      </div>
    </>
  );
};

export default UserList;
