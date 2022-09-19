import { useEffect, useState } from "react";
import Header from "./components/Header";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((json) => setPosts(json));
  }, []);

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchValue);
  });

  return (
    <Router>
      <Header setSearchValue={setSearchValue} />
      <main style={{ minHeight: "73vh" }}>
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
