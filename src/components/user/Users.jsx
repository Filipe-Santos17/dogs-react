import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import UserFeed from "../Feed/Feed";
import UserPhotoPost from "../Feed/PhotoPost";
import UserEstatisticas from "../Feed/Estatisticas";
import { useContext } from "react";
import { UserContext } from "../../userContext";
import NotFound from "../NotFound";

export default function Users() {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserFeed user={data.id} />} />
        <Route path="postar/" element={<UserPhotoPost />} />
        <Route path="estatisticas/" element={<UserEstatisticas />} />
        <Route path="*" element={<NotFound/>} /> 
      </Routes>
    </section>
  );
}
