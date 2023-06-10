import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFeed from "../components/Feed/Feed";
import UserPhotoPost from "../components/Feed/PhotoPost";
import UserEstatisticas from "../components/Feed/Estatisticas";

export default function Users() {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserFeed/>} />
        <Route path="postar/" element={<UserPhotoPost/>} />
        <Route path="estatisticas/" element={<UserEstatisticas/>} />
      </Routes>
    </section>
  );
}
