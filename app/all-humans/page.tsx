import UserList from "@/components/page/user-details/UserList";

const UsersPage = () => {
  return (
    <section className="min-h-screen mt-20">
      <h1 className="text-center text-3xl font-bold">All humans are here 🙋🏽‍♂️</h1>
      <UserList />
    </section>
  );
};

export default UsersPage;
