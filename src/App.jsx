import { useEffect, useState } from "react";
import Header from "./components/Header";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((json) => setPosts(json));
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.json())
      .then((json) => setPhotos(json));
  }, []);

  const filteredPosts = posts.filter((post) => {
    /* 
      filtra o título do post e adiciona uma chave com a url da foto no array de posts 
    */
    return (
      post.title.toLowerCase().includes(searchValue) &&
      (post.url = photos[post.id].url)
    );
  });

  return (
    <Router>
      <Header setSearchValue={setSearchValue} />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Posts postsArray={filteredPosts} />} />
          <Route path="/:id" element={<SinglePost />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
