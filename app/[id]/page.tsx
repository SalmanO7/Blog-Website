"use client";
import React, { useState, useEffect } from "react";
import { blogsData } from "../components/blogCards/BlogData";
import Markdown from "react-markdown";
import Image from "next/image";

const BlogDetail: React.FC = (props: any) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<string[]>([]);

  useEffect(() => {
    const savedComments = localStorage.getItem(`comments-${props.params.id}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [props.params.id]);

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (comment.trim() !== "") {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setComment(""); // Clear input
      localStorage.setItem(`comments-${props.params.id}`, JSON.stringify(updatedComments));
    }
  };

  const blogPost = blogsData.find(
    (blog) => blog.id === parseInt(props.params.id as string)
  );

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="w-full flex justify-center items-center pt-10 flex-col">
      <div className="md:w-2/3 2xl:w-2/4 flex justify-center items-start px-5 sm:px-12 flex-col">
        <div className="flex-col flex justify-center items-center w-full">
          <Image className="w-full" src={blogPost.image} alt={blogPost.title} />
          <div className="py-2">
            <div className="pr-5 text-lg sm:text-2xl md:text-3xl lg:text-4xl py-4 font-semibold">
              <Markdown>{blogPost.title}</Markdown>
            </div>
            <Markdown className="text-gray-400">{blogPost.author}</Markdown>

            <div className="py-2">
              <Markdown className="font-semibold">{blogPost.content}</Markdown>
            </div>
            <Markdown>{blogPost.description}</Markdown>
          </div>
        </div>
        <div className="py-3">
          <Markdown className="font-semibold text-start">{blogPost.tags}</Markdown>
        </div>

        <div className="flex-col flex w-full pt-10">
          <h2 className="text-lg text-center sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Comment Section
          </h2>

          {/* Display Comments */}
          <div className="flex justify-start items-start flex-col gap-4 py-10">
            <ul className="border w-full p-3 rounded-lg flex flex-col gap-2">
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <li key={index} className="border-b py-1 px-2">
                    {comment}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No comments yet. Be the first to comment!</li>
              )}
            </ul>
          </div>

          {/* Add Comment Form */}
          <form
            className="flex flex-col justify-center items-end gap-y-3"
            onSubmit={handleCommentSubmit}
          >
            <textarea
              cols={4}
              rows={4}
              className="text-black w-full border-2 border-gray-400 bg-zinc-300 outline-none placeholder:text-black rounded-lg py-1 px-2"
              placeholder="Your Comment ..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-[#1c9b77] py-1 px-3 text-sm xl:text-base rounded-lg hover:bg-gray-400 transition transform"
            >
              Comment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
