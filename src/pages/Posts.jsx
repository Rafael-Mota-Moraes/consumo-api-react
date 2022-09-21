import { useEffect, useState } from "react";
import Post from "../components/Post";
import styles from "./Posts.module.css";

export default function Posts({ searchValue }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((resp) => resp.json())
      .then((json) => setPosts(json));
  }, []);

  const filteredPosts = posts.filter((post) => {
    /*
      filtra o título do post e adiciona uma chave com a url da foto no array de posts 
    */
    return post.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div className={styles.postContainer}>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <Post
            title={post.title}
            body={post.body}
            id={post.id}
            imgUrl={post.imgUrl && post.imgUrl}
          />
        </div>
      ))}
    </div>
  );
}
