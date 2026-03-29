import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdminPage = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const categories = ["Tech", "Design", "Programming", "AI", "Lifestyle"];

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogs");
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  const saveBlogs = (data) => {
    localStorage.setItem("blogs", JSON.stringify(data));
  };

  const addBlog = () => {
    if (!title || !author || !description || !category) {
      alert("Please fill all fields");
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      author,
      description,
      category,
      image,
      createdAt: new Date().toLocaleDateString(),
    };

    const updated = [...blogs, newBlog];
    setBlogs(updated);
    saveBlogs(updated);

    setTitle("");
    setAuthor("");
    setDescription("");
    setCategory("");
    setImage("");
  };

  const deleteBlog = (id) => {
    const filtered = blogs.filter((b) => b.id !== id);
    setBlogs(filtered);
    saveBlogs(filtered);
  };

  const editBlog = (blog) => {
    setTitle(blog.title);
    setAuthor(blog.author);
    setDescription(blog.description);
    setCategory(blog.category);
    setImage(blog.image);

    deleteBlog(blog.id);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* FORM */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-10">
        <h2 className="font-semibold mb-4">Create / Edit Blog</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="border p-2 rounded-lg"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="border p-2 rounded-lg"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <select
            className="border p-2 rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            className="border p-2 rounded-lg"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <textarea
            className="border p-2 rounded-lg md:col-span-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          onClick={addBlog}
          className="mt-4 bg-black text-white px-6 py-2 rounded-lg"
        >
          Save Blog
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow-lg rounded-2xl overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Author</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-t">
                <td className="p-3 font-medium">{blog.title}</td>
                <td className="p-3">{blog.author}</td>
                <td className="p-3">{blog.category}</td>
                <td className="p-3">{blog.createdAt}</td>

                <td className="p-3 space-x-4">
                  <button
                    onClick={() => editBlog(blog)}
                    className="text-blue-600 font-semibold"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="text-red-600 font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => navigate("/blog")}
        className="mt-4 bg-black text-white px-6 py-2 rounded-lg"
      >
        Go To Blogs
      </button>
    </div>
  );
};
