"use client";
import React, { useState } from 'react';

interface CommentBoxProps {
  setComment: (comment: string) => void;
}

const CommentBox = ({ setComment }: CommentBoxProps) => {
  const [comment, _setComment] = useState<string>('');

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    _setComment(e.target.value);
    setComment(e.target.value)
  };

  return (
    <div className="p-4 border-t-2 border-black">
      <form className="flex flex-col">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Comment (optional)"
          className="w-full p-2 border rounded mb-4 text-black"
          rows={4}
        ></textarea>
      </form>
    </div>
  );
};

export default CommentBox;
