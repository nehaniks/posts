import { comment } from "postcss";
import { useState, useEffect } from "react";

export default function Details(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [comments, setComments] = useState(null);

  const fetchUrl = "https://jsonplaceholder.typicode.com";

  const getDetails = () =>
    fetch(`${fetchUrl}/posts/${props.postId}`).then((res) => res.json());

  const getComments = () =>
    fetch(`${fetchUrl}/comments`)
      .then((res) => res.json())
      .catch((error) => console.log(error.message));

  useEffect(() => {
    getDetails().then((data) => {
      setTitle(data.title);
      setBody(data.body);
    });

    getComments().then((data) => {
      setComments(
        data.filter((comment) => {
          if (comment.postId === props.postId) {
            return comment;
          }
        })
      );
    });

    console.log(comments);
  }, []);

  return (
    <div>
      <h1 className="my-4 text-5xl font-black uppercase text-green-900">
        {title}
      </h1>
      <h3 className="my-8 text-2xl font-semibold capitalize text-justify text-green-700">
        {body}
      </h3>
      <div>
        {comments?.map((comment) => (
          <div
            key={comment.id}
            className="my-4 p-2 min-h-32 font-bold rounded-xl shadow-xl text-green-900 bg-green-50"
          >
            <h3 className="text-xl font-black">{comment.name}</h3>
            <h3 className="text-md font-bold">{comment.email}</h3>
            <h3 className="py-2 font-light">{comment.body}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
