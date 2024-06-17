import React, { useEffect, useRef, useState } from "react";
import BlogModal from "./BlogModal";
import blogData from "../../data/blogData.json";

interface Blog {
  id: number;
  title: string;
  summary: string;
  content: string;
}

const BlogList: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const myElementRef = useRef<HTMLDivElement>(null);

  const handleBlogClick = (blog: Blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  useEffect(() => {
    if (selectedBlog?.id && myElementRef.current) {
      myElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedBlog?.id]);
  console.log(blogData);
  return (
    <>
      <div
        ref={myElementRef}
        className="h-[20vh] bg-cover bg-center bg-backfeoung-image_blog text-center relative"
      >
        <div className="h-[20vh] flex flex-col pt-16 bg-gradient-to-b from-[#75917bd3] to-[#75917b48]">
          <h3 className="text-[24px] md:text-[36px] font-bold text-white ">
            Calraid Blogs
          </h3>
        </div>
      </div>
      <div className="my-8 w-full sm:w-[90%] md:w-[80%] flex flex-wrap gap-8 justify-center mx-auto">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="mb-4 border shadow-2xl border-gray-300 rounded cursor-pointer hover:bg-gray-100  w-[17rem]"
            onClick={() => handleBlogClick(blog)}
          >
            <div className="text-center flex justify-center h-[17rem] w-[16.8rem] object-fill bg-cover">
              <img
                src={`/blog_${blog.id}.jpg`}
                alt="plan 4"
                className={"rounded object-fill bg-cover"}
              />
            </div>
            <div className="text-center my-2">
              <h5
                className={`encode-sans-semi-condensed-bold text-[#75917B]  my-1`}
              >
                {blog.title}
              </h5>
              <p
                className={`encode-sans-semi-condensed-regulari my-1 line-clamp-4"
              }`}
              >
                {blog.summary}
              </p>
              <p className="underline">Read More...</p>
            </div>
          </div>
        ))}
        {selectedBlog && (
          <BlogModal blog={selectedBlog} closeModal={closeModal} />
        )}
      </div>
    </>
  );
};

export default BlogList;
