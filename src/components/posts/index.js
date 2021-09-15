import { useState, useEffect } from "react";
import Card from "./card";
import Details from "./details";

// Fetch and display posts list from api
export default function Posts() {
  const [posts, setPosts] = useState(null);
  const [postId, setPostId] = useState(null);
  const [showPostDetails, setShowPostDetails] = useState(false);

  const fetchUrl = "https://jsonplaceholder.typicode.com";

  // Get posts data from api
  const getData = () =>
    fetch(`${fetchUrl}/posts`)
      .then((res) => res.json())
      .catch((error) => console.log(error.message));

  useEffect(() => {
    getData().then((data) => setPosts(data));
  }, []);

  return (
    <div className="z-10 mx-auto w-3/4">
      {showPostDetails ? (
        <Details postId={postId} />
      ) : (
        <div className="p-4 -my-10 mx-auto grid grid-rows-1 gap-4">
          {/* Traverse through posts and display title */}
          {posts?.map((post) => (
            <div key={post.id}>
              <Card
                post={post}
                toggleDetails={setShowPostDetails}
                getPostId={setPostId}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
