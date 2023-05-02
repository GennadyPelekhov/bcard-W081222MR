import React, { useState, MouseEvent } from "react";
import "./setPost.css";

interface Post {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string | Date;
}

const SetPost = () => {
  const INITIAL_POST: Post = {
    title: "",
    subtitle: "",
    author: "",
    createdAt: "",
  };
  const [isLogged, setIsLogged] = useState(false);
  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState<[] | Post[]>([]);

  console.log(isLogged);

  type Event = MouseEvent<HTMLButtonElement>;

  const createNewPost = (e: Event) => {
    e.preventDefault();
    setPosts((prev) => [...prev, { ...post, createdAt: new Date() }]);
    // post.createdAt = new Date();

    return setPost(INITIAL_POST);
  };

  return (
    <>
      <div>
        <button onClick={() => setIsLogged((prev) => (prev = !prev))}>
          {isLogged ? "Logout" : "Login"}
        </button>
        <h1>Title:{post.title}</h1>
        <h2>Subtitle:{post.subtitle}</h2>
        <p>Author: {post.author}</p>
      </div>

      {isLogged && (
        <form>
          <input
            type="text"
            placeholder="Enter the title:"
            value={post.title}
            onChange={(e) =>
              setPost((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Enter the subtitle:"
            value={post.subtitle}
            onChange={(e) =>
              setPost((prev) => ({ ...prev, subtitle: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Enter the author:"
            value={post.author}
            onChange={(e) =>
              setPost((prev) => ({ ...prev, author: e.target.value }))
            }
          />
          <button
            onClick={createNewPost}
            disabled={!post.title || !post.subtitle || !post.author}
          >
            Create Post
          </button>
        </form>
      )}
      {!!posts.length && isLogged && (
        <table>
          <tr>
            <th>No:</th>
            <th>Title:</th>
            <th>Subtitle:</th>
            <th>Author:</th>
            <th>Created at:</th>
          </tr>
          {posts.map((post, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{post.title}</td>
              <td>{post.subtitle}</td>
              <td>{post.author}</td>
              <td>{post.createdAt.toLocaleString()}</td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
};

export default SetPost;
