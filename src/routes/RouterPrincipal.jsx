import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Home } from "../components/Home";
import { Posteos } from "../components/Posteos";
import NewPost from "../components/NewPost";

export const RouterPrincipal = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posteos" element={<Posteos />} />
          <Route path="/crear" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
