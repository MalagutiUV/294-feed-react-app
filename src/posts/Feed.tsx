import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";

function Feed() {
  const [posts, setPosts] = useState([]);

  const [postsLoadedWithAxios, setPostsLoadedWithAxios] = useState([]);

  // Dieser Effekt lädt die Posts, wenn die Komponente geladen wird, mit fetch
  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch("https://react-vid-app.vercel.app/api/posts", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();

        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadPosts();
  }, []);

  // Alternative: Laden der Posts mit axios
  useEffect(() => {
    async function loadPostsWithAxios() {
      const response = await axios.get(
        "https://react-vid-app.vercel.app/api/posts",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setPostsLoadedWithAxios(response.data);
    }

    loadPostsWithAxios();
  }, []);

  return (
    <div>
      <h1>Feed loaded With Fetch</h1>
      {posts.map((post: any) => (
        <PostItem key={post.id} post={post} />
      ))}

      <h1>Feed loaded With Axios</h1>
      {postsLoadedWithAxios.map((post: any) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
