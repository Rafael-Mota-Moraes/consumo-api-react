import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./SinglePost.module.css";

export default function SinglePost() {
  const [post, setPost] = useState();
  const [postPhoto, setPostPhoto] = useState();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => resp.json())
      .then((json) => setPost(json));

    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((resp) => resp.json())
      .then((json) => setPostPhoto(json));
  }, []);

  return (
    post &&
    postPhoto && (
      <div className={styles.container}>
        <h1>{post.title}</h1>
        <img
          src={postPhoto.url}
          alt={post.title}
          className={styles.postImage}
        />
        <p>{post.body}</p>
      </div>
    )
  );
}
