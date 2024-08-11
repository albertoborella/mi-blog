import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home"
import { Posteos } from "../components/Posteos/Posteos";
import NewPost from "../components/NewPost/NewPost";
import { Post } from "../components/Post/Post";

export const RouterPrincipal = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posteos" element={<Posteos />} />
          <Route path="/posteos/:id" element={<Post />} />
          <Route path="/crear" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
