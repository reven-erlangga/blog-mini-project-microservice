import React, { useEffect, useState } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);

    console.log(res.data);
  };

  useEffect(() => {
    fetchPosts();
    console.log("Testing")
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content">
      {renderedPosts}
    </div>
  );
}
