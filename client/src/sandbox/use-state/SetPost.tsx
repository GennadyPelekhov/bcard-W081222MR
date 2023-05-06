import React, { useState, MouseEvent } from "react";
// import "./setPost.css";

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
      <div style={{ padding: "16px" }}>
        <button
          style={{ padding: "5px", width: "100px" }}
          onClick={() => setIsLogged((prev) => (prev = !prev))}
        >
          {isLogged ? "Logout" : "Login"}
        </button>
        <h1>Title:{post.title}</h1>
        <h2>Subtitle:{post.subtitle}</h2>
        <p>Author: {post.author}</p>
      </div>

      {isLogged && (
        <form>
          <input
            style={{ margin: "10px" }}
            type="text"
            placeholder="Enter the title:"
            value={post.title}
            onChange={(e) =>
              setPost((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <input
            style={{ margin: "10px" }}
            type="text"
            placeholder="Enter the subtitle:"
            value={post.subtitle}
            onChange={(e) =>
              setPost((prev) => ({ ...prev, subtitle: e.target.value }))
            }
          />
          <input
            style={{ margin: "10px" }}
            type="text"
            placeholder="Enter the author:"
            value={post.author}
            onChange={(e) =>
              setPost((prev) => ({ ...prev, author: e.target.value }))
            }
          />
          <button
            style={{ padding: "5px", width: "100px" }}
            onClick={createNewPost}
            disabled={!post.title || !post.subtitle || !post.author}
          >
            Create Post
          </button>
        </form>
      )}
      {!!posts.length && isLogged && (
        <table
          style={{
            width: "800px",
            margin: "10px",
            border: "2px solid black",
            borderCollapse: "collapse",
            letterSpacing: "1px",
          }}
        >
          <tr>
            <th style={{ padding: "10px", border: "1px solid black" }}>No:</th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Title:
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Subtitle:
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Author:
            </th>
            <th style={{ padding: "10px", border: "1px solid black" }}>
              Created at:
            </th>
          </tr>
          {posts.map((post, index) => (
            <tr key={index}>
              <th style={{ padding: "10px", border: "1px solid black" }}>
                {index + 1}
              </th>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                {post.title}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                {post.subtitle}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                {post.author}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid black",
                  textAlign: "center",
                }}
              >
                {post.createdAt.toLocaleString()}
              </td>
            </tr>
          ))}
        </table>
      )}
    </>
  );
};

export default SetPost;
