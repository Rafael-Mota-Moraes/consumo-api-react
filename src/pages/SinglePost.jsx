import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./SinglePost.module.css";

export default function SinglePost() {
  const [post, setPost] = useState();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/posts/${id}`)
      .then((resp) => resp.json())
      .then((json) => setPost(json));
  }, [id]);

  async function deletePost() {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE"
    });

    navigate("/");
  }

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

        <div>
          <button onClick={deletePost} className={styles.deleteButton}>
            Deletar Post
          </button>
          {/* <button onClick={deletePost} className={styles.editButton}>
            Editar Post
          </button> */}
        </div>
      </div>
    )
  );
}
