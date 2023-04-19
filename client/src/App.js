import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

export default function App() {
  return (
    <div className="container">
      Blog App
      <h1>Create a new post</h1>
      <PostCreate />
      <h1>List Post</h1>
      <PostList />
    </div>
  );
}
