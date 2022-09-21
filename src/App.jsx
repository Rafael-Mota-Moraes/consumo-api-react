import { useEffect, useState } from "react";
import Header from "./components/Header";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewPost from "./pages/NewPost";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Router>
      <Header setSearchValue={setSearchValue} />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Posts searchValue={searchValue} />} />
          <Route path="/:id" element={<SinglePost />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
