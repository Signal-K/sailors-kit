import React from "react";

interface OtherTasksContainer {
  tasks: string[];
}

const OtherTasksContainer = ({ tasks }: OtherTasksContainer) => {
  return (
    <div className="p-4 border-t-2 border-black overflow-x-auto">
      <div className="flex space-x-4">
        {tasks.map((task, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 p-4 rounded-lg flex items-center justify-center min-w-32 h-16"
          >
            {task}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OtherTasksContainer;
