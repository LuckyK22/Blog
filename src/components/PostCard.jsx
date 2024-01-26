import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

function PostCard({ $id, title, featuredImage, content }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-inherit border-2 border-stone-400 text-stone-200 rounded-xl p-4 text-left">
        <h2 className="text font-bold pb-2">{title}</h2>
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl object-fit m-auto"
          />
        </div>
        <h2 className="font-semibold">{parse(content)}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
