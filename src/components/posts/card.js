export default function Card(props) {
  return (
    <div className="bg-green-100 rounded-md shadow-md">
      <h2
        className="p-1 pl-2 text-2xl font-bold capitalize text-green-900 cursor-pointer hover:text-green-600"
        onClick={() => {
          props.toggleDetails(true);
          props.getPostId(props.post.id);
        }}
      >
        {props.post.title}
      </h2>
    </div>
  );
}
