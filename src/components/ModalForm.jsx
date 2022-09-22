import styles from "./ModalForm.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";

export default function ModalForm({ id, postTitle, postBody, postImgUrl }) {
  const [title, setTitle] = useState(postTitle);
  const [body, setBody] = useState(postBody);
  const [imgUrl, setImgUrl] = useState(postImgUrl);

  const navigate = useNavigate();
  async function editPost() {
    const post = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        imgUrl: imgUrl
      })
    });

    navigate(`/`);
  }

  return (
    <div className={styles.wraper}>
      <div className={styles.formContainer}>
        <Input
          label="Título do post"
          type="text"
          onChange={setTitle}
          valor={title}
        />
        <Input
          label="Conteúdo do post"
          type="textarea"
          onChange={setBody}
          valor={body}
        />
        <Input
          label="Url da imagem"
          type="text"
          onChange={setImgUrl}
          valor={imgUrl}
        />
        <button onClick={editPost} className={styles.button}>
          Salvar
        </button>
      </div>
    </div>
  );
}
