import { Link } from "react-router-dom";
import Post from "../components/Post";
import styles from "./Posts.module.css";

export default function Posts({ postsArray }) {
  return (
    <div className={styles.postContainer}>
      {postsArray.map((post) => (
        <div key={post.id}>
          <Link to={`/${post.id}`}>
            <Post
              title={post.title}
              body={post.body}
              id={post.id}
              imageUrl={post.url && post.url}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
