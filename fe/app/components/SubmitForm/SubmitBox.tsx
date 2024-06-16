import React from "react";

interface SubmitBoxProps {
  onSubmit: () => void;
}

const SubmitBox = ({ onSubmit }: SubmitBoxProps) => {
  return (
    <div className="bg-white text-blue-700 px-4 py-2 rounded-lg flex items-center justify-center">
      <button
        onClick={onSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-xl w-[100%]"
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitBox;
