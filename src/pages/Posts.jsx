import { Link } from "react-router-dom";
import Post from "../components/Post";
import styles from "./Posts.module.css";

export default function Posts({ postsArray }) {
  return (
    <div className={styles.postContainer}>
      {postsArray.map((post) => (
        <Link to={`/${post.id}`}>
          <Post title={post.title} body={post.body} key={post.id} />
        </Link>
      ))}
    </div>
  );
}
