import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import ModalForm from "../components/ModalForm";
import styles from "./SinglePost.module.css";

export default function SinglePost() {
  const [post, setPost] = useState();
  const [showModal, setShowModal] = useState(false);

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
        {showModal && (
          <ModalForm
            id={post.id}
            postTitle={post.title}
            postBody={post.body}
            postImgUrl={post.imgUrl}
            closeModal={setShowModal}
          />
        )}
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
          <button
            onClick={() => setShowModal(true)}
            className={styles.editButton}
          >
            Editar Post
          </button>
        </div>
      </div>
    )
  );
}
