import React from "react";
import { useParams } from "react-router-dom";
import UserFeed from "../Feed/Feed";

export default function UserProfile() {
  const { user } = useParams();

  return (
    <section className="container mainSection">
      <h1 className="title">{user}</h1>
      <UserFeed user={user} />
    </section>
  );
}
