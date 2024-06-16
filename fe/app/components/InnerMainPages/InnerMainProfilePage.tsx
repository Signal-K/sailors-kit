import React from "react";

const InnerMainProfilePage = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden my-4">
        <img
          src=""
          alt="Profile"
          className="w-full h-full object-cover -300"
        />
      </div>
      <h1 className="text-2xl font-semibold mb-2 text-blue-500">John Doe</h1>
      <p className="text-blue-500 mb-4">johndoe@example.com</p>
      <p className="text-center text-gray-700 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default InnerMainProfilePage;
