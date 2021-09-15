import { useState, useEffect } from "react";
import Card from "./card";

const fetchUrl = "https://jsonplaceholder.typicode.com";

export default function Posts() {
  const [posts, setPosts] = useState(null);
  const getData = () => fetch(`${fetchUrl}/posts`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setPosts(data));
  }, []);

  return (
    <div className="mx-auto w-3/4">
      <h1>Posts List</h1>
      <div className="p-4 md:mx-auto lg:mx-4 grid grid-rows-1 md:w-3/4 lg:w-auto lg:grid-cols-1 md:gap-8">
        {posts?.map((post) => (
          <div key={post.id}>
            <Card post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
