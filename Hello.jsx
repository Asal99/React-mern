import { useState } from "react";

export const Hello = () => {
  const [users] = useState([
    { id: 1, name: "Asal", skills: "React" },
    { id: 2, name: "Anuj", skills: "HTML & CSS" },
    { id: 3, name: "Akash", skills: "DOM & JS" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-red-50 text-3xl font-bold underline">Hello world!</h1>

      <div className="flex gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-red-50 rounded-lg shadow-md p-4 w-48"
          >
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500 mt-1">{user.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
