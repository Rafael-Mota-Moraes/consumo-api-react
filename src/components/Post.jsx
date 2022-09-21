import { Link } from "react-router-dom";
import styles from "./Post.module.css";

export default function Post({ title, body, imgUrl, id }) {
  return (
    <Link to={`/${id}`}>
      <div className={styles.post}>
        <h2 className={styles.title}>
          {title.length > 15 ? <span>{title.slice(0, 15)}...</span> : title}
        </h2>
        {imgUrl && <img src={imgUrl} alt={title} className={styles.img} />}
        <p className={styles.body}>
          {body.length > 15 ? <span>{body.slice(0, 100)}...</span> : body}
        </p>
      </div>
    </Link>
  );
}
