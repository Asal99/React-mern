// // import { useEffect, useState } from "react";
// // import { BlogCard } from "../cards/BlogCard";

// // export const BlogPage = () => {
// //   const [blogs, setBlogs] = useState([]);

// //   useEffect(() => {
// //     const storedBlogs = localStorage.getItem("blogs");
// //     setBlogs(storedBlogs ? JSON.parse(storedBlogs) : []);
// //   }, []);

// //   return (
// //     <div className="max-w-6xl mx-auto px-4 py-10">
// //       <h1 className="text-3xl font-bold mb-8">Blogs</h1>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
// //         {blogs.length > 0 ? (
// //           blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
// //         ) : (
// //           <p>No blogs available</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };
// import { useEffect, useState } from "react";
// import { Button, TextInput, Select, Textarea } from "@mantine/core";
// import { useForm } from "@mantine/form";
// import axios from "axios";

// export const BlogPage = () => {
//   const [categories, setCategories] = useState([]);

//   const fetchCategories = async () => {
//     const res = await axios.get("http://localhost:8000/category/getAll");
//     setCategories(res.data);
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const form = useForm({
//     initialValues: {
//       title: "",
//       description: "",
//       author: "",
//       image: "",
//       category: "",
//     },

//     validate: {
//       title: (value) =>
//         value.trim().length < 3 ? "Title must be at least 3 characters" : null,

//       description: (value) =>
//         value.trim().length < 10
//           ? "Description must be at least 10 characters"
//           : null,

//       author: (value) => (value ? null : "Author is required"),

//       category: (value) => (value ? null : "Please select a category"),
//     },
//   });

//   const handleSubmit = async (values) => {
//     try {
//       const res = await axios.post("http://localhost:8000/blog/create", values);

//       console.log(res.data);

//       form.reset();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex justify-center mt-10">
//       <form
//         onSubmit={form.onSubmit(handleSubmit)}
//         className="flex flex-col gap-4 w-100"
//       >
//         <TextInput
//           label="Title"
//           placeholder="Enter blog title"
//           {...form.getInputProps("title")}
//         />

//         <Textarea
//           label="Description"
//           placeholder="Enter blog description"
//           {...form.getInputProps("description")}
//         />

//         <TextInput
//           label="Author"
//           placeholder="Enter author"
//           {...form.getInputProps("author")}
//         />

//         <Select
//           label="Category"
//           placeholder="Select category"
//           data={categories.map((item) => ({
//             value: item._id,
//             label: item.title,
//           }))}
//           {...form.getInputProps("category")}
//         />

//         <Button type="submit">Create Blog</Button>
//       </form>
//     </div>
//   );
// };

// import { useEffect, useState } from "react";

// export const BlogPage = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const storedBlogs = localStorage.getItem("blogs");

//     if (storedBlogs) {
//       setBlogs(JSON.parse(storedBlogs));
//     }
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto py-10">
//       <h1 className="text-3xl font-bold mb-8">Blogs</h1>

//       <div className="grid md:grid-cols-3 gap-6">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="border rounded-xl overflow-hidden shadow"
//           >
//             <img
//               src={blog.image}
//               alt={blog.title}
//               className="h-48 w-full object-cover"
//             />

//             <div className="p-4">
//               <h2 className="font-bold text-lg">{blog.title}</h2>

//               <p className="text-gray-600 text-sm">{blog.description}</p>

//               <p className="text-xs mt-2 text-gray-400">By {blog.author}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:8000/blog/getAll");
      setBlogs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleLike = (id) => {
    const updatedBlogs = blogs.map((blog) =>
      blog._id === id ? { ...blog, likes: (blog.likes || 0) + 1 } : blog,
    );

    setBlogs(updatedBlogs);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-10">Blogs</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <h2 className="text-xl font-bold">{blog.title}</h2>

              <p className="text-sm text-gray-500 mb-2">By {blog.author}</p>

              <p className="text-gray-700 line-clamp-3">{blog.description}</p>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleLike(blog._id)}
                  className="text-red-500 font-semibold"
                >
                  ❤️ {blog.likes || 0}
                </button>

                <Link
                  to={`/blog/${blog._id}`}
                  className="text-blue-600 font-semibold"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
