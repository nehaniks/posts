import { useState, useEffect } from "react";

const fetchUrl = "https://jsonplaceholder.typicode.com";

export default function Posts() {
  const [posts, setPosts] = useState(null);
  const getData = () => fetch(`${fetchUrl}/posts`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts List</h1>
      {posts?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
