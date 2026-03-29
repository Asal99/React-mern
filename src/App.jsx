// // import "./App.css";
// //import Navbar from "./Navbar";
// // import Footer from "./Footer";
// import { useState } from "react";
// function App() {
//   // let count = 0;
//   // const [name, setName] = useState("Asal");
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState(false);
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(0)}>Reset</button>

//       <button onClick={() => setCount(count + 10)}>Increment by 10</button>
//       {/* <button onClick={() => setName("hello")}>change name</button> */}
//       {name}

//       <button onClick={() => setName(!false)}>Show name </button>
//       {name ? <h1>My name is asal</h1> : ""}
//     </>
//   );
// }

// export default App;
// import Tailwind from "../tailwind";
// import Hello from "../Hello";

import CardData from "./CardData";
import { Hello } from "../Hello";
import TodolistObj from "../Todolistobj";
import { ProductLists } from "./ProductLists";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { DetailPage } from "./DetailPage";
import { UsersList } from "./modules/users/UserLists";
import { NewsLists } from "./modules/news/NewsLists";
import { BlogPage } from "./modules/pages/BlogPage";
import { BlogDetail } from "./modules/pages/BlogDetail";
import { AdminPage } from "./modules/pages/AdminPage";
import { Form } from "../Form";
import { AuthPage } from "./modules/pages/AuthPage";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Main() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<h1>THis is homepage </h1>} />
        <Route path="todolist/:id" element={<TodolistObj />} />
        <Route path="hello" element={<Hello />} />
        <Route path="/product" element={<ProductLists />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/*" element={<h1>Page not found</h1>} />
        <Route path="users" element={<UsersList />} />
        <Route path="news" element={<NewsLists />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="form" element={<Form />} />
        <Route path="auth" element={<AuthPage />} />
      </Routes>
      {/* <Footer /> */}
      {/* <TodolistObj /> */}
      {/* <Tailwind /> */}
      {/* <Hello /> */}
      {/* <CardData /> */}
      {/* <ProductLists /> */}
    </>
  );
}
export default Main;
