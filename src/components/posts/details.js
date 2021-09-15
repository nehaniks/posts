import { useState, useEffect } from "react";

export default function Details(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const fetchUrl = "https://jsonplaceholder.typicode.com";

  const getDetails = () =>
    fetch(`${fetchUrl}/posts/${props.postId}`).then((res) => res.json());

  useEffect(() => {
    getDetails().then((data) => {
      setTitle(data.title);
      setBody(data.body);
    });

    console.log(title);
  }, []);

  return (
    <div>
      <h1>Details {title}</h1>
      <h3>{body}</h3>
    </div>
  );
}
