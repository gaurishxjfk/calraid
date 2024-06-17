// src/components/BlogModal.tsx
import React from "react";
import { Cross } from "../services/ServiceModal";

interface BlogModalProps {
  blog: {
    title: string;
    content: string;
  };
  closeModal: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ blog, closeModal }) => {
  return (
    <div
      className={`absolute rounded-md top-[20vh] inset-x-0 w-[98%] md:w-[90%] !lg:w-[80%] mx-auto pb-8
                 border-2 border-slate-300 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] p-4 bg-[#ffffff]
                 z-50 bg-opacity-70 backdrop-blur-lg bg-clip-padding backdrop-filter `}
    >
      <button
        className={`absolute right-5 top-3 cursor-pointer `}
        onClick={closeModal}
      >
        <Cross />
      </button>
      <div className="mt-8">
        <div className="encode-sans-semi-condensed-bold text-[#75917B] text-center text-2xl encode-sans-semi-condensed-medium tracking-wide">
          {blog.title}
        </div>
        <div className="text-[18px] text-[#5C5C5C] text-center my-2 ">
          {blog.content}
          <br />
          <br />
          {blog.content}
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
