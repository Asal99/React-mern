//

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/blog/getAll`);
      const foundBlog = res.data.find((b) => b._id === id);
      setBlog(foundBlog);
      setComments(foundBlog?.comments || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const addComment = () => {
    if (!comment.trim()) return;

    const newComments = [...comments, comment];
    setComments(newComments);
    setComment("");
  };

  const likeBlog = () => {
    setBlog({ ...blog, likes: (blog.likes || 0) + 1 });
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <div className="w-full h-96 relative">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="max-w-4xl mx-auto px-6 pb-10 text-white">
            <h1 className="text-4xl font-bold">{blog.title}</h1>
            <p className="mt-2">By {blog.author}</p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={() => navigate("/blog")}
          className="mb-6 text-blue-600 font-semibold"
        >
          ← Back to blogs
        </button>

        <div className="bg-white p-8 rounded-xl shadow">
          <p className="text-lg text-gray-700 whitespace-pre-line">
            {blog.description}
          </p>

          {/* LIKE */}
          <button
            onClick={likeBlog}
            className="mt-6 text-red-500 font-semibold"
          >
            ❤️ Like {blog.likes || 0}
          </button>
        </div>

        {/* COMMENTS */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Comments</h3>

          <div className="flex gap-3 mb-4">
            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
              className="border p-2 flex-1 rounded"
            />

            <button
              onClick={addComment}
              className="bg-black text-white px-4 py-2 rounded"
            >
              Post
            </button>
          </div>

          {comments.map((c, i) => (
            <div key={i} className="border-b py-2 text-gray-700">
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
