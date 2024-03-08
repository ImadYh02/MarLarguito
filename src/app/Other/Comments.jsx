import Image from "next/image";
import React from "react";

function Comments({ comment, name }) {
  return (
    <div className="p-6 rounded shadow-md dark:bg-gray-900">
      <p>{comment}</p>
      <div className="flex items-center mt-4 space-x-4">
        <Image
          width={12}
          height={12}
          // src={image}
          alt=""
          className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
        />
        <div>
          <p className="text-lg font-semibold">{name}</p>
          {/* <p className="text-sm dark:text-gray-400">CTO of Company Co.</p> */}
        </div>
      </div>
    </div>
  );
}

export default Comments;
