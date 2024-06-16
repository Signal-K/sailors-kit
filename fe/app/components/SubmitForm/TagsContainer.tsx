import React from "react";

interface TagsContainerProps {
  tags: string[];
}

const TagsContainer = ({ tags }: TagsContainerProps) => {
  return (
    <div className="p-4 flex flex-wrap gap-2 border-t-2 border-black">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-700 px-2 py-1 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagsContainer;
