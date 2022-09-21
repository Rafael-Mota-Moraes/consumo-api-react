import styles from "./NewPost.module.css";

import Input from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const navigate = useNavigate();

  async function handleSubmit() {
    try {
      const post = await fetch("http://localhost:3000/posts/", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          title: title,
          body: body,
          imgUrl: imgUrl
        })
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.formContainer}>
      <Input label="Título do post" type="text" onChange={setTitle} />
      <Input label="Conteúdo do post" type="textarea" onChange={setBody} />
      <Input label="Url da imagem" type="text" onChange={setImgUrl} />

      <button className={styles.button} onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
}
