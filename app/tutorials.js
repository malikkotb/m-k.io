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
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
