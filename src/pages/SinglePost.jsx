import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SinglePost.module.css";

export default function SinglePost() {
  const [post, setPost] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((resp) => resp.json())
      .then((json) => setPost(json));
  }, [id]);

  return (
    post && (
      <div className={styles.container}>
        <h1>{post.title}</h1>

        {post.imgUrl && (
          <img
            src={post.imgUrl}
            alt={post.title}
            className={styles.postImage}
          />
        )}

        <p>{post.body}</p>
      </div>
    )
  );
}
