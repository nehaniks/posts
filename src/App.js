import "tailwindcss/tailwind.css";
import Posts from "./components/posts";

function App() {
  return (
    <div className="bg-green-50">
      <h1 className="py-4 w-full h-32 text-5xl font-extrabold text-center text-green-50 bg-green-900 text-opacity-90">
        POSTS
      </h1>
      <Posts />
    </div>
  );
}

export default App;
