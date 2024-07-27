const AddUserForm = () => {
  return (
    <form>
      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="rounded-md" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="rounded-md" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="age">Age</label>
          <input type="text" id="age" name="age" className="rounded-md" />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" name="gender" className="rounded-md" />
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
