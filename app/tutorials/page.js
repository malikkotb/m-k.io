import React from "react";

export default function tutorials() {
  const tutorials = [
    { title: "Tutorial 1", content: "content 1" },
    { title: "Tutorial 2", content: "Content 2" },
    { title: "Tutorial 3", content: "Content 3" },
  ];
  return (
    <div>
      <h1 className="text-3xl text-center">Tutorials</h1>
      <div className="grid grid-cols-2">
        <ul>
          {tutorials.map((blog, index) => (
            <div className="border h-50 h-52 w-52 rounded-xl border-blue-500">
              <li key={index}>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
