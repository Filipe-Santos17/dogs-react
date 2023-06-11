import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFeed from "../components/Feed/Feed";
import UserPhotoPost from "../components/Feed/PhotoPost";
import UserEstatisticas from "../components/Feed/Estatisticas";
import { useContext } from "react";
import { UserContext } from "../userContext";

export default function Users() {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserFeed user={data.id} />} />
        <Route path="postar/" element={<UserPhotoPost />} />
        <Route path="estatisticas/" element={<UserEstatisticas />} />
      </Routes>
    </section>
  );
}
