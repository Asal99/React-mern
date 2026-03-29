import { useEffect, useState } from "react";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  // const [count, setCount] = useState(0);
  const [state, setState] = useState("tesla");
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${state}&sortBy=publishedAt&apiKey=07fe6c17b56f4345b1c6003bcae87cae`,
      );
      const finalResult = await response.json();
      setUsers(finalResult.articles);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  // console.log(users);
  return (
    <>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={fetchUsers}>Fetch data</button>
      {users?.map((item, index) => (
        <div key={index}>
          <img src={item.urlToImage} alt="" />
          <h3>{item?.title}</h3>
        </div>
      ))}
    </>
  );
};

//  const fetchJson = async () => {
//     try {
//       const res = await fetch("/ProductJson.json");

//       console.log(res);
//       const data = await res.json();
//       setJsonArray(data.data);
//       setPage(data.currentPage);
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
