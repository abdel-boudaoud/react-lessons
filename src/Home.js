import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [pending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      });
  }, []);

  console.log(blogs);
  return (
    <div className="home">
      {pending && <p>it's loading....</p>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
