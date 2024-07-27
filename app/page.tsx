import AddUserForm from "@/components/page/landing-page/AddUserForm";

const page = () => {
  return (
    <>
      <section className="min-h-screen w-full flex justify-center items-center">
        <div className="bg-gray-200 p-8 rounded-lg max-w-lg w-full">
          <h1 className="text-center text-2xl font-bold">Add a human 🙋🏽‍♂️</h1>
          <AddUserForm />
        </div>
      </section>
    </>
  );
};

export default page;
