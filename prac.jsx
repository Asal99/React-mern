// import { useEffect, useState } from "react";
// import { BlogCard } from "../cards/BlogCard";

// export const BlogPage = () => {
//   const [user, setUser] = useState({});
//   const [blogs, setBlogs] = useState([]);

//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [image, setImage] = useState("");

//   const categories = ["Tech", "Design", "Programming", "AI", "Lifestyle"];

//   // user
//   useEffect(() => {
//     localStorage.setItem(
//       "userdata",
//       JSON.stringify({ name: "asal", address: "thankot" }),
//     );
//     setUser(JSON.parse(localStorage.getItem("userdata")));
//   }, []);

//   // blogs
//   useEffect(() => {
//     const storedBlogs = localStorage.getItem("blogs");
//     setBlogs(storedBlogs ? JSON.parse(storedBlogs) : []);
//   }, []);

//   const addBlog = () => {
//     if (!title || !author || !description || !category) {
//       alert("Please enter all fields");
//       return;
//     }

//     const newBlog = {
//       id: Date.now(),
//       title,
//       author,
//       description,
//       category,
//       image,
//     };

//     const updatedBlogs = [...blogs, newBlog];
//     setBlogs(updatedBlogs);
//     localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

//     // clear form
//     setTitle("");
//     setAuthor("");
//     setDescription("");
//     setCategory("");
//     setImage("");
//   };

//   const updateToLocal = () => {
//     localStorage.setItem("blogs", JSON.stringify(blogs));
//     alert("Blogs updated to localStorage ");
//   };

//   const deleteLocal = () => {
//     localStorage.removeItem("blogs");
//     setBlogs([]);
//   };
//   const deleteBlog = (id) => {
//     const filtered = blogs.filter((blog) => blog.id !== id);
//     setBlogs(filtered);
//     localStorage.setItem("blogs", JSON.stringify(filtered));
//   };

//   const editBlog = (blog) => {
//     setTitle(blog.title);
//     setAuthor(blog.author);
//     setDescription(blog.description);
//     setCategory(blog.category);
//     setImage(blog.image);

//     deleteBlog(blog.id);
//   };
//   return (
//     <div className="mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Welcome {user.name}</h1>
//       <div className="max-w-6xl mx-auto px-4 py-10">
//         <div className="flex flex-col gap-4  mb-16">
//           <input
//             className="border p-2 rounded-md"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <input
//             className="border p-2 rounded-md"
//             placeholder="Author"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//           />

//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="border p-2 rounded-md bg-white"
//           >
//             <option value="">Select category</option>
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>

//           <input
//             className="border p-2 rounded-md"
//             placeholder="Image URL"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//           />

//           <textarea
//             className="border p-2 rounded-md"
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />

//           <button
//             onClick={addBlog}
//             className="bg-blue-500 text-white py-2 rounded-md font-semibold"
//           >
//             Add Blog
//           </button>

//           <div className="flex gap-3">
//             <button
//               onClick={updateToLocal}
//               className="bg-green-500 text-white py-4 px-8 rounded-lg flex-1"
//             >
//               Update to Local
//             </button>

//             <button
//               onClick={deleteLocal}
//               className="bg-red-500 text-white py-4 px-8 rounded-lg flex-1"
//             >
//               Delete Blogs
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="bg-blue-500 rounded-lg p-3">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {blogs.map((blog) => (
//             <BlogCard
//               key={blog.id}
//               blog={blog}
//               onDelete={deleteBlog}
//               onEdit={editBlog}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };



// import { useNavigate } from "react-router-dom";

// export const BlogCard = ({ blog, onDelete, onEdit }) => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-white mt-6 rounded-2xl overflow-hidden border shadow-md hover:shadow-lg transition flex flex-col">
//       <div
//         onClick={() => navigate(`/blog/${blog.id}`)}
//         className="cursor-pointer"
//       >
//         <div className="w-full h-52 overflow-hidden">
//           <img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <div className="p-6 flex flex-col gap-4">
//           <span className="text-xs bg-gray-100 px-4 py-1.5 rounded-full w-fit">
//             {blog.category}
//           </span>

//           <h3 className="text-xl font-semibold">{blog.title}</h3>

//           <p className="text-sm text-gray-500">
//             By <span className="font-medium">{blog.author}</span>
//           </p>

//           <p className="text-sm text-gray-600 line-clamp-3">
//             {blog.description}
//           </p>
//         </div>
//       </div>

//       {/* ACTIONS (not clickable) */}
//       <div className="flex gap-4 p-6 border-t">
//         <button
//           onClick={() => onEdit(blog)}
//           className="flex-1 py-3 bg-blue-500 text-white rounded-lg"
//         >
//           Edit
//         </button>

//         <button
//           onClick={() => onDelete(blog.id)}
//           className="flex-1 py-3 bg-red-500 text-white rounded-lg"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };



