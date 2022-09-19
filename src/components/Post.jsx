import styles from "./Post.module.css";

export default function Post({ title, body }) {
  return (
    <div className={styles.post}>
      <h2 className={styles.title}>{title.slice(0, 15)}...</h2>
      <hr />
      <p className={styles.body}>{body}</p>
    </div>
  );
}
