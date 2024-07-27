"use client";
import Loading from "@/components/global/Loading";
import UserDetailCard from "@/components/page/user-details/UserDetailCard";
import { showUsers } from "@/libs/redux/features/user/actions";
import { AppDispatch, RootState } from "@/libs/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(showUsers());
  }, [dispatch]);

  if (loading) return <Loading />;

  return (
    <>
      {users.length <= 0 ? (
        <div className="min-h-screen w-full flex items-center justify-center">
          <h1 className="text-3xl font-bold">
            There are noooo humans😭!! Please add some humans
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5 px-10 my-10">
          {users?.map((item) => (
            <UserDetailCard key={item?.id} userDetails={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
