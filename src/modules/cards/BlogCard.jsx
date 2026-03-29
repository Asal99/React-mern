import { useNavigate } from "react-router-dom";

export const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${blog.id}`)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition duration-300"
    >
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs bg-gray-200 px-2 py-1 w-fit rounded">
          {blog.category}
        </span>

        <h2 className="font-bold text-lg">{blog.title}</h2>

        <p className="text-sm text-gray-600 line-clamp-1">{blog.description}</p>

        <div className="text-xs text-gray-400 mt-2">By {blog.author}</div>
      </div>
    </div>
  );
};
